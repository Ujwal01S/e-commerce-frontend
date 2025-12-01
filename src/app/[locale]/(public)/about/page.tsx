import { BreadcrumbWithCustomSeparator } from "@/components/common/bread-crumb";
import Image from "next/image";
import ServiceSection from "./_components/service-section";
import EmployeeSection from "./_components/employe-section";
import SupportCard from "@/components/common/support-card";
import { DeliverySVG, GuardSVG, SupportSGV } from "@/svgs/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusion - About us",
  description: "Everything you need to know about us",
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

const AboutPage = () => {
  return (
    <div className="py-6 md:py-20 px-4 md:px-2 grid gap-10">
      <BreadcrumbWithCustomSeparator />

      <div className="grid sm:grid-cols-2 gap-10 sm-md:py-6">
        <div className="flex flex-col gap-6 justify-center text-wrap wrap-break-word">
          <h3 className="text-4xl font-semibold text-start">Our Story</h3>

          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>

          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="relative h-80 md-lg:h-130">
          <Image
            fill
            src={"/about.jpg"}
            alt="about"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="h-auto w-auto object-fill"
          />
        </div>
      </div>

      <ServiceSection />

      <EmployeeSection />

      <div className="w-full flex py-5 md:py-12">
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
      </div>
    </div>
  );
};

export default AboutPage;
