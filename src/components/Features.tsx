"use client";

import React from "react";
import ScrollAnimator from "./ScrollAnimator";
import {
  BrainIcon,
  PiggyBankIcon,
  ChartIcon,
  EyeIcon,
  BellIcon,
  TargetIcon,
} from "./Icons";

const features = [
  {
    icon: <BrainIcon />,
    title: "AI Budgeting",
    description:
      "Smart algorithms analyze your spending patterns and create personalized budgets that adapt to your lifestyle automatically.",
  },
  {
    icon: <PiggyBankIcon />,
    title: "Smart Savings",
    description:
      "Automatically set aside the optimal amount based on your income, expenses, and goals — without you lifting a finger.",
  },
  {
    icon: <ChartIcon />,
    title: "Investment Autopilot",
    description:
      "AI-powered portfolio management that rebalances, diversifies, and optimizes your investments in real-time.",
  },
  {
    icon: <EyeIcon />,
    title: "Spending Insights",
    description:
      "Get deep visibility into where your money goes with beautiful analytics, trend detection, and actionable recommendations.",
  },
  {
    icon: <BellIcon />,
    title: "Bill Tracking",
    description:
      "Never miss a payment. Auto-detect recurring charges, get reminders, and identify subscriptions you might want to cancel.",
  },
  {
    icon: <TargetIcon />,
    title: "Goal Planning",
    description:
      "Set financial goals — from emergency funds to dream vacations — and let AI chart the fastest path to reach them.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-section-mobile md:py-section overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-narrow mx-auto mb-16 md:mb-20">
          <ScrollAnimator animation="fade-up">
            <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">
              Features
            </span>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={100}>
            <h2 className="text-section-mobile md:text-section font-bold text-white mb-5">
              Everything you need to take control of your{" "}
              <span className="gradient-text">finances.</span>
            </h2>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={200}>
            <p className="text-[17px] md:text-lg text-nova-text-muted leading-relaxed">
              Powerful AI-driven tools that work together seamlessly to give you
              complete financial clarity and automation.
            </p>
          </ScrollAnimator>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <ScrollAnimator key={i} animation="fade-up" delay={i * 100}>
              <div className="group relative bg-nova-card/70 backdrop-blur-sm rounded-card-lg p-8 md:p-9 border border-white/[0.06] transition-all duration-300 hover:border-nova-accent/[0.25] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(74,108,247,0.08)] h-full">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-card-lg bg-gradient-to-br from-nova-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="text-card-title font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-nova-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}