import { CircleX, LogOut, ShoppingBag, Star, User } from "lucide-react";

interface Props {
  icon: React.ReactNode;
  title: string;
  link?: string;
}

export const userDropdown: Props[] = [
  {
    icon: <User className="w-8 h-8 text-white " />,
    title: "Manage My Account",
    link: "my-account",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    title: "My Order",
  },
  {
    icon: <CircleX className="w-8 h-8 text-white" />,
    title: "My Cancellations",
  },
  {
    icon: <Star className="w-8 h-8 text-white " />,
    title: "My Reviews",
  },
  {
    icon: <LogOut className="w-8 h-8 rotate-180 text-white" />,
    title: "Logout",
    link: "logout",
  },
];
