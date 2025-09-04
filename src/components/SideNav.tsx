import React from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

function SideNav() {
  return (
    <div className="fixed right-4 top-1/4 flex flex-col space-y-6 bg-black/70 rounded-full px-3 py-4">
      <FaHome className="text-white hover:text-emerald-500 cursor-pointer" />
      <FaUser className="text-white hover:text-emerald-500 cursor-pointer" />
      <FaBriefcase className="text-white hover:text-emerald-500 cursor-pointer" />
      <FaEnvelope className="text-white hover:text-emerald-500 cursor-pointer" />
    </div>
  );
}

export default SideNav;
