import CarouselWrapper from "@/components/common/carousel-wrapper";
import { CarouselItem } from "@/components/ui/carousel";
import { categoryCarouselData } from "@/constants/landing-page";

const CategorySectionCarousel = () => {
  return (
    <CarouselWrapper
      itemLength={categoryCarouselData.length}
      autoPlay
      className="w-full max-w-full py-4 overflow-hidden"
      carouselTitle="Browse By Category"
      contentClassName="pl-4"
    >
      {categoryCarouselData.map((item) => (
        <CarouselItem
          key={item.title}
          className="basis-1/2 xs-sm:basis-1/3 md:basis-1/4 md-lg:basis-1/5 lg:basis-1/6 sm-md:px-10 md:px-0"
        >
          <div className="h-[145px] flex flex-col items-center justify-center gap-4 max-w-[170px] border hover:text-white hover:bg-button-background rounded-sm">
            {item.icon}

            <p>{item.title}</p>
          </div>
        </CarouselItem>
      ))}
    </CarouselWrapper>
  );
};

export default CategorySectionCarousel;
