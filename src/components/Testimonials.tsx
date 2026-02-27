// src/components/Testimonials.tsx
"use client";

import React from "react";
import ScrollAnimator from "./ScrollAnimator";
import { StarIcon } from "./Icons";

const testimonials = [
  {
    quote:
      "NovaPulse completely changed how I think about money. I've saved more in 3 months than I did all of last year. The AI recommendations are scarily accurate.",
    author: "Sarah Chen",
    role: "Product Designer at Stripe",
    avatar: "SC",
    stars: 5,
  },
  {
    quote:
      "The investment autopilot feature is a game-changer. I was spending hours a week on portfolio management — now it's fully automated and performing better than ever.",
    author: "Marcus Rodriguez",
    role: "Software Engineer at Google",
    avatar: "MR",
    stars: 5,
  },
  {
    quote:
      "I tried every budgeting app out there. NovaPulse is the first one that actually stuck because it does the work for me. The spending insights are incredibly detailed.",
    author: "Emily Park",
    role: "Freelance Photographer",
    avatar: "EP",
    stars: 5,
  },
  {
    quote:
      "As someone who was always stressed about money, NovaPulse gave me peace of mind. I can see exactly where I stand financially at any moment. It's beautifully designed too.",
    author: "David Kim",
    role: "Marketing Director at Notion",
    avatar: "DK",
    stars: 5,
  },
  {
    quote:
      "The goal planning feature helped me save for a house down payment in 18 months. The AI kept adjusting my savings rate based on my spending — incredibly smart.",
    author: "Amara Johnson",
    role: "Startup Founder",
    avatar: "AJ",
    stars: 5,
  },
  {
    quote:
      "Finally, a fintech product that feels premium and actually delivers. The bill tracking alone has saved me over $200/month by catching subscriptions I forgot about.",
    author: "Thomas Weber",
    role: "Financial Analyst at JPMorgan",
    avatar: "TW",
    stars: 5,
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="group relative bg-nova-card/70 backdrop-blur-sm rounded-card-lg p-7 md:p-8 border border-white/[0.06] transition-all duration-300 hover:border-nova-accent/[0.2] hover:-translate-y-1 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <StarIcon
            key={i}
            className="w-4 h-4 text-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[15px] text-white/80 leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nova-accent/30 to-nova-accent-purple/30 flex items-center justify-center text-xs font-semibold text-white/80">
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">
            {testimonial.author}
          </div>
          <div className="text-xs text-nova-text-muted">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="about"
      className="relative py-section-mobile md:py-section overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-narrow mx-auto mb-16 md:mb-20">
          <ScrollAnimator animation="fade-up">
            <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">
              Testimonials
            </span>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={100}>
            <h2 className="text-section-mobile md:text-section font-bold text-white mb-5">
              Loved by thousands of{" "}
              <span className="gradient-text">smart savers.</span>
            </h2>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-up" delay={200}>
            <p className="text-[17px] md:text-lg text-nova-text-muted leading-relaxed">
              Don&apos;t just take our word for it — hear from the people who use
              NovaPulse every day to transform their finances.
            </p>
          </ScrollAnimator>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollAnimator key={i} animation="fade-up" delay={i * 100}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}