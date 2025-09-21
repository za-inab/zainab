"use client";
import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="w-full shadow-md h-20 z-10 flex items-center justify-center py-3 max-w-[1750px] self-center bg-gray-950 max-h-20">
      <div className="w-[99%] m-2 px-5 flex flex-row justify-between items-center ">
        <h4>© 2025 Zainab Asif - All Rights Reserved.</h4>
        <div>
          <div className="rounded-full p-2 border-2 border-emerald-950 hover:text-emerald-400 hover:border-emerald-400">
            <Link href={"/"}>
              <IoHomeOutline />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
