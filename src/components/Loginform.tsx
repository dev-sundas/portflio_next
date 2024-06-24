"use client";
import { loginSchema, loginType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Menu, X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import Register from "./Register";
import Link from "next/link";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

type Props = {};

export default function loginform({ }: Props) {
  const [open, setopen] = useState(false);
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });
  const OnSubmit = (data: loginType) => {
    console.log(data);
    alert("login successfully");
  };
  return (
    <div className="w-[90%] m-auto py-20">
      <div className="relative grid grid-cols-2 overflow-hidden">
        <Card className="rounded-sm">
          <CardContent className="mt-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(OnSubmit)}
                className="flex flex-col gap-2 lg:gap-6 p-10"
              >
                <h1 className="font-bold text-[27px]"> LOGIN ACCOUNT</h1>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[17px] font-bold ">
                        UserName
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-none w-[100%] h-[40px] "
                          {...field}
                          placeholder="Enter your name"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[17px] font-bold">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-none  w-[100%] h-[40px]"
                          {...field}
                          placeholder="Enter your password"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-6 items-center">
                  <label className=" mr-10 flex flex-row">
                    <Checkbox className=" mt-1 mr-1" />
                    Remember Me
                  </label>
                  <Link href={"/Forgot_page"} className=" text-[#854fee] ">
                    Forgot Password?
                  </Link>
                </div>
                <div className="mb-4 mt-7">
                  <Button
                    type="submit"
                    className="rounded-sm mt-2 bg-[grey] w-full font-bold "
                  >
                    Login
                  </Button>
                  <p className="mt-7 text-center">
                    Don&apos;t have an account?
                    <Link href={"/form"} className="text-[#854fee]">
                      Signup
                    </Link>
                    here
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="mt-2">
          <div
            className={`${open
              ? "absolute left-[55px] right-0"
              : "absolute left-[560px] right-0"
              } text-white bg-[grey] w-[45%]`}
          >
            <div className="bg-[grey]">
              {open ? (
                <Button
                  onClick={() => setopen(false)}
                  variant={"ghost"}
                  className="hover:bg-transparent bg-transparent text-white "
                >
                  <X size={30} />
                </Button>
              ) : (
                <Button
                  onClick={() => setopen(true)}
                  variant={"ghost"}
                  className="hover:bg-transparent bg-transparent "
                >
                  <Menu size={30} />
                </Button>
              )}

              <Register />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
