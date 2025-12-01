"use client";

import { loginSchema, LoginSchemaType } from "@/schema/auth/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomButton from "../../common/custom-button";
import RHFInput from "../../rhf/rhf-input";
import RHFPasswordInput from "../../rhf/rhf-password-input";
import { Form } from "../../ui/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  errorNotification,
  successNotification,
} from "@/utills/toast-notification";

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginSchemaType>({
    defaultValues: {
      emailOrPhone: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const handleSignup = async (data: LoginSchemaType) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        emailOrPhone: data.emailOrPhone, // Fixed typo here
        password: data.password,
      });

      if (result?.error) {
        errorNotification({
          header: "Login Failed",
          description: result.error || "Invalid credentials",
        });
      } else if (result?.ok) {
        successNotification({
          header: "Success",
          description: "Logged in successfully!",
        });
        router.push("/en");
        router.refresh(); // Refresh to update session
      }
    } catch (error) {
      errorNotification({
        header: "Error",
        description: "Something went wrong. Please try again.",
      });
      console.error("SignIn error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignup)}
          className="grid gap-4"
        >
          <RHFInput
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            inputClassName="border-0 border-b-1 border-muted-foreground shadow-none rounded-none focus-visible:ring-0 pl-0"
          />

          <RHFPasswordInput
            name="password"
            placeholder="Password"
            inputClassName="border-0 border-b-1 border-muted-foreground shadow-none rounded-none focus-visible:ring-0 pl-0"
          />

          <div className="flex justify-between items-center py-4 cursor-pointer">
            <CustomButton label={isLoading ? "Logging in..." : "Log in"} />

            <p className="text-button-background text-sm">Forget Password?</p>
          </div>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
