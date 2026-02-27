"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NovaPulseLogo } from "./Icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" }
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="NovaPulse home"
            >
              <NovaPulseLogo className="transition-transform duration-300 group-hover:scale-110" />
              <span className="text-white font-semibold text-lg tracking-tight">
                NovaPulse
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] text-white/70 font-normal hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/login"
                className="text-[15px] text-white/70 font-normal hover:text-white transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="relative inline-flex items-center px-5 py-2.5 text-[15px] font-medium text-white bg-gradient-to-r from-nova-accent to-nova-accent-purple rounded-button overflow-hidden group transition-all duration-200 hover:shadow-glow"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-nova-accent-purple to-nova-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span
                  className={cn(
                    "block h-[1.5px] bg-white rounded-full transition-all duration-300 w-6",
                    isMobileMenuOpen && "rotate-45 translate-y-[6.5px]"
                  )}
                />
                <span
                  className={cn(
                    "block h-[1.5px] bg-white rounded-full transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0 w-0" : "w-4 opacity-70"
                  )}
                />
                <span
                  className={cn(
                    "block h-[1.5px] bg-white rounded-full transition-all duration-300",
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-[6.5px] w-6"
                      : "w-5"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-[#0A0A0F]/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-[72px] bottom-0 flex flex-col items-center justify-center gap-8 transition-all duration-500",
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-white/80 hover:text-white transition-all duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-4 mt-4">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-white/70 hover:text-white transition-colors duration-200"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center px-8 py-3 text-[15px] font-medium text-white bg-gradient-to-r from-nova-accent to-nova-accent-purple rounded-button hover:shadow-glow transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}