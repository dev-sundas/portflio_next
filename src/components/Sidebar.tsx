import React from "react";
import Sidebaritems from "@/components/Sidebaritems";
import { Card, CardContent } from "@/components/ui/card";
import {
  LayoutDashboard,
  ListChecks,
  ListIcon,
  MonitorCheckIcon,
  User2,
} from "lucide-react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <aside className="w-[25%]">
      <Card className="rounded-none min-h-screen h-full">
        <CardContent>
          <Sidebaritems
            link={"/dashboard"}
            text={"Dashboard"}
            icon={<LayoutDashboard size={30} />}
          />
          <Sidebaritems
            link={"/dashboard/personalInfo"}
            text={"Personal Form "}
            icon={<ListIcon size={30} />}
          />
          <Sidebaritems
            link={"/dashboard/ServicesInfo"}
            text={"Services Form"}
            icon={<MonitorCheckIcon size={30} />}
          />
          <Sidebaritems
            link={"/dashboard/projectInfo"}
            text={"Project Form"}
            icon={<ListChecks size={30} />}
          />
          <Sidebaritems
            link={"/dashboard/clientInfo"}
            text={" Client Form"}
            icon={<User2 size={30} />}
          />
        </CardContent>
      </Card>
    </aside>
  );
}
