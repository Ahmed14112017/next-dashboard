import Link from "next/link";
import React from "react";
import Navlinks from "../Navlinks/Navlinks";
export default function page() {
  return (
    <div className="flex flex-col md:flex-row">
      <Navlinks />
    </div>
  );
}
