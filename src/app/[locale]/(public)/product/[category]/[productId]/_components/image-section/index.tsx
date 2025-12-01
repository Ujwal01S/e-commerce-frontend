"use client";

import Image from "next/image";
import { useState } from "react";

const ImageSection = ({ imageUrl }: { imageUrl: string }) => {
  const [selectedImage, setSelectedImage] = useState<string>(imageUrl);

  const thumbnailImages = [imageUrl, "/ps.jpg", "/new2.jpg", "/employe1.jpg"];

  const handleThumbnailClick = (imgUrl: string) => {
    setSelectedImage(imgUrl);
  };

  return (
    <figure className="flex flex-col md-lg:flex-row gap-5">
      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 md-lg:grid-cols-1 gap-4 order-2 md-lg:order-1 md-lg:basis-1/5">
        {thumbnailImages.map((imgUrl, index) => (
          <div
            key={index}
            className={`relative w-full bg-[#f5f5f5] p-2 flex items-center min-h-20 md:min-h-[100px] max-h-[120px] cursor-pointer `}
            onClick={() => handleThumbnailClick(imgUrl)}
          >
            <Image
              src={imgUrl}
              alt={`product thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 25vw, (max-width: 1024px) 100vw, 100vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="order-1 md-lg:order-2 md-lg:basis-4/5">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] bg-[#f5f5f5]">
          <Image
            src={selectedImage}
            alt="main product image"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 80vw"
            quality={100}
          />
        </div>
      </div>
    </figure>
  );
};

export default ImageSection;
