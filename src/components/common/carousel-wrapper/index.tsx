"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import CountdownTimer from "../countdown-timmer";

interface Props {
  children: React.ReactNode;
  defaultSwipe?: boolean;
  itemLength: number;
  autoPlay?: boolean;
  className?: string;
  carouselTitle?: string;
  contentClassName?: string;
  showTimer?: boolean;
}

const CarouselWrapper = ({
  children,
  defaultSwipe = true,
  itemLength,
  autoPlay = true,
  className,
  carouselTitle,
  contentClassName,
  showTimer = false,
}: Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateIndex = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateIndex(); // Initial
    carouselApi.on("select", updateIndex);

    return () => {
      carouselApi.off("select", updateIndex);
    };
  }, [carouselApi]);

  return (
    <Carousel
      setApi={setCarouselApi}
      className={cn("w-full max-w-full ", className)}
      opts={{ loop: true, align: "start", containScroll: "trimSnaps" }}
      autoPlay={autoPlay}
    >
      {carouselTitle && (
        <div className=" flex gap-10 flex-col sm:flex-row sm:gap-40 items-start sm:items-center">
          <p
            className={`font-semibold  text-xl sm-md:text-3xl ${showTimer ? "pb-0" : "pb-6"}  `}
          >
            {carouselTitle}
          </p>

          {showTimer && <CountdownTimer />}
        </div>
      )}
      {defaultSwipe ? (
        <div className=" flex gap-2 absolute right-6 top-9 md:top-10">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      ) : (
        <div className="flex gap-1 absolute right-[50%] translate-x-[50%] bottom-2 z-20">
          {Array.from({ length: itemLength }).map((_, index) => (
            <div
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-300",
                index === currentIndex
                  ? "bg-orange-500 border-2 border-white"
                  : "bg-[#7f7f7f]",
              )}
            />
          ))}
        </div>
      )}
      <CarouselContent className={cn("", contentClassName)}>
        {children}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselWrapper;
