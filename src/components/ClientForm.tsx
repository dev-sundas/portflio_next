"use client";
import { ClientFormSchema, ClientFormType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

type Props = {};

export default function ClientForm({}: Props) {
  const form = useForm<ClientFormType>({
    resolver: zodResolver(ClientFormSchema),
  });
  const OnSubmit = (data: ClientFormType) => {
    console.log(data);
  };
  return (
    <Card className="rounded-none min-h-screen h-full">
      <CardContent>
        <h1 className="font-bold text-center text-[27px] my-10">
          Client Information Form
        </h1>
        <Form {...form}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your name"
                    type="text"
                    className="my-7"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="file" className="my-7" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Review"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your review"
                    className="my-7"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      </CardContent>
    </Card>
  );
}
