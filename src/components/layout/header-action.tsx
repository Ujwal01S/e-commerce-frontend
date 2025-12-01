"use client";
import { userDropdown } from "@/constants/header/header.constant";
import { Link, usePathname } from "@/i18n/routing";
import { useCartStore } from "@/store/cart/cart-store";
import { useSearchStore } from "@/store/search-item/search.store";
import { useWishListStore } from "@/store/wishlist/wishlist-store";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { redirect } from "next/navigation";
import { useMemo } from "react";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { signOut, useSession } from "next-auth/react";
import { successNotification } from "@/utills/toast-notification";

const HeaderAction = () => {
  const pathname = usePathname();

  const session = useSession();

  const showHeaderAction = useMemo(() => {
    const pathsToHide = ["login", "sign-up"];
    return !pathsToHide.some((path) => pathname.includes(path));
  }, [pathname]);

  const { wishLists, clearWishList } = useWishListStore();
  const { cartItems, clearCart } = useCartStore();
  const { searchValue, setSearchValue } = useSearchStore();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const navigationHandler = (link: string) => {
    // if link is logout use log user out and return the function
    if (link === "logout") {
      signOut();
      // clear cart and wishlist after logout
      clearCart();
      clearWishList();

      successNotification({
        header: "Auth",
        description: "Successfully Logged Out",
      });

      return;
    }
    if (link) {
      redirect(`/${link}`);
    } else {
      return;
    }
  };

  return (
    <div className="flex gap-4 md:gap-6 items-center w-full justify-center lg:justify-end">
      <div className="relative">
        <Input
          className="bg-[#f5f5f5] shadow-none w-100% focus-visible:border-0 h-[38px] pr-10 placeholder:text-xs"
          placeholder="What are you looking for?"
          value={searchValue}
          onChange={(e) => searchHandler(e)}
        />
        <Search className="absolute top-[20%] right-2" />
      </div>

      {showHeaderAction && (
        <>
          <Link
            href={"/wishlist"}
            className="relative"
          >
            {wishLists.length !== 0 && session.data?.user && (
              <Badge className="h-4 w-4 -right-2 rounded-full flex items-center justify-center bg-button-background absolute">
                <p>{wishLists.length}</p>
              </Badge>
            )}
            <Heart />
          </Link>

          <Link
            href={"/cart"}
            className="relative"
          >
            {cartItems.length !== 0 && session.data?.user && (
              <Badge className="h-4 w-4 -right-2 rounded-full flex items-center justify-center bg-button-background absolute">
                <p>{cartItems.length}</p>
              </Badge>
            )}
            <ShoppingCart />
          </Link>

          {session.data?.user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <User
                  className={`rounded-full data-[state=open]:bg-button-background bg-gray-400 w-7 h-7 p-1 text-white`}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[225px] bg-linear-to-br from-[#a88ab0] via-[#805884] to-[#6c466f] text-white">
                {userDropdown.map((item) => (
                  <DropdownMenuItem
                    key={item.title}
                    onClick={() => navigationHandler(item.link ?? "")}
                    className="flex items-center focus:bg-white/20 focus:text-white gap-3 w-full cursor-pointer hover:text-white"
                  >
                    <button className="flex items-center gap-3 w-full ">
                      {item.icon}
                      <p>{item.title}</p>
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </>
      )}
    </div>
  );
};

export default HeaderAction;
