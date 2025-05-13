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

const loginSchema = z.object({
  username: z.string().min(3, "Username harus minimal 3 karakter"),
  password: z.string().min(4, "Password harus minimal 4 karakter"),
});

export default function FormLogin() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(null);

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
    setCountdown(null);

    try {
      const result = await loginUser(data);

      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);

      let counter = 3;
      setCountdown(counter);
      setSuccessMessage(
        `Login berhasil! Mengalihkan dalam ${counter} detik...`
      );

      const interval = setInterval(() => {
        counter -= 1;
        setCountdown(counter);
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
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Masukkan username dan password Anda</CardDescription>

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
              className="w-full"
              isLoading={isLoading}
            >
              Login
            </LoadingButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
