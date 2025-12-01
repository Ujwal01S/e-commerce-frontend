import { formValidationMessage } from "@/constants/form-validation/form.constant";
import z from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().nonempty(formValidationMessage.name),
  companyName: z.string().nonempty(formValidationMessage.companyName),
  streetAddress: z.string().nonempty(formValidationMessage.streetAddress),
  location: z.string().nonempty(formValidationMessage.location),
  phone: z.string().refine((val) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(val);
  }, formValidationMessage.phone),
  email: z.string().nonempty(formValidationMessage.email),
  item: z.string().optional(),
  coupon: z.string().optional(),
});

export type CheckoutSchemaType = z.infer<typeof checkoutSchema>;
