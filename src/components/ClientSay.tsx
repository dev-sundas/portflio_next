"use client";
import { clientType } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Props = { clients: clientType[] };

export default function ClientSay({ clients }: Props) {
  return (
    <div className="mt-24 ">
      <div className="lg:w-[90%]  lg:m-auto  xl:max-w-[1140px] xl:m-auto">
        <div className="text-center px-4">
          <h1 className="text-[32px] font-extrabold mb-6">
            CLIENT SAY ABOUT ME
          </h1>
          <p className="text-white mb-6">
            Is give may shall likeness made yielding spirit a itself togeth
            created after sea is in beast
            <br /> beginning signs open god you're gathering ithe
          </p>
        </div>
        <div>
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem className=" basis:[100%] lg:basis-1/2 md:p-12 md:basis-[85%]">
                  <Card
                    key={client.id}
                    className="rounded-none p-4  shadow-white/60 bg-transparent border-none shadow-lg lg:w-[90%]"
                  >
                    <CardContent className="flex flex-col md:flex-row gap-6 ">
                      <Image
                        src={client.image_url}
                        alt={""}
                        width={150}
                        height={150}
                        className="rounded-sm"
                      />

                      <div className="grid">
                        <h1 className="text-[20px] font-bold">
                          {client.heading}
                        </h1>
                        <p className="text-white">{client.paragraph}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
