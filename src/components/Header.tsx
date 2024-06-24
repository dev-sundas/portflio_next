"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Navitems from "./Navitems";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import EditMenubar from "./EditMenubar";
import { usePathname } from "next/navigation";

type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header>
      <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
        <div className="flex flex-col lg:flex-row bg-white lg:items-center justify-between">
          <div>
            <Link href={"/"} className="flex gap-4 items-center">
              <Image
                src={
                  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdNDrlI38UxRpOO3nqpCcwAsQgcUr4j2VTL0jMokGvcVM5u4We"
                }
                alt={"image.logo"}
                width={60}
                height={30}
              />
              <h1 className="text-[27px] font-bold">PORTFOLIO</h1>
            </Link>
          </div>

          <div className="py-4 flex flex-col items-start bg-slate-900 lg:flex-row lg:justify-center  lg:bg-white  lg:items-center">
            <div className="lg:hidden">
              {open ? (
                <Button
                  className="bg-transparent hover:bg-transparent"
                  onClick={() => setOpen(false)}
                >
                  <X className="absolute right-5 text-white" />
                </Button>
              ) : (
                <Button className="bg-transparent hover:bg-transparent">
                  <Menu
                    className="absolute right-5 text-white"
                    onClick={() => setOpen(true)}
                  />
                </Button>
              )}
            </div>

            <div
              className={`${
                open ? "flex" : "hidden"
              } lg:flex flex-col text-white gap-5 ml-2 lg:flex-row md:gap-10 lg:text-black lg:items-center font-bold`}
            >
              <Navitems
                link={"/"}
                text={"Home"}
                setopen={setOpen}
                open={open}
                isActive={false}
              />

              <Navitems
                link={"/about"}
                text={"ABOUT US"}
                setopen={setOpen}
                open={open}
                isActive={false}
              />

              <Navitems
                link={"/services"}
                text={"SERVICES"}
                setopen={setOpen}
                open={open}
                isActive={false}
              />
              <Navitems
                link={"/protflio"}
                text={"PORTFLIO"}
                setopen={setOpen}
                open={open}
                isActive={false}
              />
              <EditMenubar />
              <Navitems
                link={"/contact"}
                text={"Contact"}
                setopen={setOpen}
                open={open}
                isActive={false}
              />
              <Navitems
                link={"/dashboard"}
                text={"DashBoard"}
                setopen={setOpen}
                open={open}
                isActive={false}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
