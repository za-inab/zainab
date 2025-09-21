"use client";
import React, { useState, useEffect } from "react";
import logo from "./../../../public/ZA_green_white.svg";
import Image from "next/image";
import MenuItems from "./MenuItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "@deemlol/next-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-screen h-20 z-100 transition-all duration-300 ease-in-out",
        "flex items-center justify-center py-3 max-w-[1750px] self-center",
        isScrolled
          ? "bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-lg shadow-2xl shadow-black/40"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between self-center w-[99%] px-6 py-3">
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
          className={cn(
            "md:hidden p-2 rounded-lg transition-all duration-200",
            "hover:bg-emerald-500/20 hover:scale-105 active:scale-95",
            "border border-transparent hover:border-emerald-500/30 text-white hover:text-emerald-400 "
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Sidebar */}
        <div
          className={cn(
            "fixed top-0 right-0 h-screen w-80 transform transition-all duration-500 ease-out z-200",
            "bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-950/95",
            "backdrop-blur-xl border-l border-emerald-500/20 shadow-2xl shadow-emerald-900/20",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Decorative top accent */}
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />

          {/* Sidebar Header */}
          <div className="relative flex items-center justify-between px-6 py-6 border-b border-emerald-500/10 bg-gradient-to-r from-emerald-900/10 to-transparent">
            <div className="flex items-center space-x-3">
              <div>
                <span className="font-bold text-xl text-emerald-400 tracking-wide">
                  Menu
                </span>
                <p className="text-xs text-emerald-300/60 font-medium">
                  Navigate Portfolio
                </p>
              </div>
            </div>
            <button
              className={cn(
                "p-2.5 rounded-full transition-all duration-500",
                "hover:bg-emerald-500/20 hover:rotate-90 hover:scale-110",
                "border border-emerald-500/20 hover:border-emerald-400/40",
                "group active:scale-95"
              )}
              onClick={() => setIsOpen(false)}
            >
              <X
                size={20}
                className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
              />
            </button>
          </div>

          {/* Menu Items Container */}
          <div className="px-4 py-6 space-y-2 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />

            {/* Menu Items with enhanced styling */}
            <div className="relative space-y-1">
              <MenuItems onClick={() => setIsOpen(false)} direction={"col"} />
            </div>
          </div>

          {/* Bottom accent section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-emerald-900/20 to-transparent border-t border-emerald-500/10">
            <div className="text-center">
              <p className="text-xs text-emerald-300/40 font-medium">
                Zainab Asif
              </p>
              <p className="text-xs text-emerald-200/30">Software Engineer</p>
            </div>
            {/* Decorative dots */}
            <div className="flex justify-center space-x-1 mt-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400/30"
                />
              ))}
            </div>
          </div>

          {/* Subtle inner glow effect */}
          <div className="absolute inset-0 rounded-l-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-900/5 pointer-events-none" />
        </div>

        {/* Enhanced Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-500"
            onClick={() => setIsOpen(false)}
          >
            {/* Subtle animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-black/20" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;