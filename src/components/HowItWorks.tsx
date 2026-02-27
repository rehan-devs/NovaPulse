"use client";

import React from "react";
import ScrollAnimator from "./ScrollAnimator";
import GradientOrb from "./GradientOrb";

const steps = [
  {
    number: "01",
    title: "Connect Your Accounts",
    description:
      "Securely link your bank accounts, credit cards, and investment accounts in under 2 minutes. We use bank-level encryption to keep your data safe.",
    visual: "connect",
  },
  {
    number: "02",
    title: "AI Analyzes Your Finances",
    description:
      "Our AI engine scans your transaction history, identifies patterns, and builds a complete picture of your financial health — income, spending, savings potential, and more.",
    visual: "analyze",
  },
  {
    number: "03",
    title: "Automate & Grow",
    description:
      "NovaPulse automatically optimizes your savings, manages your investments, and keeps your budget on track. Just sit back and watch your wealth grow.",
    visual: "grow",
  },
];

function StepVisual({ type, index }: { type: string; index: number }) {
  return (
    <div className="relative w-full aspect-[4/3] bg-nova-card/50 rounded-card-lg border border-white/[0.06] overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-nova-accent/[0.06] to-nova-accent-purple/[0.03]" />

      <div className="relative p-6 md:p-8 h-full flex flex-col justify-center">
        {type === "connect" && (
          <div className="space-y-3">
            {["Chase Bank", "Fidelity", "Robinhood"].map((bank, i) => (
              <div
                key={bank}
                className="flex items-center gap-3 bg-white/[0.03] rounded-xl p-3 border border-white/[0.06]"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nova-accent/20 to-nova-accent-purple/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-nova-accent/30" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{bank}</div>
                  <div className="text-xs text-white/40">Connected</div>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    className="text-emerald-400"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "analyze" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-nova-accent animate-pulse" />
              <span className="text-xs text-nova-accent font-medium">
                Analyzing...
              </span>
            </div>
            {[
              { label: "Income Stability", value: "94%", color: "from-emerald-400 to-emerald-500" },
              { label: "Savings Potential", value: "78%", color: "from-nova-accent to-nova-accent-purple" },
              { label: "Risk Score", value: "Low", color: "from-amber-400 to-orange-400" },
            ].map((item, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-xs text-white/50">{item.label}</span>
                  <span className="text-xs font-medium text-white/80">
                    {item.value}
                  </span>
                </div>
                <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    style={{
                      width:
                        item.value === "Low"
                          ? "25%"
                          : item.value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "grow" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04]">
                <div className="text-[10px] text-white/40 mb-1">
                  Monthly Growth
                </div>
                <div className="text-lg font-bold text-emerald-400">
                  +$1,240
                </div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04]">
                <div className="text-[10px] text-white/40 mb-1">
                  Annual Return
                </div>
                <div className="text-lg font-bold gradient-text">18.4%</div>
              </div>
            </div>
            <svg
              className="w-full h-20"
              viewBox="0 0 300 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="growFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="#4A6CF7"
                    stopOpacity="0.2"
                  />
                  <stop
                    offset="100%"
                    stopColor="#4A6CF7"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d="M0 70 C30 65, 60 50, 90 45 C120 40, 150 35, 180 25 C210 15, 240 18, 270 10 L300 5 L300 80 L0 80Z"
                fill="url(#growFill)"
              />
              <path
                d="M0 70 C30 65, 60 50, 90 45 C120 40, 150 35, 180 25 C210 15, 240 18, 270 10 L300 5"
                stroke="url(#chartLine)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-section-mobile md:py-section overflow-hidden"
    >
      <GradientOrb
        color="purple"
        size="lg"
        className="top-[20%] -right-[300px]"
      />

      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-narrow mx-auto mb-16 md:mb-20">
          <ScrollAnimator animation="fade-up">
            <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">
              How It Works
            </span>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={100}>
            <h2 className="text-section-mobile md:text-section font-bold text-white mb-5">
              Three steps to{" "}
              <span className="gradient-text">financial freedom.</span>
            </h2>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={200}>
            <p className="text-[17px] md:text-lg text-nova-text-muted leading-relaxed">
              Getting started takes less than 5 minutes. Our AI handles the rest.
            </p>
          </ScrollAnimator>
        </div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={step.number}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Text */}
                <ScrollAnimator
                  animation={isReversed ? "slide-right" : "slide-left"}
                  delay={100}
                  className="flex-1 w-full"
                >
                  <div className="max-w-lg">
                    <span className="text-[64px] md:text-[80px] font-bold gradient-text opacity-20 leading-none block mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-2xl md:text-[28px] font-bold text-white mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[16px] md:text-[17px] text-nova-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollAnimator>

                {/* Visual */}
                <ScrollAnimator
                  animation={isReversed ? "slide-left" : "slide-right"}
                  delay={200}
                  className="flex-1 w-full"
                >
                  <StepVisual type={step.visual} index={index} />
                </ScrollAnimator>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}