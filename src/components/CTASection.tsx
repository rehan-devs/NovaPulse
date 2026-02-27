// src/components/CTASection.tsx
"use client";

import React from "react";
import ScrollAnimator from "./ScrollAnimator";
import GradientOrb from "./GradientOrb";

export default function CTASection() {
  return (
    <section className="relative py-section-mobile md:py-section overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <ScrollAnimator animation="scale">
          <div className="relative rounded-[24px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-nova-accent/[0.12] via-nova-card to-nova-accent-purple/[0.08]" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-[24px] pointer-events-none" />

            {/* Gradient orbs */}
            <GradientOrb
              color="blue"
              size="lg"
              className="-top-[200px] -left-[200px]"
            />
            <GradientOrb
              color="purple"
              size="md"
              className="-bottom-[150px] -right-[150px]"
            />

            {/* Dot grid */}
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
              <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white mb-5 leading-tight max-w-[600px] mx-auto">
                Ready to put your finances on{" "}
                <span className="gradient-text">autopilot?</span>
              </h2>
              <p className="text-[16px] md:text-lg text-white/60 max-w-[480px] mx-auto mb-10 leading-relaxed">
                Join over 50,000 people who are already saving smarter, investing
                better, and stressing less about money.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="group relative inline-flex items-center px-8 py-4 text-[15px] font-semibold text-nova-bg bg-white rounded-button overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.03]"
                >
                  <span className="relative z-10">Start for Free</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-4 text-[15px] font-medium text-white border border-white/[0.2] rounded-button transition-all duration-300 hover:border-white/[0.4] hover:bg-white/[0.05]"
                >
                  Schedule a Demo
                </a>
              </div>
              <p className="text-xs text-white/30 mt-6">
                No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}