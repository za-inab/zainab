"use client";
import React, { useState } from "react";
import logo from "./../../../public/ZA_green_white.svg";
import Image from "next/image";
import MenuItems from "./MenuItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "@deemlol/next-icons"; // 👈 icons for hamburger

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
        className="md:hidden p-2 rounded-md hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <span className="font-semibold text-lg">Menu</span>
          <button
            className="p-2 rounded-md hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Menu Items */}
        <div>
          <MenuItems onClick={() => setIsOpen(false)} direction={"col"} />
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
