"use client";

import RHFInput from "@/components/rhf/rhf-input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import CustomButton from "../custom-button";
import { couponSchema, CouponSchemaType } from "@/schema/cart/coupon.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const CartCoupon = () => {
  const form = useForm<CouponSchemaType>({
    defaultValues: {
      coupon: "",
    },
    resolver: zodResolver(couponSchema),
  });

  const submitHandler = (data: CouponSchemaType) => {
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="grid grid-cols-2 md:grid-cols-[46%_40%] gap-3 w-full items-start"
        >
          <div>
            <RHFInput
              name="coupon"
              placeholder="Coupon Code"
              inputClassName="border-muted-foreground shadow-none focus-visible:ring-0 rounded-sm py-5 w-full"
            />
          </div>

          <CustomButton
            label="Apply Coupon"
            className="py-5 px-6 whitespace-nowrap my-2"
          />
        </form>
      </Form>
    </div>
  );
};

export default CartCoupon;
