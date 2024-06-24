"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

type Props = {};

export default function EditMenubar({}: Props) {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-[16px] bg-transparent hover:text-[#854fee]">
              PAGES
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Sign In</NavigationMenuLink>
              <br />
              <NavigationMenuLink>Sign Up</NavigationMenuLink>
              <br />
              <NavigationMenuLink>Elements</NavigationMenuLink>
              <br />
              <NavigationMenuLink>Portflio details</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
