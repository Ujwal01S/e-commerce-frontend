"use client";

import { useForm } from "react-hook-form";
import { Form } from "../../ui/form";
import RHFInput from "../../rhf/rhf-input";
import RHFPasswordInput from "../../rhf/rhf-password-input";
import { registerSchema, RegisterSchemaType } from "@/schema/auth/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "../../common/custom-button";
import GoogleSVG from "@/svgs/google-svg";

const SignUpForm = () => {
  const form = useForm<RegisterSchemaType>({
    defaultValues: {
      emailOrPhone: "",
      name: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const handleSignup = (data: RegisterSchemaType) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignup)}
          className="grid gap-4"
        >
          <RHFInput
            name="name"
            placeholder="Name"
            inputClassName="border-0 border-b-1 border-muted-foreground shadow-none rounded-none focus-visible:ring-0 pl-0"
          />

          <RHFInput
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            inputClassName="border-0 border-b-1 border-muted-foreground shadow-none rounded-none focus-visible:ring-0 pl-0"
          />

          <RHFPasswordInput
            name="password"
            placeholder="Password"
            isRequired={false}
            inputClassName="border-0 border-b-1 border-muted-foreground shadow-none rounded-none focus-visible:ring-0 pl-0"
          />

          <CustomButton
            label="Create Account"
            className="py-5.5 font-medium mt-4"
          />
        </form>
      </Form>

      <CustomButton
        label="Sign up with Google"
        className="flex gap-3 bg-white text-black border hover:bg-white py-5.5 shadow mt-2"
        icon={<GoogleSVG />}
      />
    </>
  );
};

export default SignUpForm;
