import Link from "next/link";
import React from "react";

interface MenuItemsProps {
  direction?: "row" | "col";
  onClick?: () => void; // optional, useful to close mobile menu when link is clicked
}

function MenuItems({ direction = "row", onClick }: MenuItemsProps) {
  return (
    <div
      className={`flex ${
        direction === "row" ? "flex-row space-x-6" : "flex-col space-y-4"
      }`}
    >
      <Link href="/about" onClick={onClick} className="hover:text-emerald-500">
        About
      </Link>
      <Link href="/resume" onClick={onClick} className="hover:text-emerald-500">
        Resume
      </Link>
      <Link
        href="/portfolio"
        onClick={onClick}
        className="hover:text-emerald-500"
      >
        Portfolio
      </Link>
      <Link
        href="/contact"
        onClick={onClick}
        className="hover:text-emerald-500"
      >
        Contact
      </Link>
    </div>
  );
}

export default MenuItems;
