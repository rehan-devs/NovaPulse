"use client";

import React from "react";
import ScrollAnimator from "./ScrollAnimator";

const logos = [
  "Forbes",
  "TechCrunch",
  "Y Combinator",
  "Bloomberg",
  "Wired",
  "The Verge",
  "Fast Company",
];

function LogoText({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center">
      <span className="text-lg md:text-xl font-semibold text-white/[0.25] tracking-tight whitespace-nowrap select-none">
        {name}
      </span>
    </div>
  );
}

export default function LogosBar() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <ScrollAnimator animation="fade-up">
        <p className="text-center text-sm text-nova-text-muted/60 font-medium tracking-wide uppercase mb-10">
          Backed by the best in fintech
        </p>
      </ScrollAnimator>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-nova-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-nova-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <LogoText key={`${logo}-${i}`} name={logo} />
          ))}
          {[...logos, ...logos].map((logo, i) => (
            <LogoText key={`${logo}-dup-${i}`} name={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}