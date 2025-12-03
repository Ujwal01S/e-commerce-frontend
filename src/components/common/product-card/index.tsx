"use client";
import { FillEye, HeartSvg } from "@/svgs/product-card";
import { Star, Trash2 } from "lucide-react";
import Image from "next/image";
import ProductTag from "../product-tag";
import { useState } from "react";
import AddToCart from "../add-to-cart";
import {
  IProductProps,
  notificationMessage,
} from "@/constants/product.constant";
import ImageViewerModal from "@/components/image-viewer";
import { useWishListStore } from "@/store/wishlist/wishlist-store";
import { useCartStore } from "@/store/cart/cart-store";
import {
  errorNotification,
  successNotification,
} from "@/utills/toast-notification";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const RatingStar = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="text-white w-5 h-5"
          fill={index < rating ? "#ffad33" : "#808080"}
        />
      ))}
    </div>
  );
};

const ProductCard = ({
  imageUrl,
  noOfRating,
  rating,
  title,
  discountedPrice,
  new: isProductNew,
  price,
  discountPercent,
  type = "Default",
  id,
  category,
  description,
  stock,
}: IProductProps & { type?: "Default" | "wishList" | "recommendation" }) => {
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const router = useRouter();
  const { data } = useSession();

  const { addToWishList, removeFromWishList, wishLists } = useWishListStore();
  const { addToCart, cartItems } = useCartStore();

  const itemAlreadyExists = wishLists.find((wishId) => wishId === id);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(`/product/${category}/${id}`);
  };

  const handleViewImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsViewerOpen(true);
  };

  const wishHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const wishAlreadyExists = wishLists.find((storeId) => storeId === id);

    // Check if all wishlist items are already in cart
    // const allItemsInCart = cartItems.find((item) => item.id === id);

    // if (allItemsInCart) {
    //   errorNotification({
    //     header: "WishList",
    //     description: notificationMessage.wishlistInCart,
    //   });
    //   return;
    // }

    if (!data?.user) {
      router.push("/login");
      errorNotification({
        header: "Auth",
        description: notificationMessage.loginRequired,
      });
      return;
    }

    if (wishAlreadyExists) {
      removeFromWishList(id);
    } else {
      addToWishList(id);
      successNotification({
        header: "Wishlist",
        description: notificationMessage.success,
      });
    }
  };

  const removeWishHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeFromWishList(id);
  };

  const addToCarthandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!data?.user) {
      router.push("/login");
      errorNotification({
        header: "Auth",
        description: notificationMessage.loginRequired,
      });
      return;
    }

    const productAlreadyExists = cartItems.find((storeId) => storeId.id === id);
    if (productAlreadyExists) {
      errorNotification({
        header: "Cart",
        description: notificationMessage.alreadyExists,
      });
    } else {
      successNotification({
        header: "Cart",
        description: notificationMessage.success,
      });
    }

    const product: IProductProps = {
      id,
      imageUrl,
      noOfRating,
      price,
      rating,
      title,
      discountedPrice,
      discountPercent,
      new: isProductNew,
      category,
      description,
      stock,
    };

    addToCart(product);
  };

  return (
    <>
      <div
        className="grid gap-1 md:gap-3 relative cursor-pointer "
        onMouseEnter={() => setIsMouseInside(true)}
        onMouseLeave={() => setIsMouseInside(false)}
        onClick={handleCardClick}
      >
        <div className="relative aspect-video sm:aspect-square overflow-hidden shadow">
          <Image
            alt="img"
            src={imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-contain transition-transform duration-300 hover:scale-105"
            quality={100}
          />

          {type === "wishList" ? (
            <button
              type="button"
              onClick={removeWishHandler}
              className="absolute right-2 top-3 bg-white rounded-full p-1"
            >
              <Trash2 className="w-6 h-6" />
            </button>
          ) : (
            <>
              {type !== "recommendation" && (
                <button
                  type="button"
                  className="absolute right-2 top-3"
                  onClick={wishHandler}
                >
                  <HeartSvg fill={itemAlreadyExists ? "#db4444" : undefined} />
                </button>
              )}

              <button
                onClick={handleViewImage}
                type="button"
                className={`absolute right-2 ${type === "recommendation" ? "top-3" : "top-13"} `}
              >
                <FillEye />
              </button>
            </>
          )}

          {(discountPercent || isProductNew) && (
            <ProductTag
              label={discountPercent ?? "New"}
              className="absolute"
              variant={isProductNew ? "new" : "default"}
            />
          )}

          {isMouseInside && <AddToCart onClick={addToCarthandler} />}
        </div>

        <p className="font-medium text-sm">{title}</p>
        <div className="text-xs flex gap-2">
          {discountedPrice && (
            <p className="text-button-background">${discountedPrice}</p>
          )}
          <p
            className={`line-through ${discountedPrice ? "text-text-secondary" : "text-button-background"}`}
          >
            ${price}
          </p>
        </div>
        {type !== "wishList" && (
          <div className="flex gap-1">
            <RatingStar rating={rating} />
            <p className="text-xs text-text-secondary">{`(${noOfRating})`}</p>
          </div>
        )}
      </div>

      {/* Modal Viewer */}
      <ImageViewerModal
        imgUrl={imageUrl}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  );
};

export default ProductCard;
