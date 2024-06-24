import Banner from "@/components/Banner";
import ClientSay from "@/components/ClientSay";
import Services from "@/components/Services";
import Update from "@/components/Update";
import { client, Services as db_services, recentWork } from "@/lib/database";
import { clientType, serviceType } from "@/lib/types";
import React from "react";

const service: serviceType[] = db_services;
const clients: clientType[] = client;

type Props = {};

export default function page({}: Props) {
  return (
    <div className="bg-[url('/images/body.webp')]">
      <div>
        <Banner link={"/services"} text={"Services"} heading={"SERVICES"} />
      </div>
      <div>
        <Services services={service} />
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
