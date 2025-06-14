
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Mission", href: "#mission" },
  { name: "Waitlist", href: "#waitlist" },
];

export const NavBar = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  return (
    <nav
      className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 dark:bg-[#181929]/65 border-b 
        border-white/10
        shadow-none transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span
          className="font-bold text-2xl tracking-tightest font-sans select-none"
          style={{ letterSpacing: "-.05em" }}
        >
          NoctOWL <span className="opacity-50 font-light">ZERO</span>
        </span>
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                className="text-base font-light text-black/70 dark:text-white/70 hover:text-black/90 dark:hover:text-white/90 uppercase tracking-tightest transition-all duration-150"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="p-3 bg-white/40 rounded-full hover:bg-white/90 transition-all"
            onClick={onOpenMenu}
          >
            <Menu size={24} strokeWidth={1.4} className="text-black/70 dark:text-white/80" />
          </button>
        </div>
      </div>
    </nav>
  );
};
