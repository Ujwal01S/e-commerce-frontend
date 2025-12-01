import { cn } from "@/lib/utils";

interface Props {
  header: string;
  className?: string;
}

const SectionHeader = ({ header, className }: Props) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-5 h-10 bg-button-background rounded-xs" />

      <p className={cn("font-semibold text-button-background", className)}>
        {header}
      </p>
    </div>
  );
};

export default SectionHeader;
