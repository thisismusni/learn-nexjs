import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type ButtonMenuProps = {
  title: string;
  icon: ReactNode;
  href: string;
};

export default function ButtonMenu(props: ButtonMenuProps) {
  const pathname = usePathname();
  return (
    <Link
      href={props.href}
      className={cn(
        "w-full flex p-2 hover:bg-slate-50 hover:text-black rounded-lg gap-x-2",
        pathname.includes(props.href)
          ? "bg-slate-50 text-black"
          : "text-white border-[1px] border-white/50"
      )}
    >
      {props.icon}
      {props.title}
    </Link>
  );
}
