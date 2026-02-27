import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "Changelog — NovaPulse"
};

const releases = [
  {
    version: "v2.4.0",
    date: "January 12, 2025",
    tag: "New",
    items: [
      "AI-powered spending predictions now available",
      "New goal planning dashboard with milestone tracking",
      "Integration with Coinbase and Kraken",
      "Weekly financial health score email reports"
    ]
  },
  {
    version: "v2.3.0",
    date: "December 18, 2024",
    tag: "Improvement",
    items: [
      "Redesigned investment autopilot interface",
      "50% faster account sync times",
      "Added support for joint accounts",
      "Bug fixes for recurring transaction detection"
    ]
  },
  {
    version: "v2.2.0",
    date: "November 25, 2024",
    tag: "New",
    items: [
      "Bill negotiation feature (Beta)",
      "Custom budget categories",
      "Dark mode improvements across all screens",
      "Export financial data as CSV or PDF"
    ]
  },
  {
    version: "v2.1.0",
    date: "October 30, 2024",
    tag: "Improvement",
    items: [
      "Improved AI accuracy for transaction categorization",
      "New mobile app widgets for iOS and Android",
      "Real-time portfolio tracking",
      "Fixed timezone issues with scheduled savings"
    ]
  },
  {
    version: "v2.0.0",
    date: "October 1, 2024",
    tag: "Major",
    items: [
      "Complete platform redesign",
      "New AI engine with 3x better accuracy",
      "Investment Autopilot feature launched",
      "Launched Enterprise plan with family accounts",
      "API v2 with webhook support"
    ]
  }
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Changelog"
        title="What&apos;s new in"
        titleGradient="NovaPulse."
        description="All the latest updates, improvements, and new features we've shipped."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-0 w-px bg-white/[0.06]" />

            <div className="space-y-12">
              {releases.map((release, i) => (
                <ScrollAnimator key={i} animation="fade-up" delay={i * 100}>
                  <div className="relative pl-8">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-nova-bg border-2 border-nova-accent" />

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-lg font-bold text-white">{release.version}</span>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-pill ${
                        release.tag === "Major"
                          ? "bg-nova-accent/10 text-nova-accent"
                          : release.tag === "New"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-amber-400/10 text-amber-400"
                      }`}>
                        {release.tag}
                      </span>
                      <span className="text-xs text-nova-text-dim">{release.date}</span>
                    </div>

                    <ul className="space-y-2">
                      {release.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                          <span className="text-[15px] text-nova-text-muted leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}