import Banner from "@/components/Banner";
import Recent from "@/components/Recent";
import RecentLinks from "@/components/RecentLinks";
import Update from "@/components/Update";
import { recentWork } from "@/lib/database";
import { recentType } from "@/lib/types";
import React from "react";

const recent: recentType[] = recentWork;

type Props = {};

export default function page({}: Props) {
  return (
    <div className="bg-[url('/images/body.webp')] ">
      <div>
        <Banner link={"/portflio"} text={"Portflio"} heading={"PORTFOLIO"} />
      </div>
      <div>
        <Recent rectents={recent} />
      </div>
      <div>
        <Update />
      </div>
    </div>
  );
}
