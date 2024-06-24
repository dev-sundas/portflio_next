import { recentType } from "@/lib/types";
import React from "react";
import Image from "next/image";
import RecentLinks from "./RecentLinks";

type Props = { rectents: recentType[] };

export default function Recent({ rectents }: Props) {
  return (
    <div className="mt-24">
      <div className="lg:w-[90%] lg:m-auto px-6  xl:max-w-[1140px] xl:m-auto">
        <div className="">
          <h1 className="text-[32px] font-extrabold mb-12 ">
            QUALITY WORK
            <br /> RECENTLY DONE PROJECT
          </h1>

          <div className="flex flex-wrap gap-6 text-white mb-12">
            <RecentLinks link={"all"} text={"ALL"} />
            <RecentLinks link={"/?s=popular"} text={"POPULAR"} />
            <RecentLinks link={"/?s=latest"} text={"LATEST"} />
            <RecentLinks link={"/?s=following"} text={"FOLLOWING"} />
            <RecentLinks link={"/?s=upcoming"} text={"UPCOMING"} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
          {rectents.map((recent) => (
            <div key={recent.id}>
              <Image src={recent.image_url} alt={""} width={400} height={400} />
              <h1 className="font-bold text-[20px] mt-3">{recent.heading}</h1>
              <p className="text-white mt-3">{recent.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
