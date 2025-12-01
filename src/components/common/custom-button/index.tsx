import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva([" cursor-pointer px-10 py-4"], {
  variants: {
    variant: {
      default:
        "bg-button-background hover:bg-button-background/80 rounded-xs font-normal text-white",

      ghostly:
        "bg-white hover:bg-white rounded-xs font-normal text-black border border-text-secondary",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

interface Props {
  className?: string;
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "ghostly";
}

const CustomButton = ({
  label,
  className,
  onClick,
  icon,
  variant = "default",
}: Props) => {
  return (
    <Button
      className={cn(buttonVariants({ variant, className }))}
      onClick={onClick}
    >
      {icon}
      {label}
    </Button>
  );
};

export default CustomButton;
