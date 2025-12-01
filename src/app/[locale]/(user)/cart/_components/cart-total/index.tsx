"use client";
import CustomButton from "@/components/common/custom-button";
import { useRouter } from "@/i18n/routing";
import { useCartStore } from "@/store/cart/cart-store";
import { errorNotification } from "@/utills/toast-notification";

const CartTotalCard = () => {
  const { getTotalPrice } = useCartStore();

  const router = useRouter();

  const totalPrice = getTotalPrice();

  const checkoutHandler = () => {
    if (totalPrice === 0) {
      errorNotification({
        description: "No Item to checkout",
        header: "Checkout",
      });
    } else {
      router.push("/cart/checkout");
    }
  };

  return (
    <div className="py-4 px-4 space-y-2 shadow border border-black rounded-sm w-full md:w-[80%] place-self-end">
      <h4 className="text-xl font-medium">Cart Total</h4>

      <div className="flex justify-between py-3 border-b-2">
        <p>Subtotal:</p>

        <p>$ {totalPrice}</p>
      </div>

      <div className="flex justify-between py-3 border-b-2">
        <p>Shipping:</p>

        <p>Free</p>
      </div>

      <div className="flex justify-between py-3">
        <p>Total:</p>

        <p>$ {totalPrice}</p>
      </div>

      <div className="w-full flex justify-center my-2">
        <CustomButton
          label="Process to checkout"
          className="py-6 rounded-sm"
          onClick={checkoutHandler}
        />
      </div>
    </div>
  );
};

export default CartTotalCard;
