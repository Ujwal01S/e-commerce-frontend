import LocaleSwitchSelector from "../global/locale-switcher";

const TopHeader = () => {
  return (
    <div className="bg-black w-full flex justify-center">
      <div className="container w-full  text-white py-3 flex items-center justify-between">
        <div className="w-[20%] hidden lg:flex"></div>
        <div className="text-sm  flex items-center justify-between">
          <p className="text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="font-semibold underline"> Show Now</span>
          </p>
        </div>

        <LocaleSwitchSelector />
      </div>
    </div>
  );
};

export default TopHeader;
