"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PlayIcon } from "./Icons";
import GradientOrb from "./GradientOrb";
import { cn } from "@/lib/utils";

const heroStats = [
  { label: "Total Balance", value: "$24,521.80", fullValue: "$24,521.80", change: "+12.5%", positive: true },
  { label: "Monthly Savings", value: "$1,240.00", fullValue: "$1,240.00", change: "+8.3%", positive: true },
  { label: "Investments", value: "$18,320.50", fullValue: "$18,320.50", change: "+15.2%", positive: true }
];

const portfolioData = {
  "1W": {
    points: "M0 80 C20 78, 40 75, 60 70 C80 72, 100 68, 120 65 C140 60, 160 62, 180 55 C200 50, 220 52, 240 48 C260 45, 280 42, 300 40 C320 38, 340 35, 360 32 C380 30, 400 28, 400 25",
    fill: "M0 80 C20 78, 40 75, 60 70 C80 72, 100 68, 120 65 C140 60, 160 62, 180 55 C200 50, 220 52, 240 48 C260 45, 280 42, 300 40 C320 38, 340 35, 360 32 C380 30, 400 28, 400 25 L400 120 L0 120 Z",
    endX: 400,
    endY: 25,
    change: "+2.4%",
    value: "$18,758"
  },
  "1M": {
    points: "M0 85 C20 80, 40 78, 60 72 C80 68, 100 70, 120 62 C140 55, 160 58, 180 48 C200 42, 220 45, 240 38 C260 30, 280 35, 300 28 C320 22, 340 25, 360 18 C380 15, 400 12, 400 8",
    fill: "M0 85 C20 80, 40 78, 60 72 C80 68, 100 70, 120 62 C140 55, 160 58, 180 48 C200 42, 220 45, 240 38 C260 30, 280 35, 300 28 C320 22, 340 25, 360 18 C380 15, 400 12, 400 8 L400 120 L0 120 Z",
    endX: 400,
    endY: 8,
    change: "+8.7%",
    value: "$19,842"
  },
  "3M": {
    points: "M0 90 C20 85, 40 80, 60 75 C80 70, 100 65, 120 55 C140 45, 160 50, 180 40 C200 30, 220 35, 240 25 C260 15, 280 20, 300 15 C320 10, 340 18, 360 8 C380 5, 400 3, 400 2",
    fill: "M0 90 C20 85, 40 80, 60 75 C80 70, 100 65, 120 55 C140 45, 160 50, 180 40 C200 30, 220 35, 240 25 C260 15, 280 20, 300 15 C320 10, 340 18, 360 8 C380 5, 400 3, 400 2 L400 120 L0 120 Z",
    endX: 400,
    endY: 2,
    change: "+15.2%",
    value: "$21,156"
  },
  "1Y": {
    points: "M0 100 C20 95, 40 88, 60 82 C80 78, 100 72, 120 65 C140 58, 160 52, 180 48 C200 42, 220 38, 240 32 C260 28, 280 22, 300 18 C320 14, 340 10, 360 8 C380 5, 400 3, 400 2",
    fill: "M0 100 C20 95, 40 88, 60 82 C80 78, 100 72, 120 65 C140 58, 160 52, 180 48 C200 42, 220 38, 240 32 C260 28, 280 22, 300 18 C320 14, 340 10, 360 8 C380 5, 400 3, 400 2 L400 120 L0 120 Z",
    endX: 400,
    endY: 2,
    change: "+42.8%",
    value: "$24,521"
  }
};

const transactions = [
  { 
    name: "Netflix", 
    amount: "-$15.99", 
    positive: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-500">
        <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/>
      </svg>
    )
  },
  { 
    name: "Salary", 
    amount: "+$4,200", 
    positive: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-emerald-400">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M12 9v6M9 12h6"/>
      </svg>
    )
  },
  { 
    name: "Groceries", 
    amount: "-$127.50", 
    positive: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-orange-400">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    )
  }
];

type PeriodKey = keyof typeof portfolioData;

