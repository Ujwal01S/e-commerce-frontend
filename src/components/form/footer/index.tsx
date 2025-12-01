"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  footerSchema,
  FooterSchemaType,
} from "@/schema/contact/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FooterForm = () => {
  const form = useForm<FooterSchemaType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(footerSchema),
  });

  const submitHandler = (data: FooterSchemaType) => {
    console.log(data);
  };

  // Clear error after 2 seconds when error appears
  useEffect(() => {
    const error = form.formState.errors.email;

    if (error) {
      const timer = setTimeout(() => {
        form.clearErrors("email");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [form.formState.errors.email]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative mt-4 xs-sm:w-[124%]">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border border-gray-600 text-white placeholder:text-gray-500 pr-12 h-12 rounded-md focus-visible:ring-0 focus-visible:border-white transition-colors"
                    {...field}
                  />
                  <button type="submit">
                    <SendHorizontal className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white " />
                  </button>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default FooterForm;
