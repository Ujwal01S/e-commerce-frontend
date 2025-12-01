import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IProductProps } from "@/constants/product.constant";
import { allProductItems } from "@/app/[locale]/(public)/_mock/carousel";

export interface ICartItem extends IProductProps {
  quantity: number;
  subtotal: number;
}

interface ICartStore {
  cartItems: ICartItem[];
  addToCart: (product: IProductProps) => void;
  updateQuantities: (updates: { id: string; quantity: number }[]) => void;
  completelyRemoveItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const calculateSubtotal = (price: number, discounted?: number, qty?: number) =>
  (discounted ?? price) * (qty ?? 1);

// persisted cart in localstorage

export const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.cartItems.find((i) => i.id === product.id);
          if (existing) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === product.id
                  ? {
                      ...i,
                      quantity: i.quantity + 1,
                      subtotal: calculateSubtotal(
                        i.price,
                        i.discountedPrice,
                        i.quantity + 1,
                      ),
                    }
                  : i,
              ),
            };
          }
          return {
            cartItems: [
              ...state.cartItems,
              {
                ...product,
                quantity: 1,
                subtotal: calculateSubtotal(
                  product.price,
                  product.discountedPrice,
                  1,
                ),
              },
            ],
          };
        }),

      updateQuantities: (updates) =>
        set((state) => {
          const map = new Map(updates.map((u) => [u.id, u.quantity]));
          const newItems = state.cartItems
            .map((item) => {
              const q = map.get(item.id);
              if (q === undefined) return item;
              if (q < 1) return null;
              return {
                ...item,
                quantity: q,
                subtotal: calculateSubtotal(
                  item.price,
                  item.discountedPrice,
                  q,
                ),
              };
            })
            .filter(Boolean) as ICartItem[];
          return { cartItems: newItems };
        }),

      completelyRemoveItem: (id) =>
        set((s) => ({ cartItems: s.cartItems.filter((i) => i.id !== id) })),

      clearCart: () => set({ cartItems: [] }),

      getTotalPrice: () =>
        get().cartItems.reduce((sum, i) => sum + i.subtotal, 0),

      getTotalItems: () =>
        get().cartItems.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      merge: (persistedState: any, currentState) => {
        if (!persistedState) return currentState;

        // If persisted already in new format (has cartItems), keep it
        if (
          persistedState.cartItems &&
          Array.isArray(persistedState.cartItems)
        ) {
          return { ...currentState, ...persistedState };
        }

        // Older format: { state: { ids: [...], quantities: {...} } }
        const legacy = persistedState.state;
        if (legacy && Array.isArray(legacy.ids)) {
          const ids: string[] = legacy.ids;
          const quantities: Record<string, number> = legacy.quantities || {};

          const hydrated = ids
            .map((id) => {
              const product = allProductItems.find((p) => p.id === id);
              if (!product) return null;
              const q = quantities[id] ?? 1;
              return {
                ...product,
                quantity: q,
                subtotal: calculateSubtotal(
                  product.price,
                  product.discountedPrice,
                  q,
                ),
              } as ICartItem;
            })
            .filter(Boolean) as ICartItem[];

          return { ...currentState, cartItems: hydrated };
        }

        // fallback: return current
        return currentState;
      },
    },
  ),
);
