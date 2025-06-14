
import React from "react";

export const Footer = () => (
  <footer className="w-full max-w-5xl mx-auto py-16 px-6 text-center mt-24 opacity-80 text-black/50 dark:text-white/50 font-light">
    <div className="mb-3">
      <span className="font-semibold tracking-tightest">NoctOWL ZERO</span> &copy; {new Date().getFullYear()} QQ Labs.
    </div>
    <div className="text-xs tracking-tight">Valuation AI, made with intention and care.</div>
    <div className="mt-4 flex gap-4 justify-center items-center text-sm opacity-80">
      <a
        href="#home"
        className="hover:underline underline-offset-2 tracking-tightest"
      >
        Home
      </a>
      <a
        href="#mission"
        className="hover:underline underline-offset-2 tracking-tightest"
      >
        Mission
      </a>
      <a
        href="#waitlist"
        className="hover:underline underline-offset-2 tracking-tightest"
      >
        Waitlist
      </a>
    </div>
  </footer>
);
