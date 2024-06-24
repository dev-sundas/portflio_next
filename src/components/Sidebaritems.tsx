import React from "react";
import Link from "next/link";

type Props = { icon: React.ReactNode; link: string; text: string };

export default function Siderbar({ icon, link, text }: Props) {
  return (
    <div className="mt-6">
      <span className="flex items-center gap-3">
        {icon}
        <Link href={link} className="font-bold text-[20px] ">
          {text}
        </Link>
      </span>
    </div>
  );
}
