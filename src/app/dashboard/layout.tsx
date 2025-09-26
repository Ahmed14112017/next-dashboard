import React from "react";
import Navlinks from "../ui/dashboard/Navlinks/Navlinks";

export default function page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64  bg-neutral-600 md:bg-fuchsia-600">
        <Navlinks />
      </div>
      <div className="flex-1 p-6 md:overflow-y-auto md:p-12 bg-amber-800 md:bg-emerald-400">
        {children}
      </div>
    </div>
  );
}
