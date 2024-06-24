import { serviceType } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

type Props = { services: serviceType[] };

export default function Services({ services }: Props) {
  return (
    <div className="mt-24">
      <div className="lg:w-[90%] lg:m-auto px-4  xl:max-w-[1140px] xl:m-auto ">
        <div className="text-center mb-10">
          <h1 className="font-extrabold text-[32px] mb-6">SERVICE OFFERS</h1>
          <p className="text-white">
            Is give may shall likeness made yielding spirit a itself togeth
            created after sea is in beast
            <br /> beginning signs open god you&apos;re gathering ithe
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 shadow-xl">
          {services.map((service) => (
            <Card key={service.id} className="rounded-none ">
              <CardContent className="p-10">
                <div className="flex justify-center items-center mb-6">
                  <Image
                    src={service.image_url}
                    alt={""}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-center leading-6">
                  <h1 className="text-[20px] font-bold mb-4">
                    {service.heading}
                  </h1>
                  <p className="text-[grey]">{service.paragraph}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
