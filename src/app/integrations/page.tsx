import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "Integrations — NovaPulse"
};

const integrations = [
  { name: "Chase", category: "Banking", status: "Available" },
  { name: "Bank of America", category: "Banking", status: "Available" },
  { name: "Wells Fargo", category: "Banking", status: "Available" },
  { name: "Citi", category: "Banking", status: "Available" },
  { name: "Capital One", category: "Banking", status: "Available" },
  { name: "Fidelity", category: "Investments", status: "Available" },
  { name: "Vanguard", category: "Investments", status: "Available" },
  { name: "Charles Schwab", category: "Investments", status: "Available" },
  { name: "Robinhood", category: "Investments", status: "Available" },
  { name: "Coinbase", category: "Crypto", status: "Available" },
  { name: "Venmo", category: "Payments", status: "Available" },
  { name: "PayPal", category: "Payments", status: "Available" },
  { name: "Stripe", category: "Business", status: "Coming Soon" },
  { name: "QuickBooks", category: "Business", status: "Coming Soon" },
  { name: "Plaid", category: "Infrastructure", status: "Available" },
  { name: "Mint (Migration)", category: "Migration", status: "Available" }
];

const categories = ["All", "Banking", "Investments", "Crypto", "Payments", "Business"];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Integrations"
        title="Connect everything in"
        titleGradient="one place."
        description="NovaPulse integrates with over 12,000 financial institutions. Connect your banks, brokerages, crypto wallets, and more."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200 ${
                  i === 0
                    ? "bg-nova-accent/10 text-nova-accent border border-nova-accent/20"
                    : "text-nova-text-muted hover:text-white bg-white/[0.03] border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrations.map((integration, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 50}>
                <div className="bg-nova-card/70 rounded-card p-5 border border-white/[0.06] hover:border-nova-accent/20 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nova-accent/15 to-nova-accent-purple/15 flex items-center justify-center text-lg font-bold text-white/30">
                      {integration.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white">{integration.name}</h3>
                      <p className="text-xs text-nova-text-dim">{integration.category}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-pill ${
                    integration.status === "Available"
                      ? "text-emerald-400 bg-emerald-400/10"
                      : "text-amber-400 bg-amber-400/10"
                  }`}>
                    {integration.status}
                  </span>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}