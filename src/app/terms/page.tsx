import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Terms of Service — NovaPulse"
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Legal"
        title="Terms of"
        titleGradient="Service."
        description="Last updated: January 1, 2025"
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing or using NovaPulse, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users of the platform, including free and paid subscribers."
              },
              {
                title: "2. Description of Service",
                content: "NovaPulse provides AI-powered personal finance management tools including budgeting, savings automation, investment management, and financial analytics. Our services are for informational and educational purposes and should not be considered financial advice from a licensed professional."
              },
              {
                title: "3. Account Registration",
                content: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use NovaPulse."
              },
              {
                title: "4. Subscription & Payments",
                content: "Free accounts have limited features. Paid subscriptions (Pro and Enterprise) are billed monthly or annually. All payments are processed securely through our payment provider. You may cancel your subscription at any time, and cancellation takes effect at the end of the current billing period."
              },
              {
                title: "5. Not Financial Advice",
                content: "NovaPulse provides automated financial tools and AI-generated insights. These are not substitutes for professional financial advice. We are not a registered investment advisor, broker-dealer, or financial planner. Always consult with qualified professionals before making significant financial decisions."
              },
              {
                title: "6. Intellectual Property",
                content: "All content, features, and functionality of NovaPulse — including text, graphics, logos, icons, software, and algorithms — are owned by NovaPulse Inc. and protected by copyright, trademark, and other intellectual property laws."
              },
              {
                title: "7. User Conduct",
                content: "You agree not to misuse our services, attempt to gain unauthorized access to our systems, use our platform for illegal activities, or interfere with other users' access to the service. Violation of these terms may result in account suspension or termination."
              },
              {
                title: "8. Limitation of Liability",
                content: "NovaPulse is provided 'as is' without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount you paid for the service in the 12 months preceding the claim."
              },
              {
                title: "9. Termination",
                content: "We reserve the right to suspend or terminate your account at any time for violation of these terms. You may also terminate your account at any time by contacting support. Upon termination, your data will be handled according to our Privacy Policy."
              },
              {
                title: "10. Governing Law",
                content: "These Terms shall be governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved through binding arbitration in San Francisco, CA."
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