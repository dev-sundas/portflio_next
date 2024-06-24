import React from "react";
import Image from "next/image";
import image from "../../public/images/about_image.jpg";
import { Button } from "./ui/button";
type Props = {};

export default function Intoducation({ }: Props) {
  return (
    <div className="mt-24">
      <div className=" lg:w-[90%]  md:m-auto md:px-none px-4  xl:max-w-[1140px] xl:m-auto ">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <Image
              src={image}
              alt={"image.girl"}
              width={300}
              height={300}
              className="rounded-full w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] m-10"
            />
          </div>

          <div>
            <h1 className="font-extrabold text-[32px] tracking-wide left-3">
              LET&apos;S <br /> INTRODUCE ABOUT <br />
              MYSELF
            </h1>
            <div className="text-[white] leading-relaxed tracking-wide mt-4">
              <p className="mb-6">
                Whose given. Were gathered. There first subdue greater. Bearing
                <br />
                you Whales heaven midst their. Beast creepeth. Fish days.
              </p>
              <p>
                Is give may shall likeness made yielding spirit a itself
                together
                <br />
                created after sea is in beast beginning signs open god you are
                <br />
                gathering whose gathered cattle let. Creature whales fruit unto
                <br /> meat the life beginning all in under give two.
              </p>
            </div>

            <Button className="rounded-sm md:w-[30%] h-12 border-[2px] border-[#854fee] bg-[#854fee] text-white font-bold hover:bg-white hover:text-black mt-6">
              DOWNLODE CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
