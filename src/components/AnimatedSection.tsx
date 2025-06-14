
import React, { useRef, useEffect, useState } from "react";

type AnimatedSectionProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  delay?: number;
} & React.ComponentPropsWithoutRef<T>;

export const AnimatedSection = <T extends React.ElementType = "section">({
  as,
  children,
  className = "",
  delay = 0,
  ...rest
}: AnimatedSectionProps<T>) => {
  const Tag = (as || "section") as React.ElementType;
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
      style={{ transitionDelay: `${delay}ms`, ...(rest.style || {}) }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
