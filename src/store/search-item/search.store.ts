import { create } from "zustand";

interface ISearchState {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const useSearchStore = create<ISearchState>((set) => ({
  searchValue: "",

  setSearchValue: (value: string) =>
    set(() => ({
      searchValue: value,
    })),
}));
