import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import FooterForm from "../form/footer";

const Footer = async () => {
  const t = await getTranslations("homePage");
  return (
    <footer className="bg-black text-white cursor-default">
      <div className="container mx-auto md:px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 ">
          {/* ===== Exclusive ===== */}
          <div className="flex flex-col  xs-sm:items-center">
            <h2 className="font-semibold text-lg mb-3 md:mb-6 w-full pl-6 xs-sm:pl-0 xs-sm:text-center">
              {t("title")}
            </h2>
            <div className="w-full pl-6 xs-sm:pl-[calc(50%-38px)] space-y-3">
              {" "}
              <p className="font-medium text-white">Subscribe</p>
              <p className="text-sm text-gray-400">
                Get 10% off your first order
              </p>
              <FooterForm />
            </div>
          </div>

          <div className="flex flex-wrap flex-col pl-6 xs-sm:pl-0 xs-sm:items-center">
            <h2 className="font-semibold text-lg mb-3 md:mb-6 w-full xs-sm:text-center">
              {t("Support")}
            </h2>
            <div className="w-full xs-sm:pl-[calc(50%-34px)] space-y-2 text-sm text-gray-400">
              <p>
                111 Kentucky, KY 1515,
                <br />
                USA.
              </p>
              <p className="mt-1 wrap-break-word">exclusive@gmail.com</p>
              <p className="mt-1">+88015-88888-9999</p>
            </div>
          </div>

          <div className="flex flex-col pl-6 xs-sm:pl-0 xs-sm:items-center">
            <h2 className="font-semibold text-lg mb-3 md:mb-6 w-full xs-sm:text-center">
              {t("Account")}
            </h2>
            <ul className="w-full xs-sm:pl-[calc(50%-34px)] space-y-2 text-sm text-gray-400">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          <div className="flex flex-col pl-6 xs-sm:pl-0 xs-sm:items-center">
            <h2 className="font-semibold text-lg mb-3 md:mb-6 w-full xs-sm:text-center">
              {t("Quick Link")}
            </h2>
            <ul className="w-full xs-sm:pl-[calc(50%-40px)] space-y-2 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col items-center pl-6  xs-sm:pl-12 lg:pl-14 xl:px-0">
            <h2 className="font-semibold text-lg mb-3 md:mb-6 w-full xs-sm:text-center">
              {t("Download App")}
            </h2>
            <div className="w-full xs-sm:pl-[calc(50%-58px)] space-y-4">
              <p className="text-xs text-gray-300">
                Save $3 with App New User Only
              </p>

              <div className="flex gap-3 items-start ">
                <Image
                  src="/qr.jpg"
                  alt="QR Code"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex min-w-[120px] h-auto flex-col gap-2">
                  <div className="relative w-[100px] h-8">
                    <Image
                      src="/google-play.jpg"
                      alt="google"
                      fill
                      className="object-contain"
                      sizes="110px"
                    />
                  </div>
                  <div className="relative w-[100px] h-8">
                    <Image
                      src="/app-store.jpg"
                      alt="app-store"
                      fill
                      className="object-contain"
                      sizes="110px"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-6 mt-4">
                <Facebook
                  className="w-5 h-5 text-white"
                  fill="white"
                />
                <Twitter className="w-5 h-5 text-white" />
                <Instagram className="w-5 h-5 text-white" />
                <Linkedin
                  className="w-5 h-5 text-white"
                  fill="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-3 md:py-6">
        <p className="text-center text-sm text-gray-400">
          © Copyright 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
