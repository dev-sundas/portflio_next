import Link from "next/link";

import React from "react";

type Props = {
  link: string;
  text: string;
  setopen(open: boolean): void;
  open: boolean;
  isActive: boolean;
};

export default function Navitems({
  link,
  text,
  setopen,
  open,
  isActive,
}: Props) {
  return (
    <div>
      <ul>
        <li>
          <Link
            href={link}
            onClick={() => setopen(!open)}
            className={`${isActive && "text-[#854fee]"} hover:text-[#854fee]`}
          >
            {text}
          </Link>
        </li>
      </ul>
    </div>
  );
}