function WindowDots() {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const dots = [
    { color: "bg-[#FF5F57]", hoverColor: "bg-[#FF5F57]", icon: "×", label: "Close" },
    { color: "bg-[#FEBC2E]", hoverColor: "bg-[#FEBC2E]", icon: "−", label: "Minimize" },
    { color: "bg-[#28C840]", hoverColor: "bg-[#28C840]", icon: "⤢", label: "Fullscreen" }
  ];

  return (
    <div className="flex gap-1.5 group/dots">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="relative"
          onMouseEnter={() => setHoveredDot(i)}
          onMouseLeave={() => setHoveredDot(null)}
        >
          {/* Tooltip */}
          <div
            className={cn(
              "absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a1a2e] border border-white/10 rounded text-[10px] text-white/70 whitespace-nowrap transition-all duration-200 pointer-events-none",
              hoveredDot === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            )}
          >
            {dot.label}
          </div>
          
          {/* Dot */}
          <div
            className={cn(
              "w-3 h-3 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200",
              dot.color,
              hoveredDot === i && "scale-110 shadow-lg"
            )}
            style={{
              boxShadow: hoveredDot === i ? `0 0 8px ${i === 0 ? '#FF5F57' : i === 1 ? '#FEBC2E' : '#28C840'}40` : 'none'
            }}
          >
            {/* Icon on hover */}
            <span
              className={cn(
                "text-[8px] font-bold text-black/60 transition-all duration-200 leading-none",
                hoveredDot === i ? "opacity-100 scale-100" : "opacity-0 scale-50"
              )}
            >
              {dot.icon}
            </span>
          </div>

          {/* Ripple effect on hover */}
          <div
            className={cn(
              "absolute inset-0 rounded-full transition-all duration-300 pointer-events-none",
              hoveredDot === i ? "scale-150 opacity-0" : "scale-100 opacity-0"
            )}
            style={{
              backgroundColor: i === 0 ? '#FF5F57' : i === 1 ? '#FEBC2E' : '#28C840',
              animation: hoveredDot === i ? 'ping 0.5s ease-out' : 'none'
            }}
          />
        </div>
      ))}
    </div>
  );
}

