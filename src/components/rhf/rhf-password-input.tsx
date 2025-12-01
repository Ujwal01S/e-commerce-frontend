"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

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
  isRequired?: boolean;
  placeholder: string;
  label?: string;
  variant?: "default" | "formGroup" | "single";
  inputClassName?: string;
}

const RHFPasswordInput = <T extends FieldValues>({
  name,
  placeholder,
  className,
  isRequired = true,
  label,
  variant,
  inputClassName,
}: Props<T>) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={cn(inputFieldVariants({ variant, className }))}>
          {label && isRequired ? (
            <FormLabel>
              {label} <span className="text-red-500">*</span>
            </FormLabel>
          ) : (
            <FormLabel className="font-normal">{label}</FormLabel>
          )}
          <FormControl>
            <div className="relative">
              <Input
                placeholder={placeholder}
                {...field}
                type={showPassword ? "text" : "password"}
                className={cn(inputClassName)}
                aria-invalid={fieldState.error ? "true" : "false"}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff
                    size={16}
                    className="text-muted-foreground"
                  />
                ) : (
                  <Eye
                    size={16}
                    className="text-muted-foreground"
                  />
                )}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFPasswordInput;
