"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

const inputFieldVariants = cva("form-group", {
  variants: {
    variant: {
      default: "w-full",
      formGroup: "lg:w-[calc(50%-10px)] w-full",
      single: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props<T extends FieldValues> {
  name: Path<T>;
  className?: string;
  placeholder: string;
  variant?: "default" | "formGroup" | "single";
  inputClassName?: string;
}

const RHFTextArea = <T extends FieldValues>({
  name,
  placeholder,
  className,
  variant,
  inputClassName,
  ...props
}: Props<T>) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(inputFieldVariants({ variant, className }))}>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              {...props}
              //   type={type}
              className={cn("", inputClassName)}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFTextArea;
