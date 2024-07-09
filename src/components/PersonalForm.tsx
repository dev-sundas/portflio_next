"use client";
import { PersonalFormType, PersonalSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { postPersonalData } from "@/server/personalinfo";

type Props = {};

export default function PersonalForm({ }: Props) {
  const form = useForm<PersonalFormType>({
    resolver: zodResolver(PersonalSchema),
  });
  const OnSubmit = async (data: PersonalFormType) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("image", data.image);
    formdata.append("post", data.post);
    formdata.append("description", data.descripation);

    try {
      const res = await postPersonalData(formdata);
      console.log("Response from server:", res);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Card className="rounded-none min-h-screen h-full">
        <CardContent>
          <h1 className="font-bold text-center text-[27px] my-10">
            Personal Information Form
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(OnSubmit)}>
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
                name="post"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your post"
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
                name="descripation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter your introduction"
                        className="my-7"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button>Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
