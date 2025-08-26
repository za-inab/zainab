import React from "react";
import logo from "./../../../public/ZainabAsif_white.svg";
import Image from "next/image";
import MenuItems from "./MenuItems";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar() {
  return (
    <div className={cn("grid grid-cols-4 p-3")}>
      <div className={cn("col-span-2 flex content-center justify-start")}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" className={cn("w-25 h-25")} />
        </Link>
      </div>
      <div className={cn("col-span-2 content-center justify-around")}>
        <MenuItems />
      </div>
      {/* <div className={cn("col-span-1 flex items-center justify-end")}>
        <div>Hamburger menu</div>
      </div> */}
    </div>
  );
}

export default Navbar;
