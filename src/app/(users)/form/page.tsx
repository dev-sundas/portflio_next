"use client";
import Login_form from "@/components/Loginform";
import Register from "@/components/Register";
import React from "react";

type Props = {};

export default function page({ }: Props) {
  return (
    <div className="bg-[url('/images/body.webp')] ">
      <div>
        <Login_form />
      </div>
    </div>
  );
}
