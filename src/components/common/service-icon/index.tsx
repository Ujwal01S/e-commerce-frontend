interface IServiceProps {
  icon: React.ReactNode;
}

const ServiceIcon = ({ icon }: IServiceProps) => {
  return (
    <div className=" h-18 w-18 rounded-full flex items-center justify-center  bg-black/20 group-hover:bg-[#e67c7c]">
      <div className="bg-black text-white group-hover:bg-white rounded-full w-14 h-14 flex items-center justify-center group-hover:text-black">
        {icon}
      </div>
    </div>
  );
};

export default ServiceIcon;
