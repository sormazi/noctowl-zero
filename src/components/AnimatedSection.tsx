
import React, { useRef, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  as: Tag = "section",
  delay = 0,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    };
    const observer = new window.IntersectionObserver(handleScroll, {
      threshold: 0.2,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      className={`
        transition-all duration-800 ease-out
        ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-7 blur-md"}
        will-change-transform
        ${className}
        `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

