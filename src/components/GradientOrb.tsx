"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "blue" | "purple" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

export default function GradientOrb({
  className = "",
  color = "blue",
  size = "md",
  animate = true,
}: GradientOrbProps) {
  const sizeClasses = {
    sm: "w-[200px] h-[200px]",
    md: "w-[400px] h-[400px]",
    lg: "w-[600px] h-[600px]",
    xl: "w-[800px] h-[800px]",
  };

  const colorClasses = {
    blue: "bg-[radial-gradient(circle,rgba(74,108,247,0.15)_0%,transparent_70%)]",
    purple: "bg-[radial-gradient(circle,rgba(123,97,255,0.12)_0%,transparent_70%)]",
    mixed: "bg-[radial-gradient(circle,rgba(74,108,247,0.12)_0%,rgba(123,97,255,0.08)_50%,transparent_70%)]",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none blur-3xl",
        sizeClasses[size],
        colorClasses[color],
        animate && "animate-pulse-glow",
        className
      )}
      aria-hidden="true"
    />
  );
}