"use client";
import CustomButton from "@/components/common/custom-button";
import RHFInput from "@/components/rhf/rhf-input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formValidationMessage } from "@/constants/form-validation/form.constant";
import { useCartStore } from "@/store/cart/cart-store";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const OrderCard = () => {
  const { cartItems, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();

  const { watch, setError, clearErrors } = useFormContext();

  const couponValue = watch("coupon");

  const couponHandler = () => {
    if (!couponValue) {
      setError("coupon", {
        type: "manual",
        message: formValidationMessage.coupon,
      });
    }

    setTimeout(() => {
      clearErrors("coupon");
    }, 2000);
  };

  return (
    <div className="grid gap-8">
      <div className="grid w-[80%] gap-8 ">
        {/* cart item */}
        <ScrollArea className="max-h-[18vh] pr-2">
          <div className="grid gap-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full flex justify-between items-center"
              >
                <div className="">
                  <Image
                    width={30}
                    height={30}
                    src={item.imageUrl}
                    alt={item.title}
                    quality={100}
                    className="h-auto w-auto"
                  />
                </div>

                <p>${item.discountedPrice ?? item.price}</p>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex items-center justify-between border-b pb-3">
          <p>Subtotal:</p>

          <p>${totalPrice}</p>
        </div>
        <div className="flex items-center justify-between border-b pb-3">
          <p>Shipping:</p>

          <p>Free</p>
        </div>

        <div className="flex items-center justify-between">
          <p>Total:</p>

          <p>${totalPrice}</p>
        </div>

        <RadioGroup
          defaultValue="bank"
          className="grid grid-cols-2 justify-between items-center"
        >
          <div className="flex gap-3 items-center">
            <RadioGroupItem
              value="bank"
              id="bank"
            />
            <Label
              htmlFor="bank"
              className="font-normal text-base"
            >
              Bank
            </Label>
          </div>
          <div className="justify-self-end-safe">
            <Image
              src={"/payment.jpg"}
              alt="payment"
              width={200}
              height={100}
              quality={100}
            />
          </div>

          <div className="flex gap-3 items-center">
            <RadioGroupItem
              value="cash"
              id="cash"
            />
            <Label
              htmlFor="cash"
              className="font-normal text-base"
            >
              Cash on delivery
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-[46%_40%] gap-3 w-full items-start">
        <div>
          <RHFInput
            name="coupon"
            placeholder="Coupon Code"
            inputClassName="border-muted-foreground shadow-none focus-visible:ring-0 rounded-sm py-5 w-full"
          />
        </div>

        <button
          className="bg-button-background hover:bg-button-background rounded-xs font-medium text-white py-2 mt-2"
          type="button"
          onClick={couponHandler}
        >
          Apply Coupon
        </button>
      </div>

      <CustomButton
        label="Place Order"
        className="w-fit py-5"
      />
    </div>
  );
};

export default OrderCard;
