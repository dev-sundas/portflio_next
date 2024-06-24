import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import { registerType } from "@/lib/types";

type Props = {
  label: string;
  placeholder: string;
  type: string;
  name: "name" | "email" | "password" | "confirm_password";
  form: UseFormReturn<registerType>;
};

export default function Forminput({
  label = "",
  name,
  form,
  placeholder,
  type,
}: Props) {
  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[17px] font-bold">{label}</FormLabel>
            <FormControl>
              <Input
                className="rounded-none  h-[40px]"
                {...field}
                placeholder={placeholder}
                type={type}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
