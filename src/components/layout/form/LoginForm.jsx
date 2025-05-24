"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { LoadingButton } from "@/components/my-components/ButtonCustom";
import { loginUser } from "@/services/authServices";
import Image from "next/image";

const loginSchema = z.object({
  username: z.string().min(3, "Username harus minimal 3 karakter"),
  password: z.string().min(4, "Password harus minimal 4 karakter"),
});

export default function FormLogin() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const result = await loginUser(data);

      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);

      let counter = 3;
      setSuccessMessage(
        `Login berhasil! Mengalihkan dalam ${counter} detik...`
      );

      const interval = setInterval(() => {
        counter -= 1;
        setSuccessMessage(
          `Login berhasil! Mengalihkan dalam ${counter} detik...`
        );

        if (counter === 0) {
          clearInterval(interval);
          window.location.href = "/";
        }
      }, 1000);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-screen-sm bg-green-shades-95 border-green-shades-85 py-2 lg:py-4 lg:px-10">
      <CardHeader className="space-y-2">
        <CardTitle className="mx-auto">
          <Image
            src="/images/logo/logo_simple.png"
            alt="logo"
            width={144}
            height={144}
            className="max-w-14  md:max-w-24"
          />
        </CardTitle>
        <CardDescription className="text-3xl font-semibold text-center text-dark-green-shades-15">
          Login
        </CardDescription>

        {errorMessage && (
          <div className="mt-2 rounded-md bg-red-100 border border-red-300 px-4 py-2 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mt-2 rounded-md bg-green-100 border border-green-300 px-4 py-2 text-sm text-green-700">
            {successMessage}
          </div>
        )}
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoadingButton
              type="submit"
              className="w-full font-semibold"
              isLoading={isLoading}
            >
              Login
            </LoadingButton>
            <div className="mt-2 text-center text-sm text-muted-foreground">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="underline underline-offset-4 hover:text-primary"
          >
            Daftar
          </a>
        </div>
          </form>
        </Form>

        
      </CardContent>
    </Card>
  );
}
