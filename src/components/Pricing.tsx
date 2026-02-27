// src/components/Pricing.tsx
"use client";

import React, { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { CheckIcon } from "./Icons";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started with basic money management.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Connect up to 2 bank accounts",
      "Basic spending insights",
      "Monthly budget tracking",
      "Bill reminders",
      "Mobile app access",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For individuals who want full AI-powered financial automation.",
    monthlyPrice: 12,
    yearlyPrice: 9,
    features: [
      "Unlimited connected accounts",
      "AI-powered budgeting",
      "Smart savings automation",
      "Investment autopilot",
      "Advanced spending analytics",
      "Goal planning & tracking",
      "Priority support",
      "Custom alerts & notifications",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For families and financial advisors who need premium features.",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      "Everything in Pro",
      "Family accounts (up to 5)",
      "Tax optimization insights",
      "Dedicated financial advisor",
      "Custom API access",
      "White-glove onboarding",
      "SLA & uptime guarantee",
      "Advanced security features",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="relative py-section-mobile md:py-section overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-narrow mx-auto mb-12 md:mb-16">
          <ScrollAnimator animation="fade-up">
            <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">
              Pricing
            </span>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={100}>
            <h2 className="text-section-mobile md:text-section font-bold text-white mb-5">
              Simple, transparent{" "}
              <span className="gradient-text">pricing.</span>
            </h2>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={200}>
            <p className="text-[17px] md:text-lg text-nova-text-muted leading-relaxed">
              Start free. Upgrade when you&apos;re ready to unlock the full power of
              AI-driven finance.
            </p>
          </ScrollAnimator>

          {/* Toggle */}
          <ScrollAnimator animation="fade-up" delay={300}>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  !isYearly ? "text-white" : "text-nova-text-muted"
                )}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={cn(
                  "toggle-switch",
                  isYearly && "active"
                )}
                aria-label="Toggle yearly pricing"
                role="switch"
                aria-checked={isYearly}
              />
              <span
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isYearly ? "text-white" : "text-nova-text-muted"
                )}
              >
                Yearly
              </span>
              {isYearly && (
                <span className="text-xs font-medium text-nova-accent bg-nova-accent/10 px-2.5 py-1 rounded-pill">
                  Save 25%
                </span>
              )}
            </div>
          </ScrollAnimator>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1050px] mx-auto">
          {plans.map((plan, i) => (
            <ScrollAnimator key={plan.name} animation="fade-up" delay={i * 100}>
              <div
                className={cn(
                  "relative rounded-card-lg p-7 md:p-8 border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col",
                  plan.highlighted
                    ? "bg-nova-card border-nova-accent/30 shadow-[0_0_50px_rgba(74,108,247,0.1)]"
                    : "bg-nova-card/60 border-white/[0.06] hover:border-white/[0.12]"
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-nova-accent to-nova-accent-purple rounded-pill">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Gradient border for highlighted */}
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-card-lg gradient-border pointer-events-none" />
                )}

                {/* Plan info */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-1.5">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-nova-text-muted leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-bold text-white leading-none">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-sm text-nova-text-muted">/month</span>
                    )}
                  </div>
                  {plan.monthlyPrice > 0 && isYearly && (
                    <p className="text-xs text-nova-text-muted mt-1">
                      Billed annually
                    </p>
                  )}
                  {plan.monthlyPrice === 0 && (
                    <p className="text-xs text-nova-text-muted mt-1">
                      Free forever
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckIcon
                          className={cn(
                            "w-4 h-4",
                            plan.highlighted
                              ? "text-nova-accent"
                              : "text-nova-text-muted"
                          )}
                        />
                      </div>
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={cn(
                    "block text-center py-3 px-6 rounded-button text-[15px] font-semibold transition-all duration-300",
                    plan.highlighted
                      ? "bg-gradient-to-r from-nova-accent to-nova-accent-purple text-white hover:shadow-glow hover:scale-[1.02]"
                      : "border border-white/[0.12] text-white hover:border-nova-accent/40 hover:bg-white/[0.03]"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}