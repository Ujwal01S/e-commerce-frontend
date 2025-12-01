"use client";
import { HTMLInputTypeAttribute } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

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
  type?: HTMLInputTypeAttribute;
  variant?: "default" | "formGroup" | "single";
  inputClassName?: string;
  label?: string;
  isRequired?: boolean;
}

const RHFInput = <T extends FieldValues>({
  name,
  placeholder,
  className,
  type = "text",
  variant,
  inputClassName,
  isRequired = true,
  label,
  ...props
}: Props<T>) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(inputFieldVariants({ variant, className }))}>
          {label && isRequired ? (
            <FormLabel className="text-text-secondary font-normal">
              {label} <span className="text-red-500">*</span>
            </FormLabel>
          ) : (
            <FormLabel className="font-normal">{label}</FormLabel>
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              {...props}
              type={type}
              className={cn("", inputClassName)}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFInput;
