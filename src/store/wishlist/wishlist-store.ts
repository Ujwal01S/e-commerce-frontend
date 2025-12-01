import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IWishListStorePops {
  wishLists: string[];
  addToWishList: (id: string) => void;
  removeFromWishList: (id: string) => void;
  clearWishList: () => void;
}

// persisted wishlist in localstore

export const useWishListStore = create<IWishListStorePops>()(
  persist(
    (set) => ({
      wishLists: [],

      // store array of id
      addToWishList: (id) =>
        set((state) => {
          const alreadyExistingId = state.wishLists.find(
            (existingId) => existingId === id,
          );
          if (alreadyExistingId) {
            return { wishLists: state.wishLists };
          }
          return { wishLists: [...state.wishLists, id] };
        }),

      // remove id from the wishlist
      removeFromWishList: (id) =>
        set((state) => ({
          wishLists: state.wishLists.filter((item) => item !== id),
        })),

      // clear all wishlist to empty array
      clearWishList: () => set({ wishLists: [] }),
    }),
    {
      name: "wishlist-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
