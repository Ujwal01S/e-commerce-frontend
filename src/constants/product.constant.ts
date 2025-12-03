export interface IProductProps {
  imageUrl: string;
  discountedPrice?: number;
  title: string;
  new?: boolean;
  rating: number;
  noOfRating: number;
  price: number;
  discountPercent?: string;
  id: string;
  category: string;
  description: string;
  stock: string;
}

interface INotificationMessageProps {
  alreadyExists: string;
  success: string;
  wishlistInCart: string;
  emptyWishList: string;
  loginRequired: string;
}

export const notificationMessage: INotificationMessageProps = {
  alreadyExists: "Product has already been added.",

  success: "Product has successfully been added",
  wishlistInCart: "Product is already in cart",
  emptyWishList: "Wish list is empty",
  loginRequired: "Login first to perform the action.",
};

export const productSizes = ["xs", "s", "m", "l", "ml"];
