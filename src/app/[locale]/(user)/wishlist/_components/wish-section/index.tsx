"use client";
import { allProductItems } from "@/app/[locale]/(public)/_mock/carousel";
import CustomButton from "@/components/common/custom-button";
import ProductCard from "@/components/common/product-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { IProductProps } from "@/constants/product.constant";
import { useCartStore } from "@/store/cart/cart-store";
import { useWishListStore } from "@/store/wishlist/wishlist-store";
import { useState } from "react";

const WishListSection = () => {
  const { wishLists, clearWishList } = useWishListStore();
  const { addToCart } = useCartStore();

  const [movedToCart, setMovedToCart] = useState<boolean>();

  const wishlistItems = wishLists
    .map((wishId) => allProductItems.find((item) => item.id === wishId))
    .filter(Boolean) as IProductProps[];

  // add wishlist item to cart
  const moveToCartHandler = () => {
    if (wishLists.length === 0) return;
    wishlistItems.forEach((product) => {
      addToCart(product);
    });

    clearWishList();

    setMovedToCart(true);
  };

  if (wishLists.length === 0) {
    return (
      <>
        <div className="grid gap-20 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-xl">Wishlist (0)</h2>

            <CustomButton
              label="Move All To Bag"
              className="border-black shadow font-medium"
            />
          </div>
        </div>
        {movedToCart ? (
          <h2 className="text-xl text-center font-medium">
            Your Wish List Item has been moved to cart.
          </h2>
        ) : (
          <h2 className="text-xl text-center font-medium">
            Your Wish List is Empty.
          </h2>
        )}
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Wishlist ({wishLists.length})</h2>

        <CustomButton
          label="Move All To Bag"
          className=" py-5  shadow font-medium"
          variant="ghostly"
          onClick={moveToCartHandler}
        />
      </div>

      <ScrollArea className="w-full max-w-full h-82">
        <div className="grid xs:grid-cols-2 px-4 sm-md:px-0 sm:grid-cols-3 gap-3 sm:gap-3 lg:grid-cols-4 md-lg:gap-[30px] auto-rows-fr">
          {wishlistItems.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              type="wishList"
            />
          ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </>
  );
};

export default WishListSection;
