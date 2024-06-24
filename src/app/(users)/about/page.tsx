import Banner from "@/components/Banner";
import ClientSay from "@/components/ClientSay";
import Introduction from "@/components/Introduction";
import Update from "@/components/Update";
import { client } from "@/lib/database";
import { clientType } from "@/lib/types";
import React from "react";

const clients: clientType[] = client;

type Props = {};

export default function About({}: Props) {
  return (
    <div className="bg-[url('/images/body.webp')]">
      <div>
        <Banner link={"/about"} text={"About"} heading={"ABOUT US"} />
      </div>

      <div>
        <Introduction />
      </div>
      <div>
        <ClientSay clients={clients} />
      </div>
      <div>
        <Update />
      </div>
    </div>
  );
}
