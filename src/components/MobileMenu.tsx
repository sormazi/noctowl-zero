
import React from "react";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Mission", href: "#mission" },
  { name: "Waitlist", href: "#waitlist" },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 bg-black/25 transition-opacity duration-400
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <aside
        className={`fixed right-0 top-0 h-full w-4/5 max-w-xs bg-white/85 dark:bg-[#181929]/95 drop-shadow-xl shadow-lg transition-transform duration-500 z-50
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          backfaceVisibility: "hidden",
          backdropFilter: "blur(30px)",
        }}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute right-5 top-5 p-2" aria-label="Close menu"
          onClick={onClose}
        >
          <X size={28} strokeWidth={1.2} />
        </button>
        <nav className="flex flex-col h-full items-start px-8 pt-24 gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              className="text-xl font-light text-black/70 dark:text-white/80 transition-colors duration-100 py-1 tracking-tightest"
              href={link.href}
              onClick={onClose}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};
