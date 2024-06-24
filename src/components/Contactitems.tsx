import React from "react";

type Props = { heading: string; paragraph: string; icon: React.ReactNode };

export default function Contactitems({ heading, paragraph, icon }: Props) {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="text-[#854fee]">{icon}</span>
        <div className="flex flex-col leading-relaxed">
          <h1 className="text-[20px] font-bold">{heading}</h1>
          <p className="text-white leading-10">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
