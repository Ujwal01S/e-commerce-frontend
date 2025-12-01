import CustomButton from "@/components/common/custom-button";
import SectionHeader from "@/components/common/section-header";
import Image from "next/image";
import BestSelling from "./_components/best-selling";
import CategorySectionCarousel from "./_components/cateogy-section/category-section";
import HeroSection from "./_components/hero-section";
import LandingPageSideBar from "./_components/side-bar";
import TodayCarousel from "./_components/today/today-carousel";
import OurProductSection from "./_components/our-products";
import NewArrival from "./_components/new-arrival";
import SupportCard from "@/components/common/support-card";
import { DeliverySVG, GuardSVG, SupportSGV } from "@/svgs/landing-page";
import ScrollToTopArrow from "./_components/scroll-to-top";
import { Metadata } from "next";
import {
  bestSellingProduct,
  ourProductData,
  todayProductData,
} from "./_mock/carousel";
import { getTranslations } from "next-intl/server";
import SeachSection from "./_components/search-section";

export const metadata: Metadata = {
  title: "Exclusion - Buy Now",
  description: "Find the best discount in this world on this website",
  // keywords to help google find
  keywords: ["gaming", "monitors", "furniture", "watches", "cart"],

  robots: {
    index: true,
    follow: true,
    // nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

const LandingPage = async () => {
  const t = await getTranslations("homePage");

  return (
    <div className="px-2">
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 lg:gap-12 mb-10 md:mb-24">
        {/* Sidebar section */}
        <aside className="order-2 md:order-1">
          <LandingPageSideBar />
        </aside>

        {/* Carousel section */}
        <section className="order-1 md:order-2 w-full pt-2 md:pt-8">
          <HeroSection />
        </section>
      </div>

      {/*show search result section */}

      <SeachSection />

      {/* today's sections */}
      <div className="grid gap-4 pb-5 md:pb-12">
        <div className="grid gap-10 ">
          <div className="grid gap-5 ">
            <SectionHeader header={t("Today's")} />

            <TodayCarousel data={todayProductData} />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <CustomButton
            label="View All Products"
            className="w-fit py-5"
          />
        </div>
      </div>

      {/* Categories */}

      <div className="grid gap-4 py-5 md:py-12 border-y">
        <div className="grid gap-10">
          <div className="grid gap-5 ">
            <SectionHeader header={t("Categories")} />

            <CategorySectionCarousel />
          </div>
        </div>
      </div>

      {/* Best-selling section */}
      <div className="grid gap-4 py-5 md:py-12 border-y">
        <div className="grid gap-10 overflow-hidden">
          <div className="grid gap-5 ">
            <SectionHeader header={t("This Month")} />
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl sm-md:text-3xl sm-md:pb-6 ">
                Best Selling Products
              </p>

              <CustomButton
                label="View All "
                className="py-5"
              />
            </div>
          </div>

          <BestSelling data={bestSellingProduct} />
        </div>
      </div>

      {/* <FullImage /> */}
      <div className="gap-4 py-5 md:py-12 relative">
        <div className="w-full h-auto relative aspect-video">
          <Image
            src={"/full-radio.jpg"}
            alt="radio"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Our Product */}

      <div className="grid gap-4 pb-5 md:pb-12">
        <div className="grid gap-10">
          <div className="grid gap-5 ">
            <SectionHeader header={t("Our Products")} />
            <OurProductSection data={ourProductData} />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <CustomButton
            label="View All Products"
            className="w-fit py-5"
          />
        </div>
      </div>

      {/* Featured */}

      <div className="grid gap-4 py-5 md:py-12">
        <div className="grid gap-10">
          <div className="grid gap-5 ">
            <SectionHeader header={t("Featured")} />

            <p className="font-semibold text-xl sm-md:text-3xl pb-6 ">
              New Arrival
            </p>
          </div>
        </div>

        <NewArrival />
      </div>

      {/* Info */}
      <section className="w-full flex py-5 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
          <SupportCard
            title="Free and Fast Delivery"
            description="Free delivery for all orders over $140"
            icon={<DeliverySVG />}
          />
          <SupportCard
            title="24/7 Customer Service"
            description="Friendly 24/7 customer support"
            icon={<SupportSGV />}
          />
          <SupportCard
            title="Money back guarantee"
            description="we return money within 30 days"
            icon={<GuardSVG />}
          />
        </div>
      </section>

      <div className="w-full flex justify-end pb-3">
        <ScrollToTopArrow />
      </div>
    </div>
  );
};

export default LandingPage;
