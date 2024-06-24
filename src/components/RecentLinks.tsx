import Link from "next/link";
import React from "react";

type Props = { link: string; text: string };

export default function RecentLinks({ link, text }: Props) {
  return (
    <div>
      <div>
        <Link href={link} className="hover:text-[#854fee]">
          {text}
        </Link>
      </div>
    </div>
  );
}
