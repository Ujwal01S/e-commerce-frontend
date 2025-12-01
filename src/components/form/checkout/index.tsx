"use client";

import OrderCard from "@/app/[locale]/(user)/cart/checkout/_component/order-card/order-card";
import RHFInput from "@/components/rhf/rhf-input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  checkoutSchema,
  CheckoutSchemaType,
} from "@/schema/checkout/checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
  const form = useForm<CheckoutSchemaType>({
    defaultValues: {
      companyName: "",
      coupon: "",
      email: "",
      firstName: "",
      item: "",
      location: "",
      phone: "",
      streetAddress: "",
    },

    resolver: zodResolver(checkoutSchema),
  });

  const submitHandler = (data: CheckoutSchemaType) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="grid px-8 sm-md:px-0 grid-cols-1 gap-8 sm-md:grid-cols-2 sm-md:gap-20 md:gap-32 md-lg:gap-58 justify-between"
        >
          {/* form content */}
          <div className="grid gap-4">
            <RHFInput
              name="firstName"
              label="First Name"
              placeholder=""
              inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
            />

            <RHFInput
              name="companyName"
              label="Company Name"
              placeholder=""
              inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
            />

            <RHFInput
              name="streetAddress"
              label="Street Address"
              placeholder=""
              inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
            />

            <RHFInput
              name="item"
              label="Appartment, floor, etc, (optional)"
              placeholder=""
              inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
            />

            <RHFInput
              name="location"
              label="Town/City"
              placeholder=""
              inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
            />

            <RHFInput
              name="phone"
              label="Phone Number"
              placeholder=""
              inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
            />

            <RHFInput
              name="email"
              label="Email Address"
              placeholder=""
              inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
            />

            <div className="flex items-center gap-2">
              <Checkbox
                id="save"
                className="data-[state=checked]:bg-button-background data-[state=checked]:border-button-background"
              />
              <Label
                htmlFor="save"
                className="font-normal"
              >
                Save this information for faster check-out next time
              </Label>
            </div>
          </div>

          {/* cart info */}
          <div>
            <OrderCard />
          </div>
        </form>
      </Form>
    </>
  );
};

export default CheckoutForm;
