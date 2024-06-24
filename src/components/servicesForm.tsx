"use client";
import { ServiceFormType, ServiceSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

type Props = {};

export default function servicesForm({}: Props) {
  const form = useForm<ServiceFormType>({
    resolver: zodResolver(ServiceSchema),
  });
  const OnSubmit = (data: ServiceFormType) => {
    console.log(data);
  };
  return (
    <div>
      <Card className="rounded-none min-h-screen h-full">
        <CardContent>
          <h1 className="font-bold text-center text-[27px] my-10">
            Services Information Form
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(OnSubmit)}>
              <FormField
                control={form.control}
                name="logo"
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
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter  title"
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
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter descripation"
                        className="my-7"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
