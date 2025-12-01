import { IEmployeProps } from "@/app/[locale]/(public)/about/_mock/employe-data";
import { Instagram, LucideLinkedin, Twitter } from "lucide-react";
import Image from "next/image";

const EmployeCard = ({ imageUrl, name, role }: IEmployeProps) => {
  return (
    <div className="grid gap-4 place-items-center xs-sm:place-items-start">
      <div className="relative min-h-76 lg:h-90 w-full max-w-[327px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover w-auto h-auto"
          sizes="(max-width: 768px) 100vw, 110px"
        />
      </div>
      <div className="place-items-start ">
        <h4 className="font-medium text-3xl  ">{name}</h4>
        <p className="text-xs">{role}</p>
      </div>

      <div className="flex gap-4">
        <Twitter size={18} />
        <Instagram size={18} />

        <LucideLinkedin size={18} />
      </div>
    </div>
  );
};

export default EmployeCard;
