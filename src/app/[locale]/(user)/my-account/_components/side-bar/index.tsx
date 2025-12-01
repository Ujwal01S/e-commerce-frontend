import { accountSidebarNavigationItems } from "@/constants/sidebar";

const AccountSideBar = () => {
  return (
    <aside className="flex w-full justify-between sm:block">
      {accountSidebarNavigationItems.map((item) => (
        <div key={item.title}>
          <h3 className="font-semibold cursor-default">{item.title}</h3>

          <div className="sm:pl-4 md-lg:pl-8 space-y-2 py-4 text-text-secondary">
            {item.subContent &&
              item.subContent.map((subItem) => (
                <p
                  className={`cursor-pointer ${subItem === "My Profile" ? "text-button-background " : undefined}`}
                  key={subItem}
                >
                  {subItem}
                </p>
              ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default AccountSideBar;
