import { formValidationMessage } from "@/constants/form-validation/form.constant";
import z from "zod";

export const couponSchema = z.object({
  coupon: z.string().nonempty(formValidationMessage.coupon),
});

export type CouponSchemaType = z.infer<typeof couponSchema>;
