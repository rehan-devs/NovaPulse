"use client";

import React, { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollAnimator({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  as: Component = "div",
}: ScrollAnimatorProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    triggerOnce: true,
  });

  const baseStyles = "transition-all duration-700 ease-out";
  
  const animationStyles = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-[30px]",
    "fade-down": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-[20px]",
    "fade-in": isVisible
      ? "opacity-100"
      : "opacity-0",
    "slide-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-[40px]",
    "slide-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-[40px]",
    "scale": isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={cn(baseStyles, animationStyles[animation], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}