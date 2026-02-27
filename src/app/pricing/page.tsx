import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import PageHeader from "@/components/PageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "Pricing — NovaPulse"
};

const faqs = [
  { q: "Can I try NovaPulse for free?", a: "Yes! Our Free plan is available forever with core features. Pro users also get a 14-day free trial with no credit card required." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex), debit cards, and PayPal. Enterprise customers can also pay via invoice." },
  { q: "Can I switch plans anytime?", a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes take effect immediately." },
  { q: "Is my financial data secure?", a: "Your security is our top priority. We use 256-bit AES encryption, are SOC 2 Type II compliant, and never sell your data. We're also read-only — we can never move your money." },
  { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund." },
  { q: "What banks and institutions do you support?", a: "We support over 12,000 financial institutions across the US, Canada, and UK, including all major banks, credit unions, brokerages, and crypto exchanges." }
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>

      {/* FAQ */}
      <section className="relative py-section-mobile md:py-section">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <ScrollAnimator animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">
                FAQ
              </span>
              <h2 className="text-section-mobile md:text-section font-bold text-white">
                Frequently asked <span className="gradient-text">questions.</span>
              </h2>
            </div>
          </ScrollAnimator>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-nova-card/70 rounded-card p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200">
                  <h3 className="text-[16px] font-semibold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[14px] text-nova-text-muted leading-relaxed">
                    {faq.a}
                  </p>
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