import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Update from "@/components/Update";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="bg-[url('/images/body.webp')] ">
      <div>
        <Banner link={"/contact"} text={"Contact"} heading={"CONTACT US"} />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Update />
      </div>
    </div>
  );
}