function StatPopup({
  stat,
  onClose
}: {
  stat: (typeof heroStats)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:hidden"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-nova-card border border-white/[0.1] rounded-card-lg p-6 w-full max-w-[300px] shadow-card-hover animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
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
          {stat.positive ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          )}
          {stat.change}
        </div>

        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <div className="text-[10px] text-white/30 mb-2">Last 7 days</div>
          <svg className="w-full h-12" viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`popup-fill-${stat.label.replace(/\s/g, "")}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id={`popup-line-${stat.label.replace(/\s/g, "")}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A6CF7" />
                <stop offset="100%" stopColor="#7B61FF" />
              </linearGradient>
            </defs>
            <path
              d="M0 30 C15 28, 30 25, 50 22 C70 19, 85 24, 100 18 C115 12, 135 15, 155 10 C175 7, 190 8, 200 5 L200 40 L0 40Z"
              fill={`url(#popup-fill-${stat.label.replace(/\s/g, "")})`}
            />
            <path
              d="M0 30 C15 28, 30 25, 50 22 C70 19, 85 24, 100 18 C115 12, 135 15, 155 10 C175 7, 190 8, 200 5"
              stroke={`url(#popup-line-${stat.label.replace(/\s/g, "")})`}
              strokeWidth="2"
              fill="none"
            />
            <circle cx="200" cy="5" r="3" fill="#7B61FF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePeriod, setActivePeriod] = useState<PeriodKey>("3M");
  const [activeStatPopup, setActiveStatPopup] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const currentData = portfolioData[activePeriod];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-[140px] pb-20 overflow-hidden"
      role="banner"
    >
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
      <GradientOrb color="blue" size="xl" className="-top-[200px] -left-[200px]" />
      <GradientOrb color="purple" size="lg" className="-top-[100px] -right-[200px]" />
      <GradientOrb color="mixed" size="md" className="top-[40%] left-[50%] -translate-x-1/2" />

      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1
            className={cn(
              "text-hero-mobile md:text-[3.5rem] lg:text-hero font-bold text-white max-w-[800px] leading-[1.08] transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Your Money on <span className="gradient-text">Autopilot.</span>
          </h1>

          {/* Subheading */}
          <p
            className={cn(
              "mt-6 text-[17px] md:text-lg text-nova-text-muted max-w-hero-text leading-relaxed transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            NovaPulse uses AI to automate your savings, optimize your
            investments, and keep your budget on track — effortlessly.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center gap-4 mt-10 transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              href="/signup"
              className="group relative inline-flex items-center px-7 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-nova-accent to-nova-accent-purple rounded-button overflow-hidden transition-all duration-300 hover:shadow-glow-lg hover:scale-[1.02]"
            >
              <span className="relative z-10">Start for Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-nova-accent-purple to-nova-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-medium text-white border border-white/[0.12] rounded-button transition-all duration-300 hover:border-nova-accent/40 hover:bg-white/[0.03] hover:scale-[1.02]"
            >
              <PlayIcon className="w-3.5 h-3.5 text-nova-accent" />
              <span>Watch Demo</span>
            </Link>
          </div>

          {/* Hero Dashboard Mockup */}
          <div
            className={cn(
              "relative mt-16 md:mt-20 w-full max-w-[960px] transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <div
              className="absolute -inset-x-20 -inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(74,108,247,0.15)_0%,transparent_70%)] blur-2xl"
              aria-hidden="true"
            />

            <div className="relative animate-float">
              <div className="relative bg-nova-card rounded-card-lg border border-white/[0.08] overflow-hidden shadow-card-hover">
                {/* Browser chrome with animated dots */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0E0E16] border-b border-white/[0.06]">
                  <WindowDots />
                  <div className="flex-1 flex justify-center">
                    <div className="w-60 h-6 bg-white/[0.04] rounded-md flex items-center justify-center">
                      <span className="text-[11px] text-white/30">app.novapulse.com</span>
                    </div>
                  </div>
                  {/* Empty space to balance the dots */}
                  <div className="w-[52px]" />
                </div>

                {/* Dashboard content */}
                <div className="p-4 md:p-8">
                  <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {/* Left sidebar */}
                    <div className="col-span-3 hidden md:flex flex-col gap-3">
                      <div className="h-8 w-28 bg-gradient-to-r from-nova-accent/20 to-nova-accent-purple/20 rounded-md" />
                      <div className="space-y-2 mt-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className={cn(
                              "h-8 rounded-md flex items-center gap-2 px-3",
                              i === 1
                                ? "bg-nova-accent/10 border border-nova-accent/20"
                                : "bg-white/[0.02]"
                            )}
                          >
                            <div className="w-4 h-4 rounded bg-white/10" />
                            <div
                              className={cn(
                                "h-2 rounded-full",
                                i === 1 ? "w-16 bg-nova-accent/30" : "w-12 bg-white/[0.06]"
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="col-span-12 md:col-span-9 space-y-4 md:space-y-6">
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-2 md:gap-4">
                        {heroStats.map((stat, i) => (
                          <div
                            key={i}
                            className="bg-white/[0.03] rounded-xl p-2.5 md:p-4 border border-white/[0.04] cursor-pointer md:cursor-default active:scale-[0.97] md:active:scale-100 transition-transform duration-150"
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setActiveStatPopup(i);
                              }
                            }}
                          >
                            <div className="text-[9px] md:text-xs text-white/40 mb-0.5 md:mb-1 truncate">
                              {stat.label}
                            </div>
                            <div className="text-[11px] md:text-lg font-semibold text-white truncate">
                              {stat.value}
                            </div>
                            <div className="flex items-center justify-between mt-0.5">
                              <span className="text-[9px] md:text-xs text-emerald-400 truncate">
                                {stat.change}
                              </span>
                              <span className="text-[7px] text-white/20 md:hidden">Tap</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Chart */}
                      <div className="bg-white/[0.02] rounded-xl p-3 md:p-5 border border-white/[0.04]">
                        <div className="flex items-center justify-between mb-2 md:mb-4">
                          <div>
                            <div className="text-xs md:text-sm font-medium text-white/70">
                              Portfolio Growth
                            </div>
                            <div className="flex items-baseline gap-2 mt-1">
                              <span className="text-base md:text-xl font-bold text-white">
                                {currentData.value}
                              </span>
                              <span className="text-[10px] md:text-xs text-emerald-400 font-medium">
                                {currentData.change}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-1 bg-white/[0.03] rounded-lg p-0.5 md:p-1">
                            {(Object.keys(portfolioData) as PeriodKey[]).map((period) => (
                              <button
                                key={period}
                                onClick={() => setActivePeriod(period)}
                                className={cn(
                                  "text-[9px] md:text-xs px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-md font-medium transition-all duration-200",
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
                        <svg
                          className="w-full h-20 md:h-36"
                          viewBox="0 0 400 120"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="heroChartLine" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#4A6CF7" />
                              <stop offset="100%" stopColor="#7B61FF" />
                            </linearGradient>
                          </defs>
                          <path
                            d={currentData.fill}
                            fill="url(#heroChartFill)"
                            className="transition-all duration-700 ease-out"
                          />
                          <path
                            d={currentData.points}
                            stroke="url(#heroChartLine)"
                            strokeWidth="2"
                            fill="none"
                            className="transition-all duration-700 ease-out"
                          />
                          <circle
                            cx={currentData.endX}
                            cy={currentData.endY}
                            r="4"
                            fill="#7B61FF"
                            className="transition-all duration-700 ease-out"
                          />
                          <circle
                            cx={currentData.endX}
                            cy={currentData.endY}
                            r="8"
                            fill="#7B61FF"
                            fillOpacity="0.2"
                            className="transition-all duration-700 ease-out"
                          />
                        </svg>
                      </div>

                      {/* Bottom row */}
                      <div className="grid grid-cols-2 gap-2 md:gap-4">
                        {/* Recent Transactions */}
                        <div className="bg-white/[0.02] rounded-xl p-3 md:p-4 border border-white/[0.04]">
                          <div className="text-[9px] md:text-xs text-white/40 mb-2 md:mb-3">
                            Recent Transactions
                          </div>
                          <div className="space-y-2 md:space-y-3">
                            {transactions.map((tx, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-2 md:gap-3">
                                  <div className="w-7 h-7 md:w-9 md:h-9 rounded-lg bg-white/[0.06] p-1.5 md:p-2 flex items-center justify-center">
                                    {tx.icon}
                                  </div>
                                  <span className="text-[10px] md:text-sm text-white/70 font-medium">
                                    {tx.name}
                                  </span>
                                </div>
                                <span
                                  className={cn(
                                    "text-[10px] md:text-sm font-semibold",
                                    tx.positive ? "text-emerald-400" : "text-white/60"
                                  )}
                                >
                                  {tx.amount}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Savings Goals */}
                        <div className="bg-white/[0.02] rounded-xl p-3 md:p-4 border border-white/[0.04]">
                          <div className="text-[9px] md:text-xs text-white/40 mb-2 md:mb-3">
                            Savings Goals
                          </div>
                          <div className="space-y-2.5 md:space-y-3">
                            {[
                              { name: "Vacation", progress: 72, amount: "$2,160" },
                              { name: "Emergency", progress: 45, amount: "$4,500" },
                              { name: "New Car", progress: 28, amount: "$5,600" }
                            ].map((goal, i) => (
                              <div key={i} className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-[9px] md:text-sm text-white/70 font-medium">{goal.name}</span>
                                  <span className="text-[9px] md:text-xs text-nova-accent font-semibold">{goal.progress}%</span>
                                </div>
                                <div className="h-1.5 md:h-2 bg-white/[0.06] rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-nova-accent to-nova-accent-purple rounded-full transition-all duration-700"
                                    style={{ width: `${goal.progress}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stat Popup (Mobile Only) */}
      {activeStatPopup !== null && (
        <StatPopup
          stat={heroStats[activeStatPopup]}
          onClose={() => setActiveStatPopup(null)}
        />
      )}
    </section>
  );
}