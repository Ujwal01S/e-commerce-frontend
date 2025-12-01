import CarouselWrapper from "@/components/common/carousel-wrapper";
import { landingCarouselData } from "../_mock/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const HeroSection = () => {
  return (
    <CarouselWrapper
      defaultSwipe={false}
      itemLength={landingCarouselData.length}
      className="overflow-hidden"
    >
      {landingCarouselData.map((item, index) => (
        <CarouselItem key={index}>
          <div className="w-full min-h-50 sm:h-66 sm-md:h-64 md:h-78 lg:h-80 relative">
            <Image
              alt="item"
              src={item}
              fill
              className="object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              loading="eager"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselWrapper>
  );
};

export default HeroSection;
