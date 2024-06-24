import React from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

export default function Update({}: Props) {
  return (
    <div className="relative">
      <div className="h-[50vh] w-full"></div>
      <div className="absolute md:top-[100px] top-[10px] left-0 right-0">
        <div className="bg-[url('/images/subscribe.webp')] bg-no-repeat w-[90%] m-auto md:h-[80vh]   p-5 md:py-[100px]  xl:max-w-[1140px] xl:m-auto">
          <div className="text-center text-[white]">
            <h1 className="font-bold text-[27px] mb-4">
              GET UPDATE FROM ANYWHERE
            </h1>
            <p>
              Bearing Void gathering light light his eavening unto dont afraid.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:mt-6 gap-4 p-4">
              <Input
                placeholder="Email address"
                className="bg-transparent placeholder:text-[white] md:w-[45%] h-12 "
              />
              <Button className="bg-[white] text-[black] h-12 md:w-[15%] border-[2px] border-[black]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] bg-white w-full"></div>
    </div>
  );
}
