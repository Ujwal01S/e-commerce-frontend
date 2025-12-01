import CustomButton from "@/components/common/custom-button";
import ProductCard from "@/components/common/product-card";
import SectionHeader from "@/components/common/section-header";
import { IProductProps } from "@/constants/product.constant";

const RecommendationSection = async ({ data }: { data: IProductProps[] }) => {
  return (
    <div className="grid gap-14">
      <div className="flex justify-between">
        <SectionHeader header="Just For You" />

        <CustomButton
          className="py-5 font-medium"
          label="See All"
          variant="ghostly"
        />
      </div>

      <div className="grid xs:grid-cols-2 px-4 sm-md:px-0 sm:grid-cols-3 gap-3 sm:gap-3 lg:grid-cols-4 md-lg:gap-[30px] auto-rows-fr">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
            type="recommendation"
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationSection;
