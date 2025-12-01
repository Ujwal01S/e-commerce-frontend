import { cn } from "@/lib/utils";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SupportCard = ({ icon, description, title, className }: Props) => {
  return (
    <div className={cn(" flex flex-col items-center gap-6 w-full", className)}>
      {icon}

      <div className="grid gap-2">
        <p className="uppercase font-semibold text-xl text-center">{title}</p>

        <p className="text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

export default SupportCard;
