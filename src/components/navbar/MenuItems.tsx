"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsFileText } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { cn } from "@/lib/utils";

interface MenuItemsProps {
  direction?: "row" | "col";
  onClick?: () => void;
}

function MenuItems({ direction = "row", onClick }: MenuItemsProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/",
      icon: IoHomeOutline,
      label: "Home",
    },
    {
      href: "/about",
      icon: FiUser,
      label: "About",
    },
    {
      href: "/resume",
      icon: BsFileText,
      label: "Resume",
    },
    {
      href: "/portfolio",
      icon: IoBriefcaseOutline,
      label: "Portfolio",
    },
    {
      href: "/contact",
      icon: MdOutlineMail,
      label: "Contact",
    },
  ];

  const getItemStyles = (href: string, isRow: boolean) => {
    const isActive = pathname === href;

    const baseStyles = cn(
      "relative flex items-center gap-2 p-3 rounded-xl transition-all duration-300 group",
      "hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400/30",
      "border border-transparent",
      isRow ? "hover:scale-105" : "hover:translate-x-2"
    );

    const activeStyles = cn(
      "text-emerald-400 bg-emerald-500/20 border-emerald-400/40",
      "shadow-lg shadow-emerald-500/20",
      isRow ? "scale-105" : "translate-x-2"
    );

    return isActive ? cn(baseStyles, activeStyles) : baseStyles;
  };

  return (
    <div
      className={`flex ${
        direction === "row" ? "flex-row space-x-4" : "flex-col space-y-2 p-4"
      }`}
    >
      {menuItems.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            onClick={onClick}
            className={getItemStyles(href, direction === "row")}
          >
            <Icon
              className={cn(
                "transition-all duration-300",
                isActive ? "text-emerald-400" : "text-current"
              )}
            />
            <span className="font-medium">{label}</span>

            {/* Active indicator line for mobile */}
            {direction === "col" && (
              <div
                className={cn(
                  "absolute left-0 top-1/2 w-1 h-8 bg-emerald-400 rounded-r-full transition-all duration-300 -translate-y-1/2",
                  isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                )}
              />
            )}

            {/* Active indicator dot for desktop */}
            {direction === "row" && (
              <div
                className={cn(
                  "absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full transition-all duration-300 -translate-x-1/2",
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                )}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}

export default MenuItems;
