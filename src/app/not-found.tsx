"use client";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function notFound() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-[100px] font-bold text-blue-600">404</h1>
      <p className="text-[32px] font-bold">not found</p>
      <button
        className="bg-slate-500 p-2 rounded-lg text-white flex gap-2"
        onClick={() => router.back()}
      >
        <Undo2 />
        Back
      </button>
    </div>
  );
}
