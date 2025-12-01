"use client";

import CustomButton from "@/components/common/custom-button";
import RHFInput from "@/components/rhf/rhf-input";
import RHFTextArea from "@/components/rhf/rhf-textarea";
import { Form } from "@/components/ui/form";
import {
  contactSchema,
  ContactSchemaType,
} from "@/schema/contact/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { data } = useSession();
  const form = useForm<ContactSchemaType>({
    defaultValues: {
      email: "",
      message: "",
      name: "",
      phone: "",
    },
    resolver: zodResolver(contactSchema),
  });

  // pre-populate form if session exsists
  useEffect(() => {
    if (data?.user) {
      form.reset({
        email: data.user.email ?? "",
        name: data.user.name ?? "",
        phone: data.user.phone ?? "",
        message: "",
      });
    }
  }, [data?.user, form]);

  const handleContactSubtmit = (data: ContactSchemaType) => {
    console.log(data);
    // Reset form after submission
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleContactSubtmit)}
        className="grid gap-3"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start">
          <RHFInput
            name="name"
            placeholder="Your Name *"
            inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
          />

          <RHFInput
            name="email"
            placeholder="Your Email *"
            inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
          />

          <RHFInput
            name="phone"
            placeholder="Your Phone *"
            inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
          />
        </div>

        <RHFTextArea
          name="message"
          placeholder="Your Message"
          inputClassName="shadow-none py-3 border-none bg-[#f5f5f5] rounded-sm min-h-50"
        />

        <div className="w-full flex justify-end">
          <CustomButton
            label="Send Message"
            className="my-4 py-5"
          />
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
