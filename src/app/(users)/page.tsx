import ClientSay from "@/components/ClientSay";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Recent from "@/components/Recent";
import Services from "@/components/Services";
import Update from "@/components/Update";
import { client, Services as db_services, recentWork } from "@/lib/database";
import { clientType, recentType, serviceType } from "@/lib/types";

const service: serviceType[] = db_services;
const recent: recentType[] = recentWork;
const clients: clientType[] = client;

export default function Home() {
  return (
    <main className="bg-[url('/images/body.webp')]">
      <div>
        <Hero />
      </div>
      <div>
        <Introduction />
      </div>
      <div>
        <Services services={service} />
      </div>
      <div>
        <Recent rectents={recent} />
      </div>
      <div>
        <ClientSay clients={clients} />
      </div>
      <div>
        <Update />
      </div>
    </main>
  );
}
