"use client";
import CustomButton from "@/components/common/custom-button";
import SizeSelector from "@/components/common/size-selector";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { notificationMessage } from "@/constants/product.constant";
import { useWishListStore } from "@/store/wishlist/wishlist-store";
import { successNotification } from "@/utills/toast-notification";
import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";

const ProductDetailOptions = ({ productId }: { productId: string }) => {
  const [selectedSize, setSelectedSize] = useState<string>("m");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const { addToWishList, wishLists, removeFromWishList } = useWishListStore();

  const qualityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const numValue = parseInt(value) || 0;

    if (numValue >= 0) {
      setSelectedQuantity(numValue);
    }
  };

  const handleDecrement = () => {
    setSelectedQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setSelectedQuantity((prev) => prev + 1);
  };

  const productExists = wishLists.find((item) => item === productId);

  const handleWishList = () => {
    if (productExists) {
      removeFromWishList(productId);
    } else {
      successNotification({
        header: "Cart",
        description: notificationMessage.success,
      });
      addToWishList(productId);
    }
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <p>Colours:</p>

        <RadioGroup
          defaultValue="gray"
          className="flex gap-4"
        >
          <RadioGroupItem
            value="gray"
            className="text-[#a0bce0]  bg-[#a0bce0] data-[state=checked]:border-black"
          />
          <RadioGroupItem
            value="orange"
            className="text-button-background bg-button-background data-[state=checked]:border-black "
          />
        </RadioGroup>
      </div>

      <SizeSelector
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full">
        {/* Quantity selector */}
        <div className="flex border rounded-sm flex-1 max-w-[270px]">
          <button
            className="text-xl sm:text-2xl flex items-center rounded-l-sm justify-center hover:bg-button-background hover:text-white transition-colors flex-[30%] min-w-[35px] sm:min-w-[45px] border-r"
            type="button"
            onClick={handleDecrement}
          >
            <Minus />
          </button>

          <Input
            className="flex-1 border-0 focus-visible:ring-0 rounded-none text-center px-1 sm:px-2 min-w-[70px]"
            value={selectedQuantity.toString()}
            onChange={qualityChangeHandler}
            type="number"
            min="1"
          />

          <button
            className="text-xl sm:text-2xl flex items-center rounded-r-sm justify-center hover:bg-button-background hover:text-white transition-colors flex-[30%] min-w-[35px] sm:min-w-[45px] border-l"
            type="button"
            onClick={handleIncrement}
          >
            <Plus />
          </button>
        </div>

        {/* Buy Now button */}
        <CustomButton
          label="Buy Now"
          className="rounded-sm py-2 sm:py-3 flex-1  text-sm sm:text-base"
        />

        {/* Wishlist button */}
        <button
          className="border rounded-sm p-2 sm:p-2 hover:bg-gray-50 transition-colors shrink-0"
          onClick={handleWishList}
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 ${productExists ? "text-button-background" : undefined}`}
            fill={productExists ? "#db4444" : "#ffff"}
          />
        </button>
      </div>
    </>
  );
};

export default ProductDetailOptions;
