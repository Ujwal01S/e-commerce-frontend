import {
  formValidationMessage,
  passwordRegex,
} from "@/constants/form-validation/form.constant";
import { z } from "zod";

export const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .min(8, formValidationMessage.emailOrPhone)
    .refine((value) => {
      if (value.length < 3) return false;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[1-9][0-9]{9}$/;

      return emailRegex.test(value) || phoneRegex.test(value);
    }, formValidationMessage.emailOrPhone),

  password: z.string().min(4, formValidationMessage.password),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = loginSchema
  .omit({
    password: true,
  })
  .extend({
    name: z
      .string(formValidationMessage.name)
      .min(4, formValidationMessage.name),
    password: z
      .string()
      .nonempty(formValidationMessage.specialPassword)
      .refine((val) => {
        return passwordRegex.test(val);
      }, formValidationMessage.specialPassword),
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
