import ProjectForm from "@/components/ProjectForm";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <section className="w-[73%]">
      <ProjectForm />
    </section>
  );
}
