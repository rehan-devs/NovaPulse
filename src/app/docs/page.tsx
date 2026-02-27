import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "API Documentation — NovaPulse"
};

const sections = [
  {
    title: "Getting Started",
    items: ["Authentication", "Rate Limits", "Error Handling", "Webhooks"]
  },
  {
    title: "Accounts",
    items: ["List Accounts", "Get Account", "Sync Account", "Remove Account"]
  },
  {
    title: "Transactions",
    items: ["List Transactions", "Get Transaction", "Categorize", "Search"]
  },
  {
    title: "Budgets",
    items: ["Create Budget", "Update Budget", "Get Insights", "Categories"]
  },
  {
    title: "Investments",
    items: ["Portfolio Overview", "Holdings", "Performance", "Rebalance"]
  },
  {
    title: "Goals",
    items: ["Create Goal", "Track Progress", "Projections", "Milestones"]
  }
];

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="API Documentation"
        title="Build with the NovaPulse"
        titleGradient="API."
        description="Everything you need to integrate NovaPulse into your applications. RESTful API with comprehensive documentation."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          {/* Quick start */}
          <ScrollAnimator animation="fade-up">
            <div className="bg-nova-card/70 rounded-card-lg border border-white/[0.06] p-6 md:p-8 mb-12">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
              <div className="bg-[#0A0A0F] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <div className="text-nova-text-dim mb-1"># Install the SDK</div>
                <div className="text-emerald-400 mb-3">npm install @novapulse/sdk</div>
                <div className="text-nova-text-dim mb-1"># Initialize</div>
                <div className="text-white">
                  <span className="text-nova-accent">import</span>
                  {" { NovaPulse } "}
                  <span className="text-nova-accent">from</span>
                  {" "}
                  <span className="text-amber-400">&apos;@novapulse/sdk&apos;</span>
                </div>
                <div className="text-white mt-1">
                  <span className="text-nova-accent">const</span>
                  {" client = "}
                  <span className="text-nova-accent">new</span>
                  {" NovaPulse("}
                  <span className="text-amber-400">&apos;your-api-key&apos;</span>
                  {")"}
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* API Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-nova-card/70 rounded-card-lg border border-white/[0.06] p-6 hover:border-nova-accent/20 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j}>
                        <Link
                          href="/docs"
                          className="flex items-center gap-2 text-sm text-nova-text-muted hover:text-nova-accent transition-colors duration-200 py-1"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-nova-text-dim">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}