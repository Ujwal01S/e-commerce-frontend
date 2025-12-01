import { RatingStar } from "@/components/common/product-card";
import { Separator } from "@/components/ui/separator";
import { IProductProps } from "@/constants/product.constant";
import FastCarSVG from "@/svgs/fastcar-svg";
import { RefreshCw } from "lucide-react";
import ProductDetailOptions from "../detail-options";
import ImageSection from "../image-section";

const ProductDetailSection = async ({ data }: { data: IProductProps }) => {
  return (
    <div className="grid grid-cols-1 sm-md:grid-cols-[55%_1fr] gap-6 sm-md:gap-8 lg:gap-28">
      {/* Image section */}

      <ImageSection imageUrl={data?.imageUrl} />

      <div className="grid gap-4  w-full sm-md:max-w-[399px]">
        <h4 className="text-2xl font-semibold">{data?.title}</h4>

        {/* review  */}
        <div className="flex gap-3 items-center">
          <RatingStar rating={data?.rating} />
          <p className="text-xs text-text-secondary">
            {`(${data?.noOfRating} Reviews)`} | <span>In Stock</span>{" "}
          </p>
        </div>

        <p className="text-2xl">${data?.discountedPrice || data?.price}</p>

        <p className="text-sm">{data?.description}</p>

        <Separator className="border-1.5" />

        <ProductDetailOptions productId={data?.id} />

        {/* Service section */}

        <div className="w-full border rounded-sm">
          <div className="flex items-center gap-4 p-2 border-b">
            <FastCarSVG />
            <div className="grid gap-2">
              <p className="font-medium">Free Delivery</p>
              <p className="underline text-xs font-medium cursor-pointer">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <RefreshCw size={34} />
            <div className="grid gap-2">
              <p className="font-medium">Return Delivery</p>
              <p className="text-xs font-medium">
                Free 30 Days Delivery Returns.
                <span className="underline cursor-pointer">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
