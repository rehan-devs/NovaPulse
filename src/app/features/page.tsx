import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";
import GradientOrb from "@/components/GradientOrb";

export const metadata = {
  title: "Features — NovaPulse"
};

const detailedFeatures = [
  {
    title: "AI-Powered Budgeting",
    description: "Our machine learning algorithms analyze your spending patterns across all connected accounts, automatically categorize transactions, and create dynamic budgets that adapt to your lifestyle. No manual input required.",
    highlights: ["Auto-categorization with 98% accuracy", "Dynamic budget adjustments", "Spending anomaly detection", "Weekly and monthly reports"]
  },
  {
    title: "Smart Savings Engine",
    description: "NovaPulse intelligently identifies safe-to-save amounts based on your upcoming bills, income patterns, and spending habits. It automatically moves money to your savings at optimal times.",
    highlights: ["Round-up savings on every purchase", "Income-based auto-save rules", "Safe-to-save analysis", "Emergency fund builder"]
  },
  {
    title: "Investment Autopilot",
    description: "Our robo-advisor technology manages your portfolio with institutional-grade algorithms. It automatically rebalances, tax-loss harvests, and diversifies your investments across asset classes.",
    highlights: ["Automated rebalancing", "Tax-loss harvesting", "Diversified portfolios", "Risk-adjusted returns"]
  }
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Features"
        title="Powerful tools for your"
        titleGradient="financial life."
        description="Everything you need to manage, save, and grow your money — powered by cutting-edge AI technology."
      />

      {/* Features Grid */}
      <Features />

      {/* Detailed Feature Sections */}
      <section className="relative py-section-mobile md:py-section overflow-hidden">
        <GradientOrb color="purple" size="lg" className="top-[30%] -right-[300px]" />
        <div className="max-w-content mx-auto px-6 lg:px-8 space-y-24 md:space-y-32">
          {detailedFeatures.map((feature, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}>
              <ScrollAnimator animation={i % 2 === 1 ? "slide-right" : "slide-left"} className="flex-1 w-full">
                <div className="max-w-lg">
                  <h3 className="text-2xl md:text-[32px] font-bold text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-nova-text-muted leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.highlights.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-nova-accent/10 flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-nova-accent">
                            <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[15px] text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimator>
              <ScrollAnimator animation={i % 2 === 1 ? "slide-left" : "slide-right"} className="flex-1 w-full">
                <div className="aspect-[4/3] bg-nova-card/50 rounded-card-lg border border-white/[0.06] flex items-center justify-center">
                  <div className="text-[72px] opacity-10">
                    {["🧠", "💰", "📈"][i]}
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}