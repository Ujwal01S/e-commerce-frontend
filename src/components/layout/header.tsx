import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import NavLink from "../common/nav-link";
import HeaderAction from "./header-action";

const Header = async () => {
  const t = await getTranslations("homePage");

  return (
    <header className="border-b px-2">
      <div className="container pt-6 pb-3 grid grid-cols-1 sm:grid-cols-[1fr_auto] lg:grid-cols-3 items-center justify-between mx-auto space-y-2 sm:space-y-0 gap-2">
        <Link
          href={"/"}
          className="font-bold text-center sm:text-start text-2xl order-1 sm:order-1 font-monogo"
        >
          {t("title")}
        </Link>

        <nav className="flex mt-3 sm:mt-0 justify-center gap-12 order-3 sm:order-2 lg:order-2 w-full">
          <NavLink href="/">{t("home")}</NavLink>
          <NavLink href="/contact">{t("Contact")}</NavLink>
          <NavLink href="/about">{t("About")}</NavLink>
          <NavLink href="/sign-up">{t("Sign Up")}</NavLink>
        </nav>

        <div className="flex justify-center md:justify-end order-2 sm:order-3 lg:order-3 sm:col-span-2 lg:col-span-1">
          <HeaderAction />
        </div>
      </div>
    </header>
  );
};

export default Header;
