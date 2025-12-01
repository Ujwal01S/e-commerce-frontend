"use client";

import CustomButton from "@/components/common/custom-button";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/routing";
import { ICartItem, useCartStore } from "@/store/cart/cart-store";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CartTable: React.FC = () => {
  const { cartItems, completelyRemoveItem, updateQuantities } = useCartStore();

  const [stateCartItems, setStateCartItems] = useState<ICartItem[] | []>([]);

  const router = useRouter();

  useEffect(() => {
    setStateCartItems(cartItems);
  }, [cartItems]);

  const completeItemRemovalHandler = (id: string) => {
    completelyRemoveItem(id);
  };

  // update the quantity in local store

  const qualityChangeHandler = (id: string, value: string) => {
    if (value === "") {
      setStateCartItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: 0,
                subtotal: 0,
              }
            : item,
        ),
      );
      return;
    }

    const qty = Math.max(1, parseInt(value) || 1);

    // Update local state for immediate UI update
    setStateCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: qty,
              subtotal: (item?.discountedPrice || item.price) * qty,
            }
          : item,
      ),
    );
  };

  const handleBlur = (id: string) => {
    // When input loses focus, ensure value is at least 1
    setStateCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < 1
          ? {
              ...item,
              quantity: 1,
              subtotal: (item?.discountedPrice || item.price) * 1,
            }
          : item,
      ),
    );
  };

  // update the quantity modified in table to the store

  const updateGlobalCart = () => {
    if (stateCartItems.length === 0) return;

    // Filter out any items with quantity 0 (from empty inputs)
    const validItems = stateCartItems.map((item) => ({
      ...item,
      quantity: Math.max(1, item.quantity), // Ensure at least 1
    }));

    const storeUpdatePayload = validItems.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
      };
    });

    updateQuantities(storeUpdatePayload);

    // Update local state to reflect the validated quantities
    setStateCartItems(validItems);
  };

  return (
    <>
      {/* Table section */}
      <div className="overflow-x-auto p-1 px-2">
        <div className="w-full min-w-[800px] ">
          {/* Table Header */}
          <div className="grid grid-cols-4 shadow ">
            <div className="text-left py-5 px-8 text-sm font-semibold text-gray-700">
              Product
            </div>
            <div className="text-center py-5 px-8 text-sm font-semibold text-gray-700">
              Price
            </div>
            <div className="text-center py-5 px-8 text-sm font-semibold text-gray-700">
              Quantity
            </div>
            <div className="text-right py-5 px-8 text-sm font-semibold text-gray-700">
              Subtotal
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="shadow rounded-lg items-center my-4 py-6">
              <p className="text-xl font-semibold text-center">Cart is Empty</p>
            </div>
          ) : (
            <div className="mt-4 overflow-y-auto max-h-80 px-2">
              {stateCartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 shadow rounded-lg items-center my-4"
                >
                  <div className="py-6 px-8 group relative">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-md overflow-hidden shrink-0">
                        <div className="relative w-16 h-16 ">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={50}
                            height={50}
                            className="object-contain rounded-md h-auto w-auto"
                          />
                        </div>
                      </div>

                      {/* Product Name */}
                      <span className="font-medium text-gray-800">
                        {item.title}
                      </span>
                    </div>

                    <button
                      className="absolute top-6 left-6 hidden group-hover:flex items-center justify-center w-5 h-5 rounded-full bg-red-500 transition"
                      onClick={() => completeItemRemovalHandler(item.id)}
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Price Column */}
                  <div className="text-center text-gray-700 font-medium">
                    $
                    {item?.discountedPrice?.toLocaleString() ||
                      item.price.toLocaleString()}
                  </div>

                  {/* Quantity Column */}
                  <div className="text-center">
                    <Input
                      type="number"
                      min="1"
                      value={
                        item.quantity === 0 ? "" : item.quantity.toString()
                      }
                      onChange={(e) =>
                        qualityChangeHandler(item.id, e.target.value)
                      }
                      onBlur={() => handleBlur(item.id)}
                      className="w-14 shadow-none rounded-sm focus-visible:ring-0 border-text-secondary"
                    />
                  </div>

                  {/* Subtotal Column */}
                  <div className="text-right font-medium text-gray-900 pr-8">
                    ${item.subtotal.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* action button */}

      <div className="flex justify-between px-2 ">
        <CustomButton
          label="Return To Shop"
          variant="ghostly"
          className="font-medium py-5 rounded-sm"
          onClick={() => router.push("/")}
        />

        <CustomButton
          label="Update Cart"
          variant="ghostly"
          className="font-medium py-5 rounded-sm"
          onClick={updateGlobalCart}
        />
      </div>
    </>
  );
};

export default CartTable;
