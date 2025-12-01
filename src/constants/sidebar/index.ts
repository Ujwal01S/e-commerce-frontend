interface Props {
  title: string;
  subTitle?: string[] | undefined;
}

export const sidebarNavigationItems: Props[] = [
  { title: "Woman's Fashion", subTitle: ["Adult", "Teenage", "Children"] },
  { title: "Men's Fashion", subTitle: ["Adult", "Teenage", "Children"] },
  { title: "Electronics" },
  { title: "Home & Lifestyle" },
  { title: "Medicine" },
  { title: "Sports & Outdoor" },
  { title: "Baby's & Toy" },
  { title: "Groceries & Pet" },
  { title: "Health & Beauty" },
];

interface IAccountSidebarProps {
  title: string;
  subContent?: string[];
}

export const accountSidebarNavigationItems: IAccountSidebarProps[] = [
  {
    title: "Manange My Account",
    subContent: ["My Profile", "Address Book", "My Payment Options"],
  },

  { title: "My Orders", subContent: ["My Return", "My Cancellations"] },

  { title: "My WishList" },
];
