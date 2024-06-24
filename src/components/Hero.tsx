"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "../../public/images/hero_image.jpg";
import { Button } from "./ui/button";
import Link from "next/link";
import EditDialog from "./EditDialog";

type Props = {};

export default function Hero({}: Props) {
  const [open, setopen] = useState(false);
  return (
    <div>
      <div className="lg:w-[90%]   md:m-auto px-4  xl:max-w-[1140px] xl:m-auto ">
        <div className="flex flex-col md:flex-row justify-between pt-20">
          <div className="font-extrabold leading-relaxed">
            <div className="flex items-center gap-5 ">
              <h1 className="md:text-[40px] md:tracking-wide text-[20px] lg:mb-6">
                HELLO
              </h1>
              <div className="md:h-[2px] md:w-[65%] md:bg-black"></div>
            </div>

            <h1 className="md:text-[52px] md:tracking-wide text-[27px] lg:mb-6">
              I AM SUNDAS BATOOL
            </h1>
            <h2 className="md:text-[27px] text-[20px] lg:mb-6">
              SENIOR WORDPRESS DEVELOPER
            </h2>
            <div className="flex gap-5 mt-4 ">
              <Link href="/contact">
                <Button className="rounded-sm md:w-[100%] h-12 border-[2px] border-[#854fee] bg-[#854fee] text-white font-bold hover:bg-white hover:text-black">
                  HIRE ME
                </Button>
              </Link>
              <EditDialog open={open} setopen={setopen} />

              <Button
                onClick={() => {
                  setopen(true);
                }}
                className="rounded-sm md:w-[20%] h-12 border-[2px] border-[#854fee] bg-white text-black font-bold hover:bg-[#854fee] hover:text-white"
              >
                GET CV
              </Button>
            </div>
          </div>
          <div>
            <Image
              className="rounded-full w-[150px] h-[150px]  lg:w-[300px] lg:h-[300px] m-10"
              src={image}
              alt={"image.girl"}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
