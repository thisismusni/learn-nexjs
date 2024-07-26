"use client";
import Footer from "@/components/layout/footer";
import Sidebar from "@/components/layout/sidebar";
import Topbar from "@/components/layout/topbar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen bg-slate-50 flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Topbar />
        <main className="p-4 flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default layout;
