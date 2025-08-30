"use client";
import React, { useState } from "react";
import logo from "./../../../public/ZA_green_white.svg";
import Image from "next/image";
import MenuItems from "./MenuItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // 👈 icons for hamburger

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full bg-transparent shadow-md z-50",
        "flex items-center justify-between px-6 py-3"
      )}
    >
      {/* Logo */}
      <Link href={"/"} className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12"
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <MenuItems />
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <MenuItems />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
