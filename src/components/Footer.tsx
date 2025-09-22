"use client";
import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="w-full shadow-md h-20 z-10 flex items-center justify-center py-3 max-w-[1750px] self-center bg-gray-950 max-h-20">
      <div className="w-[99%] m-2 px-5 flex flex-row justify-between items-center ">
        <div className="py-1.5">
          <h4>
            © {new Date().getFullYear()} Zainab Asif - All Rights Reserved.{" "}
            <p>
              <span className="text-[9px] sm:text-xs text-emerald-400">
                Crafted with care and ❤️ by Zainab using Next.js & Tailwind
              </span>
            </p>
          </h4>
        </div>

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
