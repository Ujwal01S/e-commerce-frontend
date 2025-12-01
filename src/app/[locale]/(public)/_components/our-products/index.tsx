import CarouselWrapper from "@/components/common/carousel-wrapper";
import ProductCard from "@/components/common/product-card";
import { CarouselItem } from "@/components/ui/carousel";
import { IProductProps } from "@/constants/product.constant";

const OurProductSection = ({ data }: { data: IProductProps[] }) => {
  return (
    <CarouselWrapper
      itemLength={data.length}
      autoPlay={false}
      className="w-full max-w-full py-4 overflow-hidden"
      carouselTitle="Explore Our Products"
      contentClassName="flex lg:flex-wrap"
    >
      {data.map((item) => (
        <CarouselItem
          key={item.id}
          className="basis-full xs:basis-1/2 xs-sm:basis-1/2 sm:basis-1/3  md:basis-1/3 lg:basis-1/4 px-2 sm:px-3 md:px-2"
        >
          <figure className="px-4 py-4">
            <ProductCard
              imageUrl={item.imageUrl}
              noOfRating={item.noOfRating}
              rating={item.rating}
              title={item.title}
              discountedPrice={item.discountedPrice}
              new={item.new}
              price={item.price}
              discountPercent={item.discountPercent}
              id={item.id}
              category={item.category}
              description={item.description}
              stock={item.stock}
            />
          </figure>
        </CarouselItem>
      ))}
    </CarouselWrapper>
  );
};

export default OurProductSection;
