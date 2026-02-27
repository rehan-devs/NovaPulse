import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "Security — NovaPulse"
};

const securityFeatures = [
  { title: "256-bit AES Encryption", description: "All data is encrypted at rest using AES-256, the same standard used by banks and government agencies.", icon: "🔐" },
  { title: "TLS 1.3", description: "All data in transit is protected with the latest TLS 1.3 encryption protocol.", icon: "🔒" },
  { title: "SOC 2 Type II", description: "We are SOC 2 Type II certified, demonstrating our commitment to security, availability, and confidentiality.", icon: "✅" },
  { title: "Read-Only Access", description: "We can view your financial data but can never move money or initiate transactions on your behalf.", icon: "👁️" },
  { title: "Multi-Factor Authentication", description: "Protect your account with MFA using authenticator apps, SMS, or hardware security keys.", icon: "🔑" },
  { title: "Regular Audits", description: "Independent third-party security firms conduct penetration testing and security audits quarterly.", icon: "🔍" }
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Security"
        title="Your security is our"
        titleGradient="top priority."
        description="We use bank-level security measures to protect your data and financial information at every layer."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-nova-card/70 rounded-card-lg p-7 border border-white/[0.06] h-full">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-nova-text-muted leading-relaxed">{feature.description}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          <ScrollAnimator animation="fade-up">
            <div className="mt-16 bg-nova-card/70 rounded-card-lg border border-white/[0.06] p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Report a Vulnerability</h3>
              <p className="text-sm text-nova-text-muted mb-6 max-w-md mx-auto">
                If you discover a security vulnerability, please report it responsibly. We offer a bug bounty program for qualified reports.
              </p>
              <a
                href="mailto:security@novapulse.com"
                className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white border border-white/[0.12] rounded-button hover:border-nova-accent/40 hover:bg-white/[0.03] transition-all duration-200"
              >
                security@novapulse.com
              </a>
            </div>
          </ScrollAnimator>
        </div>
      </section>
      <Footer />
    </>
  );
}