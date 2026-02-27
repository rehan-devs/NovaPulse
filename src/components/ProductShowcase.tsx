"use client";

import React, { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import GradientOrb from "./GradientOrb";
import { cn } from "@/lib/utils";

const floatingCards = [
  { text: "+$240 saved this month", icon: "💰", position: "top-[8%] left-[2%] md:left-[5%]", delay: "0s" },
  { text: "Portfolio up 12.4%", icon: "📈", position: "top-[15%] right-[2%] md:right-[5%]", delay: "1s" },
  { text: "Budget on track", icon: "✅", position: "bottom-[20%] left-[3%] md:left-[8%]", delay: "2s" },
  { text: "New goal reached!", icon: "🎯", position: "bottom-[12%] right-[3%] md:right-[6%]", delay: "0.5s" }
];

const chartData = {
  Week: [
    { label: "Mon", value: 120 },
    { label: "Tue", value: 85 },
    { label: "Wed", value: 200 },
    { label: "Thu", value: 45 },
    { label: "Fri", value: 310 },
    { label: "Sat", value: 175 },
    { label: "Sun", value: 90 }
  ],
  Month: [
    { label: "W1", value: 820 },
    { label: "W2", value: 1240 },
    { label: "W3", value: 950 },
    { label: "W4", value: 1100 }
  ],
  Year: [
    { label: "J", value: 2800 },
    { label: "F", value: 3200 },
    { label: "M", value: 2950 },
    { label: "A", value: 3400 },
    { label: "M", value: 2700 },
    { label: "J", value: 3100 },
    { label: "J", value: 3600 },
    { label: "A", value: 2900 },
    { label: "S", value: 3300 },
    { label: "O", value: 2600 },
    { label: "N", value: 3500 },
    { label: "D", value: 3100 }
  ]
};

const stats = [
  { label: "Net Worth", value: "$84,230", fullValue: "$84,230.47", change: "+5.2%", positive: true },
  { label: "This Month", value: "-$3,450", fullValue: "-$3,450.82", change: "On budget", positive: true },
  { label: "Saved", value: "$1,240", fullValue: "$1,240.00", change: "+$240 more", positive: true },
  { label: "Invested", value: "$52,100", fullValue: "$52,100.63", change: "+12.4%", positive: true }
];

const categories = [
  { name: "Housing", pct: 35, color: "#4A6CF7" },
  { name: "Food", pct: 20, color: "#7B61FF" },
  { name: "Transport", pct: 15, color: "#A78BFA" },
  { name: "Shopping", pct: 12, color: "#34D399" },
  { name: "Other", pct: 18, color: "#6B7280" }
];

function StatPopup({
  stat,
  onClose
}: {
  stat: (typeof stats)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Popup */}
      <div
        className="relative bg-nova-card border border-white/[0.1] rounded-card-lg p-6 w-full max-w-[300px] shadow-card-hover animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.1] transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="text-xs text-white/40 mb-1">{stat.label}</div>
        <div className="text-[32px] font-bold text-white leading-tight mb-1">
          {stat.fullValue}
        </div>
        <div
          className={cn(
            "text-sm font-medium inline-flex items-center gap-1",
            stat.positive ? "text-emerald-400" : "text-red-400"
          )}
        >
          {stat.positive && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 17l5-5 5 5M7 7l5 5 5-5" />
            </svg>
          )}
          {stat.change}
        </div>

        {/* Mini sparkline */}
        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <div className="text-[10px] text-white/30 mb-2">Last 7 days</div>
          <svg className="w-full h-10" viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`popup-fill-${stat.label}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id={`popup-line-${stat.label}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A6CF7" />
                <stop offset="100%" stopColor="#7B61FF" />
              </linearGradient>
            </defs>
            <path
              d="M0 30 C15 28, 30 25, 50 22 C70 19, 85 24, 100 18 C115 12, 135 15, 155 10 C175 7, 190 8, 200 5 L200 40 L0 40Z"
              fill={`url(#popup-fill-${stat.label})`}
            />
            <path
              d="M0 30 C15 28, 30 25, 50 22 C70 19, 85 24, 100 18 C115 12, 135 15, 155 10 C175 7, 190 8, 200 5"
              stroke={`url(#popup-line-${stat.label})`}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SpendingChart({ period }: { period: "Week" | "Month" | "Year" }) {
  const data = chartData[period];
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end gap-1.5 md:gap-3 h-32 mt-2">
      {data.map((item, i) => {
        const heightPct = (item.value / maxValue) * 100;
        return (
          <div key={`${period}-${i}`} className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
            {/* Tooltip */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] text-white font-medium bg-nova-card border border-white/[0.1] rounded px-1.5 py-0.5 whitespace-nowrap pointer-events-none">
              ${item.value.toLocaleString()}
            </div>
            {/* Bar */}
            <div className="w-full relative rounded-t-sm overflow-hidden" style={{ height: `${heightPct}%` }}>
              <div
                className="absolute inset-0 bg-gradient-to-t from-nova-accent/40 to-nova-accent/70 group-hover:from-nova-accent/60 group-hover:to-nova-accent transition-all duration-200"
              />
            </div>
            {/* Label */}
            <span className="text-[8px] md:text-[10px] text-white/20 group-hover:text-white/50 transition-colors">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function ProductShowcase() {
  const [activePeriod, setActivePeriod] = useState<"Week" | "Month" | "Year">("Month");
  const [activeStatPopup, setActiveStatPopup] = useState<number | null>(null);

  return (
    <section className="relative py-section-mobile md:py-section overflow-hidden">
      <GradientOrb color="blue" size="xl" className="top-[30%] left-[50%] -translate-x-1/2" />

      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center max-w-narrow mx-auto mb-12 md:mb-16">
          <ScrollAnimator animation="fade-up">
            <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">
              The Dashboard
            </span>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={100}>
            <h2 className="text-section-mobile md:text-section font-bold text-white mb-5">
              Your complete financial <span className="gradient-text">command center.</span>
            </h2>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={200}>
            <p className="text-[17px] md:text-lg text-nova-text-muted leading-relaxed">
              See everything at a glance. Real-time insights, smart notifications,
              and automated actions — all in one beautiful interface.
            </p>
          </ScrollAnimator>
        </div>

        <ScrollAnimator animation="scale" delay={100}>
          <div className="relative max-w-[1000px] mx-auto">
            {/* Floating notification cards */}
            {floatingCards.map((card, i) => (
              <div
                key={i}
                className={cn(
                  "absolute z-20 hidden md:flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl shadow-card animate-float",
                  card.position
                )}
                style={{
                  animationDelay: card.delay,
                  animationDuration: `${4 + i * 0.5}s`
                }}
              >
                <span className="text-base">{card.icon}</span>
                <span className="text-xs font-medium text-white whitespace-nowrap">{card.text}</span>
              </div>
            ))}

            {/* Glow */}
            <div
              className="absolute -inset-x-20 -inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(74,108,247,0.12)_0%,transparent_60%)] blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Dashboard */}
            <div className="relative bg-nova-card rounded-card-lg border border-white/[0.08] overflow-hidden shadow-card-hover">
              <div className="p-4 md:p-10">
                <div className="space-y-4 md:space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-nova-accent to-nova-accent-purple" />
                      <div>
                        <div className="h-3 w-24 bg-white/10 rounded" />
                        <div className="h-2 w-16 bg-white/[0.05] rounded mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] hidden md:block" />
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] hidden md:block" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nova-accent/30 to-nova-accent-purple/30" />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white/[0.02] rounded-xl p-2.5 md:p-4 border border-white/[0.04] cursor-pointer md:cursor-default active:scale-[0.97] md:active:scale-100 transition-transform duration-150"
                        onClick={() => {
                          if (window.innerWidth < 768) {
                            setActiveStatPopup(i);
                          }
                        }}
                      >
                        <div className="text-[9px] md:text-[11px] text-white/40 mb-1 md:mb-2 truncate">
                          {stat.label}
                        </div>
                        <div className="text-[11px] md:text-xl font-bold text-white mb-0.5 md:mb-1 truncate">
                          {stat.value}
                        </div>
                        <div className="flex items-center justify-between">
                          <span
                            className={cn(
                              "text-[9px] md:text-[11px] font-medium truncate",
                              stat.positive ? "text-emerald-400" : "text-red-400"
                            )}
                          >
                            {stat.change}
                          </span>
                          {/* Mobile tap hint */}
                          <span className="text-[8px] text-white/20 md:hidden">Tap</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart + Categories */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Spending Chart */}
                    <div className="md:col-span-8 bg-white/[0.02] rounded-xl p-4 md:p-5 border border-white/[0.04]">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs md:text-sm font-medium text-white/70">
                          Spending Overview
                        </span>
                        <div className="flex gap-1 md:gap-3 bg-white/[0.03] rounded-lg p-0.5 md:p-1">
                          {(["Week", "Month", "Year"] as const).map((period) => (
                            <button
                              key={period}
                              onClick={() => setActivePeriod(period)}
                              className={cn(
                                "text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-md font-medium transition-all duration-200",
                                activePeriod === period
                                  ? "bg-nova-accent/20 text-nova-accent"
                                  : "text-white/30 hover:text-white/50"
                              )}
                            >
                              {period}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Animated Chart */}
                      <div className="relative">
                        {/* Total for period */}
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-lg md:text-2xl font-bold text-white">
                            ${activePeriod === "Week"
                              ? "1,025"
                              : activePeriod === "Month"
                              ? "4,110"
                              : "37,100"}
                          </span>
                          <span className="text-[10px] md:text-xs text-nova-text-muted">
                            total spent
                          </span>
                        </div>

                        <SpendingChart period={activePeriod} />
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="md:col-span-4 bg-white/[0.02] rounded-xl p-4 md:p-5 border border-white/[0.04]">
                      <span className="text-xs md:text-sm font-medium text-white/70">
                        Categories
                      </span>

                      {/* Donut chart */}
                      <div className="flex justify-center my-4">
                        <div className="relative w-24 h-24 md:w-28 md:h-28">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            {categories.reduce(
                              (acc, cat, i) => {
                                const circumference = 2 * Math.PI * 40;
                                const strokeLength = (cat.pct / 100) * circumference;
                                const offset = acc.offset;

                                acc.elements.push(
                                  <circle
                                    key={i}
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke={cat.color}
                                    strokeWidth="8"
                                    strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
                                    strokeDashoffset={-offset}
                                    strokeLinecap="round"
                                    className="transition-all duration-700"
                                  />
                                );

                                acc.offset += strokeLength;
                                return acc;
                              },
                              { elements: [] as React.ReactNode[], offset: 0 }
                            ).elements}
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-white">$3,450</span>
                            <span className="text-[8px] text-white/30">this month</span>
                          </div>
                        </div>
                      </div>

                      {/* Category list */}
                      <div className="space-y-2.5">
                        {categories.map((cat, i) => (
                          <div key={i} className="flex items-center gap-2 group cursor-pointer">
                            <div
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                              style={{ backgroundColor: cat.color }}
                            />
                            <span className="text-[11px] md:text-xs text-white/50 flex-1 group-hover:text-white/70 transition-colors">
                              {cat.name}
                            </span>
                            <span className="text-[11px] md:text-xs font-medium text-white/70">
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

      {/* Stat Popup (Mobile Only) */}
      {activeStatPopup !== null && (
        <StatPopup
          stat={stats[activeStatPopup]}
          onClose={() => setActiveStatPopup(null)}
        />
      )}
    </section>
  );
}