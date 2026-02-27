import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy — NovaPulse"
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        titleGradient="Policy."
        description="Last updated: January 1, 2025"
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {[
              {
                title: "1. Information We Collect",
                content: "We collect information you provide directly, such as your name, email address, and financial account credentials (securely through our banking partners). We also collect usage data including how you interact with our platform, device information, and analytics data to improve our services."
              },
              {
                title: "2. How We Use Your Information",
                content: "Your information is used to provide and improve our services, personalize your experience, process transactions, send you important updates, and develop new features. We use your financial data solely to power our AI-driven insights, budgeting, and automation features."
              },
              {
                title: "3. Data Sharing",
                content: "We never sell your personal data. We share information only with trusted service providers who help us operate our platform (such as banking data aggregators), and only as required by law. All third-party partners are bound by strict data protection agreements."
              },
              {
                title: "4. Data Security",
                content: "We employ 256-bit AES encryption for data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II compliant, and we conduct regular third-party security audits. We maintain read-only access to your financial accounts — we can never initiate transactions on your behalf."
              },
              {
                title: "5. Data Retention",
                content: "We retain your personal data for as long as your account is active. If you choose to delete your account, all personal data will be permanently removed within 30 days, except where we are required by law to retain certain information."
              },
              {
                title: "6. Your Rights",
                content: "You have the right to access, correct, delete, or export your personal data at any time. You can also opt out of marketing communications and restrict certain data processing activities. To exercise these rights, contact us at privacy@novapulse.com."
              },
              {
                title: "7. Cookies",
                content: "We use essential cookies to operate our platform and optional analytics cookies to understand usage patterns. You can manage your cookie preferences at any time through our cookie settings panel."
              },
              {
                title: "8. Children's Privacy",
                content: "NovaPulse is not intended for users under 18 years of age. We do not knowingly collect personal information from children."
              },
              {
                title: "9. Changes to This Policy",
                content: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our platform. Continued use after changes constitutes acceptance."
              },
              {
                title: "10. Contact Us",
                content: "If you have questions about this Privacy Policy, contact our Data Protection Officer at privacy@novapulse.com or write to us at NovaPulse Inc., 548 Market St, Suite 36879, San Francisco, CA 94104."
              }
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                <p className="text-[15px] text-nova-text-muted leading-[1.8]">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}