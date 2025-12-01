import ServiceIcon from "@/components/common/service-icon";
import SupportCard from "@/components/common/support-card";
import { BagSVG, CashBagSVG, CashSVG, HouseSVG } from "@/svgs/about";

const ServiceSection = () => {
  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
      <SupportCard
        description="Sallers active our site"
        icon={<ServiceIcon icon={<HouseSVG />} />}
        title="10.5k"
        className="border-2 hover:border-button-background hover:bg-button-background group hover:text-white py-5 rounded-sm hover:shadow"
      />

      <SupportCard
        description="Monthly Product Sale"
        icon={<ServiceIcon icon={<CashSVG />} />}
        title="33k"
        className="border-2 hover:border-button-background hover:bg-button-background group hover:text-white py-5 rounded-sm hover:shadow"
      />

      <SupportCard
        description="Customer active in our site"
        icon={<ServiceIcon icon={<BagSVG />} />}
        title="45.5k"
        className="border-2 hover:bg-button-background hover:border-button-background group hover:text-white py-5 rounded-sm hover:shadow"
      />

      <SupportCard
        description="Anual gross sale in our site"
        icon={<ServiceIcon icon={<CashBagSVG />} />}
        title="25k"
        className="border-2 hover:bg-button-background hover:border-button-background group hover:text-white py-5 rounded-sm hover:shadow"
      />
    </div>
  );
};

export default ServiceSection;
