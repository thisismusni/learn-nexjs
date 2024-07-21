"use client";
import React, { ReactNode } from "react";
import { Box, Tag, User, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

function layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="w-screen h-screen bg-slate-50 flex">
      <aside className="w-[250px] bg-slate-600 text-white flex flex-col ">
        <Link
          href="/dashboard"
          className="w-full h-[70px] text-3xl font-bold text-center py-4 px-2 border-b-[1px] border-slate-100/50"
        >
          Admin
        </Link>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard/produk"
                className={cn(
                  "w-full flex p-2 hover:bg-slate-50 hover:text-black rounded-lg gap-x-2",
                  pathname.includes("/dashboard/produk")
                    ? "bg-slate-50 text-black"
                    : "text-white border-[1px] border-white/50"
                )}
              >
                <Box />
                Produk
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/kategori"
                className={cn(
                  "w-full flex p-2 hover:bg-slate-50 hover:text-black rounded-lg gap-x-2",
                  pathname.includes("/dashboard/kategori")
                    ? "bg-slate-50 text-black"
                    : "text-white border-[1px] border-white/50"
                )}
              >
                <Tag />
                Kategori
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/user"
                className={cn(
                  "w-full flex p-2 hover:bg-slate-50 hover:text-black rounded-lg gap-x-2",
                  pathname.includes("/dashboard/user")
                    ? "bg-slate-50 text-black"
                    : "text-white border-[1px] border-white/50"
                )}
              >
                <Users />
                User
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="w-full">
        <div className="h-[50px] bg-slate-500 w-full p-4">Header</div>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default layout;
