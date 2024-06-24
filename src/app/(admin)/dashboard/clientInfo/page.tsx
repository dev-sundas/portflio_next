import ClientForm from "@/components/ClientForm";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <section className="w-[73%]">
      <ClientForm />
    </section>
  );
}
