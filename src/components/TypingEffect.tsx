
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TypingEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all text nodes and wrap each character in a span
    const processTextNodes = (element: HTMLElement) => {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      const textNodes: Text[] = [];
      let node;
      while (node = walker.nextNode()) {
        if (node.textContent?.trim()) {
          textNodes.push(node as Text);
        }
      }

      textNodes.forEach(textNode => {
        const parent = textNode.parentElement;
        if (!parent) return;

        const text = textNode.textContent || "";
        const spans = text.split("").map(char => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char; // non-breaking space
          span.style.opacity = "0";
          return span;
        });

        spans.forEach(span => parent.insertBefore(span, textNode));
        parent.removeChild(textNode);
      });
    };

    processTextNodes(container);

    // Animate characters with scroll trigger
    const chars = container.querySelectorAll("span");
    
    gsap.set(chars, { opacity: 0 });

    ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalChars = chars.length;
        const visibleChars = Math.floor(progress * totalChars);
        
        chars.forEach((char, index) => {
          gsap.set(char, { 
            opacity: index <= visibleChars ? 1 : 0 
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
