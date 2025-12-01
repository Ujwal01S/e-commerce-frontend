import { formValidationMessage } from "@/constants/form-validation/form.constant";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(4, formValidationMessage.name),
  email: z.email().nonempty(),
  phone: z.string().refine((val) => /^\d{10}$/.test(val), {
    message: "Phone number must be exactly 10 digits",
  }),
  message: z
    .string()
    .min(10, formValidationMessage.message)
    .max(100, formValidationMessage.message),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;

export const footerSchema = contactSchema.omit({
  message: true,
  name: true,
  phone: true,
});

export type FooterSchemaType = z.infer<typeof footerSchema>;
