"use client";

import React from "react";
import ScrollAnimator from "./ScrollAnimator";
import GradientOrb from "./GradientOrb";

const floatingCards = [
  {
    text: "+$240 saved this month",
    icon: "💰",
    position: "top-[8%] left-[2%] md:left-[5%]",
    delay: "0s",
  },
  {
    text: "Portfolio up 12.4%",
    icon: "📈",
    position: "top-[15%] right-[2%] md:right-[5%]",
    delay: "1s",
  },
  {
    text: "Budget on track",
    icon: "✅",
    position: "bottom-[20%] left-[3%] md:left-[8%]",
    delay: "2s",
  },
  {
    text: "New goal reached!",
    icon: "🎯",
    position: "bottom-[12%] right-[3%] md:right-[6%]",
    delay: "0.5s",
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative py-section-mobile md:py-section overflow-hidden">
      <GradientOrb
        color="blue"
        size="xl"
        className="top-[30%] left-[50%] -translate-x-1/2"
      />

      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-narrow mx-auto mb-12 md:mb-16">
          <ScrollAnimator animation="fade-up">
            <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">
              The Dashboard
            </span>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={100}>
            <h2 className="text-section-mobile md:text-section font-bold text-white mb-5">
              Your complete financial{" "}
              <span className="gradient-text">command center.</span>
            </h2>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={200}>
            <p className="text-[17px] md:text-lg text-nova-text-muted leading-relaxed">
              See everything at a glance. Real-time insights, smart
              notifications, and automated actions — all in one beautiful
              interface.
            </p>
          </ScrollAnimator>
        </div>

        {/* Product Image Container */}
        <ScrollAnimator animation="scale" delay={100}>
          <div className="relative max-w-[1000px] mx-auto">
            {/* Floating notification cards */}
            {floatingCards.map((card, i) => (
              <div
                key={i}
                className={`absolute ${card.position} z-20 hidden md:flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl shadow-card animate-float`}
                style={{ animationDelay: card.delay, animationDuration: `${4 + i * 0.5}s` }}
              >
                <span className="text-base">{card.icon}</span>
                <span className="text-xs font-medium text-white whitespace-nowrap">
                  {card.text}
                </span>
              </div>
            ))}

            {/* Glow behind */}
            <div
              className="absolute -inset-x-20 -inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(74,108,247,0.12)_0%,transparent_60%)] blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Main product screenshot */}
            <div className="relative bg-nova-card rounded-card-lg border border-white/[0.08] overflow-hidden shadow-card-hover">
              <div className="p-6 md:p-10">
                {/* Full dashboard mockup */}
                <div className="space-y-6">
                  {/* Header bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-nova-accent to-nova-accent-purple" />
                      <div>
                        <div className="h-3 w-24 bg-white/10 rounded" />
                        <div className="h-2 w-16 bg-white/[0.05] rounded mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04]" />
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04]" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nova-accent/30 to-nova-accent-purple/30" />
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: "Net Worth", value: "$84,230", change: "+5.2%", positive: true },
                      { label: "This Month", value: "-$3,450", change: "On budget", positive: true },
                      { label: "Saved", value: "$1,240", change: "+$240 more", positive: true },
                      { label: "Invested", value: "$52,100", change: "+12.4%", positive: true },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white/[0.02] rounded-xl p-2.5 md:p-4 border border-white/[0.04]"
                      >
                        <div className="text-[11px] text-white/40 mb-2">
                          {stat.label}
                        </div>
                        <div className="text-xs md:text-xl font-bold text-white mb-1 truncate">{stat.value}
                          {stat.value}
                        </div>
                        <div
                          className={`text-[11px] font-medium ${
                            stat.positive
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
                        >
                          {stat.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Main chart + sidebar */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    <div className="col-span-8 bg-white/[0.02] rounded-xl p-5 border border-white/[0.04]">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-medium text-white/70">
                          Spending Overview
                        </span>
                        <div className="flex gap-3">
                          {["Week", "Month", "Year"].map((p, i) => (
                            <span
                              key={p}
                              className={`text-xs cursor-pointer ${
                                i === 1
                                  ? "text-nova-accent"
                                  : "text-white/30"
                              }`}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Bar chart mockup */}
                      <div className="flex items-end gap-3 h-32">
                        {[40, 65, 55, 80, 45, 70, 90, 60, 75, 50, 85, 65].map(
                          (h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                className="w-full rounded-t-sm bg-gradient-to-t from-nova-accent/30 to-nova-accent/60"
                                style={{ height: `${h}%` }}
                              />
                              <span className="text-[8px] text-white/20">
                                {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="col-span-4 bg-white/[0.02] rounded-xl p-5 border border-white/[0.04]">
                      <span className="text-sm font-medium text-white/70">
                        Categories
                      </span>
                      <div className="mt-4 space-y-3">
                        {[
                          { name: "Housing", pct: 35, color: "#4A6CF7" },
                          { name: "Food", pct: 20, color: "#7B61FF" },
                          { name: "Transport", pct: 15, color: "#A78BFA" },
                          { name: "Shopping", pct: 12, color: "#34D399" },
                          { name: "Other", pct: 18, color: "#6B7280" },
                        ].map((cat, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: cat.color }}
                            />
                            <span className="text-xs text-white/50 flex-1">
                              {cat.name}
                            </span>
                            <span className="text-xs font-medium text-white/70">
                              {cat.pct}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}