import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative">
      {/* Large left section - Women's Collections */}
      <div className="w-full relative group cursor-pointer">
        <Image
          alt="Women's Collections"
          src={"/new1.jpg"}
          width={600}
          height={800}
          className="w-full h-auto md:object-cover object-fill rounded-lg"
          loading="eager"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2">Women&apos;s Collections</h3>
          <p className="text-sm mb-3 max-w-xs">
            Featured woman collections that
            <br />
            give you another vibe.
          </p>
          <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div> */}
      </div>

      {/* Right section with 3 smaller items */}
      <div className="grid grid-rows-2 gap-7">
        <div className="w-full relative group cursor-pointer">
          <Image
            alt="PlayStation 5"
            src={"/new2.jpg"}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Bottom row with 2 items */}
        <div className="grid grid-cols-2 gap-7">
          <div className="w-full relative group cursor-pointer">
            <Image
              alt="Speakers"
              src={"/new3.jpg"}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full relative group cursor-pointer">
            <Image
              alt="Perfume"
              src={"/new4.jpg"}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
