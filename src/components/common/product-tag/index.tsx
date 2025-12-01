import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const productTagVariants = cva(
  ["px-3", "py-1", "top-1 left-1", "rounded-sm", "text-white text-xs"],
  {
    variants: {
      variant: {
        new: "bg-tag-new",

        default: "bg-button-background",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

interface Props {
  label: string;
  variant?: "new" | "default";
  className?: string;
}

const ProductTag = ({ label, variant = "default", className }: Props) => {
  return (
    <div className={cn(productTagVariants({ variant, className }))}>
      {label}
    </div>
  );
};

export default ProductTag;
