"use client";

import React from "react";
import GradientOrb from "./GradientOrb";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  titleGradient,
  description,
  children
}: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
      <GradientOrb color="blue" size="lg" className="-top-[200px] -left-[200px]" />
      <GradientOrb color="purple" size="md" className="-top-[100px] -right-[200px]" />

      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          {eyebrow && (
            <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-hero-mobile md:text-[3.5rem] lg:text-hero font-bold text-white leading-[1.08] mb-6">
            {title}{" "}
            {titleGradient && (
              <span className="gradient-text">{titleGradient}</span>
            )}
          </h1>
          {description && (
            <p className="text-[17px] md:text-lg text-nova-text-muted leading-relaxed max-w-[560px] mx-auto">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}