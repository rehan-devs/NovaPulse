"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NovaPulseLogo, CheckIcon } from "@/components/Icons";
import GradientOrb from "@/components/GradientOrb";
import { cn } from "@/lib/utils";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const benefits = [
    "AI-powered budgeting & savings",
    "Investment autopilot included",
    "No credit card required",
    "Free 14-day Pro trial"
  ];

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <GradientOrb color="blue" size="xl" className="-top-[300px] -left-[200px]" />
      <GradientOrb color="purple" size="lg" className="-bottom-[200px] -right-[200px]" />

      {/* Left Panel - Benefits */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative z-10 p-12">
        <div className="max-w-[440px]">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-12">
            <NovaPulseLogo />
            <span className="text-white font-semibold text-lg tracking-tight">
              NovaPulse
            </span>
          </Link>

          <h2 className="text-[36px] font-bold text-white leading-tight mb-4">
            Start your journey to{" "}
            <span className="gradient-text">financial freedom.</span>
          </h2>
          <p className="text-[16px] text-nova-text-muted leading-relaxed mb-10">
            Join over 50,000 people who use NovaPulse to automate their savings
            and grow their wealth effortlessly.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-nova-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3.5 h-3.5 text-nova-accent" />
                </div>
                <span className="text-[15px] text-white/70">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 bg-white/[0.03] border border-white/[0.06] rounded-card">
            <p className="text-[14px] text-white/70 leading-relaxed mb-4 italic">
              &ldquo;NovaPulse helped me save $5,000 in my first 6 months. The
              AI literally does all the work for you.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nova-accent/30 to-nova-accent-purple/30 flex items-center justify-center text-xs font-semibold text-white/80">
                SC
              </div>
              <div>
                <div className="text-sm font-medium text-white">Sarah Chen</div>
                <div className="text-xs text-nova-text-muted">
                  Product Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-12">
        <div className="w-full max-w-[420px]">
          <div className="lg:hidden text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <NovaPulseLogo />
              <span className="text-white font-semibold text-lg tracking-tight">
                NovaPulse
              </span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-[28px] md:text-[32px] font-bold text-white mb-2">
              Create your account
            </h1>
            <p className="text-[15px] text-nova-text-muted">
              Get started with NovaPulse for free
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm font-medium text-white hover:bg-white/[0.08] transition-all duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm font-medium text-white hover:bg-white/[0.08] transition-all duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-xs text-nova-text-muted uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-nova-accent/50 focus:ring-1 focus:ring-nova-accent/30 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-white/70 mb-2">
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-nova-accent/50 focus:ring-1 focus:ring-nova-accent/30 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-white/70 mb-2">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 characters"
                required
                minLength={8}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-nova-accent/50 focus:ring-1 focus:ring-nova-accent/30 transition-all duration-200"
              />
            </div>
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 rounded bg-white/[0.04] border border-white/[0.08] accent-nova-accent"
              />
              <label htmlFor="terms" className="text-xs text-nova-text-muted leading-relaxed">
                I agree to the{" "}
                <Link href="/terms" className="text-nova-accent hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-nova-accent hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full py-3 px-6 rounded-button text-[15px] font-semibold transition-all duration-300",
                "bg-gradient-to-r from-nova-accent to-nova-accent-purple text-white",
                "hover:shadow-glow hover:scale-[1.01]",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-nova-text-muted mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-nova-accent hover:text-nova-accent-purple transition-colors duration-200 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}