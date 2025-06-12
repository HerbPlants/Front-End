"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

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
import { registerUser } from "@/services/authServices";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

// Skema validasi menggunakan zod
const registerSchema = z
  .object({
    fullname: z.string().min(3, "Nama lengkap harus minimal 3 karakter"),
    username: z.string().min(3, "Username harus minimal 3 karakter"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password harus minimal 6 karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi password tidak cocok",
  });

export default function FormRegister() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      toast({
        className: "bg-dark-green-shades-20 text-white border-none",
        title: "Anda sudah login",
        description:<h2 className="text-sm">Anda akan diarahkan ke halaman utama</h2>,
        action : <ToastAction className="text-sm hover:bg-green-shades-85 hover:text-dark-green-shades-20 " onClick={() => { router.push("/") }} altText="Okey">Okey</ToastAction>,
        duration: 3500
      })
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [router]);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      await registerUser({
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: data.password,
      });

      let counter = 3;
      setSuccessMessage(
        `Registrasi berhasil! Mengalihkan dalam ${counter} detik...`
      );

      const interval = setInterval(() => {
        counter -= 1;
        setSuccessMessage(
          `Registrasi berhasil! Mengalihkan dalam ${counter} detik...`
        );

        if (counter === 0) {
          clearInterval(interval);
          router.push("/login");
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
            className="max-w-14 md:max-w-24"
          />
        </CardTitle>
        <CardDescription className="text-3xl font-semibold text-center text-dark-green-shades-15">
          Register
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
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              <div className="w-full md:w-1/2">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Nama lengkap" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-1/2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email aktif" {...field} />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Password</FormLabel>
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
              Register
            </LoadingButton>

            <div className="mt-2 text-center text-sm text-muted-foreground">
              Sudah punya akun?{" "}
              <a
                href="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Login
              </a>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
