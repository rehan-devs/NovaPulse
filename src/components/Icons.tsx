"use client";

import React from "react";

export function NovaPulseLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6CF7" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logoGrad)" fillOpacity="0.15" />
      <path
        d="M6 18 L10 14 L13 17 L18 10 L22 15 L26 11"
        stroke="url(#logoGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="26" cy="11" r="2" fill="#7B61FF" />
      <path
        d="M6 22 L26 22"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4 2L14 8L4 14V2Z" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M3 8L6.5 11.5L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M8 1.5L9.85 5.25L14 5.85L11 8.75L11.7 12.85L8 10.95L4.3 12.85L5 8.75L2 5.85L6.15 5.25L8 1.5Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Feature Icons
export function BrainIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <defs>
        <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6CF7" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="rgba(74,108,247,0.1)" />
      <path
        d="M20 10C17 10 14 12 14 15C12 15 10 17 10 19.5C10 22 12 24 14 24C14 26 16 28 18.5 28C19.5 28 20 27.5 20 27.5M20 10C23 10 26 12 26 15C28 15 30 17 30 19.5C30 22 28 24 26 24C26 26 24 28 21.5 28C20.5 28 20 27.5 20 27.5M20 10V27.5"
        stroke="url(#brainGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PiggyBankIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <defs>
        <linearGradient id="piggyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6CF7" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="rgba(74,108,247,0.1)" />
      <circle cx="20" cy="20" r="8" stroke="url(#piggyGrad)" strokeWidth="1.5" fill="none" />
      <path d="M17 18V22M20 16V24M23 18V22" stroke="url(#piggyGrad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <defs>
        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6CF7" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="rgba(74,108,247,0.1)" />
      <path d="M12 28L18 20L22 24L28 14" stroke="url(#chartGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="14" r="2" fill="#7B61FF" />
    </svg>
  );
}

export function EyeIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <defs>
        <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6CF7" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="rgba(74,108,247,0.1)" />
      <path d="M12 20C12 20 15 14 20 14C25 14 28 20 28 20C28 20 25 26 20 26C15 26 12 20 12 20Z" stroke="url(#eyeGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" stroke="url(#eyeGrad)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function BellIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <defs>
        <linearGradient id="bellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6CF7" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="rgba(74,108,247,0.1)" />
      <path d="M15 17C15 14.2 17.2 12 20 12C22.8 12 25 14.2 25 17V22L27 24H13L15 22V17Z" stroke="url(#bellGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M18 27C18.5 27.8 19.2 28 20 28C20.8 28 21.5 27.8 22 27" stroke="url(#bellGrad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TargetIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <defs>
        <linearGradient id="targetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6CF7" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="rgba(74,108,247,0.1)" />
      <circle cx="20" cy="20" r="8" stroke="url(#targetGrad)" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="4" stroke="url(#targetGrad)" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="1.5" fill="#7B61FF" />
    </svg>
  );
}