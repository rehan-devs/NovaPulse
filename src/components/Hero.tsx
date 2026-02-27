"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PlayIcon } from "./Icons";
import GradientOrb from "./GradientOrb";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-20 overflow-hidden"
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
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0E0E16] border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="w-60 h-6 bg-white/[0.04] rounded-md flex items-center justify-center">
                      <span className="text-[11px] text-white/30">app.novapulse.com</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6 md:p-8">
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
                      <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {[
                          { label: "Total Balance", value: "$24,521.80", change: "+12.5%" },
                          { label: "Monthly Savings", value: "$1,240.00", change: "+8.3%" },
                          { label: "Investments", value: "$18,320.50", change: "+15.2%" }
                        ].map((stat, i) => (
                          <div key={i} className="bg-white/[0.03] rounded-xl p-3 md:p-4 border border-white/[0.04]">
                            <div className="text-[10px] md:text-xs text-white/40 mb-1">{stat.label}</div>
                            <div className="text-xs md:text-lg font-semibold text-white truncate">{stat.value}</div>
                            <div className="text-[10px] md:text-xs text-emerald-400 mt-0.5">{stat.change}</div>
                          </div>
                        ))}
                      </div>

                      {/* Chart */}
                      <div className="bg-white/[0.02] rounded-xl p-4 md:p-5 border border-white/[0.04]">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-xs md:text-sm font-medium text-white/70">Portfolio Growth</div>
                          <div className="flex gap-2">
                            {["1W", "1M", "3M", "1Y"].map((period, i) => (
                              <div
                                key={period}
                                className={cn(
                                  "px-2 py-0.5 rounded text-[10px] md:text-xs",
                                  i === 2 ? "bg-nova-accent/20 text-nova-accent" : "text-white/30"
                                )}
                              >
                                {period}
                              </div>
                            ))}
                          </div>
                        </div>
                        <svg className="w-full h-24 md:h-36" viewBox="0 0 400 120" fill="none" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#4A6CF7" />
                              <stop offset="100%" stopColor="#7B61FF" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0 90 C20 85, 40 80, 60 75 C80 70, 100 65, 120 55 C140 45, 160 50, 180 40 C200 30, 220 35, 240 25 C260 15, 280 20, 300 15 C320 10, 340 18, 360 8 C380 5, 400 3, 400 2 L400 120 L0 120 Z"
                            fill="url(#heroFill)"
                          />
                          <path
                            d="M0 90 C20 85, 40 80, 60 75 C80 70, 100 65, 120 55 C140 45, 160 50, 180 40 C200 30, 220 35, 240 25 C260 15, 280 20, 300 15 C320 10, 340 18, 360 8 C380 5, 400 3, 400 2"
                            stroke="url(#heroLine)"
                            strokeWidth="2"
                            fill="none"
                          />
                          <circle cx="400" cy="2" r="4" fill="#7B61FF" />
                          <circle cx="400" cy="2" r="8" fill="#7B61FF" fillOpacity="0.2" />
                        </svg>
                      </div>

                      {/* Bottom row */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="bg-white/[0.02] rounded-xl p-3 md:p-4 border border-white/[0.04]">
                          <div className="text-[10px] md:text-xs text-white/40 mb-2">Recent Transactions</div>
                          <div className="space-y-2">
                            {[
                              { name: "Netflix", amount: "-$15.99" },
                              { name: "Salary", amount: "+$4,200" },
                              { name: "Groceries", amount: "-$127.50" }
                            ].map((tx, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-md bg-white/[0.06]" />
                                  <span className="text-[10px] md:text-xs text-white/60">{tx.name}</span>
                                </div>
                                <span
                                  className={cn(
                                    "text-[10px] md:text-xs font-medium",
                                    tx.amount.startsWith("+") ? "text-emerald-400" : "text-white/50"
                                  )}
                                >
                                  {tx.amount}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white/[0.02] rounded-xl p-3 md:p-4 border border-white/[0.04]">
                          <div className="text-[10px] md:text-xs text-white/40 mb-2">Savings Goals</div>
                          <div className="space-y-3">
                            {[
                              { name: "Vacation", progress: 72 },
                              { name: "Emergency", progress: 45 },
                              { name: "New Car", progress: 28 }
                            ].map((goal, i) => (
                              <div key={i} className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] md:text-xs text-white/60">{goal.name}</span>
                                  <span className="text-[10px] md:text-xs text-nova-accent">{goal.progress}%</span>
                                </div>
                                <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-nova-accent to-nova-accent-purple rounded-full"
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
    </section>
  );
}