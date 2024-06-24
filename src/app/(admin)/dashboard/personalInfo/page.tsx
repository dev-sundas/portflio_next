import PersonalForm from "@/components/PersonalForm";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <section className="w-[73%]">
      <PersonalForm />
    </section>
  );
}
