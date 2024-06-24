"use client";
import { ContactFormType, ContactSchema } from "@/lib/types";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import Contactinput from "./Contactinput";
import { Home, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Contactitems from "./Contactitems";

type Props = {};

export default function Contact({}: Props) {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactSchema),
  });
  const OnSubmit = (data: ContactFormType) => {
    console.log(data);
    alert("message send succesfully");
  };
  return (
    <div className="lg:w-[70%] lg:m-auto grid md:grid-cols-2 p-6 gap-6  xl:max-w-[1140px] xl:m-auto ">
      <div>
        <Contactitems
          icon={<Home />}
          heading="California, United States"
          paragraph="Santa monica bullevard"
        />
        <Contactitems
          icon={<Phone />}
          heading="00 (440) 9865 562"
          paragraph="on to Fri 9am to 6 pm"
        />
        <Contactitems
          icon={<Mail />}
          heading="support@colorlib.com"
          paragraph="Send us your query anytime!"
        />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(OnSubmit)} className="grid gap-4">
          <Contactinput
            form={form}
            name="name"
            placeholder="Enter your name"
            type="text"
          />

          <Contactinput
            form={form}
            name="email"
            placeholder="Enter your email address"
            type="email"
          />

          <Contactinput
            form={form}
            name="subject"
            placeholder="Enter your subject"
            type="text"
          />

          <Contactinput
            form={form}
            name="message"
            placeholder="Enter your message"
            istextarea={true}
            type="text"
          />
          <Button
            type="submit"
            className="rounded-sm h-12 border-[2px] border-[#854fee] bg-[#854fee] text-white font-bold hover:bg-white hover:text-black"
          >
            SEND MESSAGE
          </Button>
        </form>
      </Form>
    </div>
  );
}
