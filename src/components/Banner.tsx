import React from "react";
import Link from "next/link";

type Props = { link: string; text: string; heading: string };

export default function Heading({ link, text, heading }: Props) {
  return (
    <div>
      <div className="flex justify-center items-center w-full">
        <div className="bg-[url('/images/banner.png')]  w-[100%] md:w-[70%] md:h-[450px] pt-10 bg-no-repeat  xl:max-w-[1140px] xl:m-auto">
          <div className=" text-center p-10 md:p-24 text-white">
            <h1 className="md:text-[52px] text-[42px] font-bold">{heading}</h1>
            <p className="flex flex-row gap-4 justify-center items-center">
              <Link href={"/"}>Home</Link>-<Link href={link}>{text}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
