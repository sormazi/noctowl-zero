// Homepage for NoctOWL ZERO, luxury LLM for finance

import React, { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { MobileMenu } from "@/components/MobileMenu";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import { OwlBackdrop } from "@/components/OwlBackdrop";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Force dark mode on mount for a glassy/dark theme always
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
    // Cleanup way for page navigation (if ever)
    return () => {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    };
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-[#22243a]/95 via-[#181A2B]/90 to-[#232747]/90 min-h-screen scroll-smooth relative overflow-x-hidden">
      <OwlBackdrop />
      {/* Content overlays backdrop */}
      <NavBar onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="mx-auto max-w-5xl px-4 pt-28 pb-12">
        <HeroSection onWaitlist={() => {
          document.getElementById("waitlist")?.scrollIntoView({behavior: "smooth"});
        }} />
        <MissionSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
