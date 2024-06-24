import React from "react";
import Image from "next/image";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Update from "./Update";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      <div className="lg:w-[100%] lg:m-auto bg-white p-6 ">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            src={
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdNDrlI38UxRpOO3nqpCcwAsQgcUr4j2VTL0jMokGvcVM5u4We"
            }
            alt={"image.logo"}
            width={70}
            height={40}
          />
          <p className="font-bold text-[20px]">FOLLOW ME</p>
          <div className="flex gap-6 text-[grey]">
            <Facebook />
            <Twitter />
            <Youtube />
            <Instagram />
            <Linkedin />
          </div>
          <div className=" text-[grey] items-center justify-center flex flex-col lg:flex-row gap-1  ">
            <p>
              Copyright ©2024 All rights reserved | This template is made with
              by dev.sundas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
