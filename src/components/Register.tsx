"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { useForm } from "react-hook-form";
import { registerSchema, registerType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import FormInput from "./FormInput";

import Link from "next/link";
import { Button } from "./ui/button";

type Props = {};

export default function Register({ }: Props) {
  const form = useForm<registerType>({
    resolver: zodResolver(registerSchema),
  });
  const OnSubmit = (data: registerType) => {
    console.log(data);
    alert("sucessfully registerd");
  };
  return (
    <div>
      <div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(OnSubmit)} className=" p-10 ">
              <h1 className="font-bold text-[27px] my-5">REGISTER ACCOUNT</h1>

              <FormInput
                form={form}
                name="name"
                label="UserName"
                type="text"
                placeholder="Enter your name"
              />
              <FormInput
                form={form}
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <FormInput
                form={form}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <FormInput
                form={form}
                name="confirm_password"
                label="ConfirmPasword"
                type="text"
                placeholder="Enter your ConfirmPassword"
              />
              <div className="mt-8">
                <Button
                  type="submit"
                  className="rounded-sm w-full bg-[white] text-black font-bold "
                >
                  SignUp
                </Button>
                <p className="text-center mt-4">
                  Already have an account?
                  <Link href={"/form"} className="text-black ">
                    Login
                  </Link>
                  here
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
