
import React, { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "You've joined the waitlist.",
      });
    }, 650);
    setEmail("");
  };

  return (
    <AnimatedSection as="section" id="waitlist" className="max-w-xl mx-auto mt-28" delay={250}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-5 rounded-xl p-7 bg-white/45 dark:bg-[#292B44]/80 shadow-glass backdrop-blur-md"
        style={{
          boxShadow: "0 8px 32px 0 rgba(45, 60, 180, 0.17)"
        }}
      >
        <Input
          type="email"
          name="email"
          placeholder="Your email…"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitted}
          className="flex-1 h-12 font-light tracking-tightest bg-white/90 backdrop-blur-md text-black"
          required
        />
        <NeumorphicButton
          type="submit"
          className="h-12 px-7 mt-2 sm:mt-0 whitespace-nowrap"
          disabled={submitted}
        >
          {submitted ? "Joined!" : "Join the waitlist"}
        </NeumorphicButton>
      </form>
      <div className="text-center mt-2 text-xs text-black/60 dark:text-white/50 font-light tracking-tightest">
        Be the first to try NoctOWL ZERO. No spam, promise.
      </div>
    </AnimatedSection>
  );
};
