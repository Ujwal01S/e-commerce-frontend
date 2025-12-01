import {
  formValidationMessage,
  passwordRegex,
} from "@/constants/form-validation/form.constant";
import z from "zod";

export const profileSchema = z
  .object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.email().nonempty(formValidationMessage.email),

    address: z.string().optional(),

    password: z.string().nonempty(formValidationMessage.password),
    newPassword: z
      .string()
      .nonempty(formValidationMessage.newPassword)
      .refine((val) => {
        return passwordRegex.test(val);
      }, "Password must be 6 character long with 1 special character and number"),
    confirmPassword: z.string().nonempty(formValidationMessage.confirmPassword),
  })
  .refine((val) => val.confirmPassword === val.newPassword, {
    message: "Both Password new and confirm should be same",
    path: ["confirmPassword"],
  });

export type ProfileSchemaType = z.infer<typeof profileSchema>;
