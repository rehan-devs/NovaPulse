import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaPulse — Your Money on Autopilot",
  description:
    "NovaPulse uses AI to automate your savings, optimize your investments, and keep your budget on track — effortlessly.",
  keywords: [
    "personal finance",
    "AI budgeting",
    "automated savings",
    "investment autopilot",
    "fintech",
    "money management",
  ],
  authors: [{ name: "NovaPulse" }],
  openGraph: {
    title: "NovaPulse — Your Money on Autopilot",
    description:
      "AI-powered personal finance that automates your savings, investments, and budgeting.",
    type: "website",
    url: "https://novapulse.com",
    siteName: "NovaPulse",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaPulse — Your Money on Autopilot",
    description:
      "AI-powered personal finance that automates your savings, investments, and budgeting.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}