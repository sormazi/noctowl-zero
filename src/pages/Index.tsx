
// Homepage for NoctOWL ZERO, luxury LLM for finance

import React, { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { MobileMenu } from "@/components/MobileMenu";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gradient-to-br from-white to-[#dbeaff]/65 dark:from-[#191A28] dark:to-[#222439] min-h-screen scroll-smooth relative">
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
