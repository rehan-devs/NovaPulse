import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Cookie Policy — NovaPulse"
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Legal"
        title="Cookie"
        titleGradient="Policy."
        description="Last updated: January 1, 2025"
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {[
              {
                title: "What Are Cookies",
                content: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform."
              },
              {
                title: "Essential Cookies",
                content: "These cookies are necessary for the website to function properly. They enable core functionality such as security, account authentication, and session management. You cannot opt out of essential cookies as the service cannot function without them."
              },
              {
                title: "Analytics Cookies",
                content: "We use analytics cookies to understand how visitors interact with our website. This helps us improve our platform and user experience. We use privacy-focused analytics tools that do not track you across other websites. You can opt out of analytics cookies."
              },
              {
                title: "Preference Cookies",
                content: "These cookies remember your settings and preferences, such as your preferred language, dashboard layout, and notification preferences. They make your experience more personalized and convenient."
              },
              {
                title: "Marketing Cookies",
                content: "We may use marketing cookies to deliver relevant advertisements and measure the effectiveness of our marketing campaigns. These cookies are optional and you can opt out at any time."
              },
              {
                title: "Third-Party Cookies",
                content: "Some of our pages may contain content from third-party services (such as embedded videos or social media widgets) that may set their own cookies. We do not control these cookies and recommend reviewing the cookie policies of these third-party services."
              },
              {
                title: "Managing Cookies",
                content: "You can manage your cookie preferences at any time by clicking the 'Cookie Settings' link in our website footer. You can also control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our platform."
              },
              {
                title: "Contact",
                content: "If you have questions about our use of cookies, please contact us at privacy@novapulse.com."
              }
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                <p className="text-[15px] text-nova-text-muted leading-[1.8]">{section.content}</p>
              </div>
            ))}

            {/* Cookie table */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left py-3 pr-4 text-white/70 font-medium">Cookie</th>
                      <th className="text-left py-3 pr-4 text-white/70 font-medium">Type</th>
                      <th className="text-left py-3 pr-4 text-white/70 font-medium">Duration</th>
                      <th className="text-left py-3 text-white/70 font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-nova-text-muted">
                    {[
                      { name: "np_session", type: "Essential", duration: "Session", purpose: "User authentication" },
                      { name: "np_csrf", type: "Essential", duration: "Session", purpose: "Security token" },
                      { name: "np_prefs", type: "Preference", duration: "1 year", purpose: "User preferences" },
                      { name: "np_analytics", type: "Analytics", duration: "30 days", purpose: "Usage analytics" },
                      { name: "np_consent", type: "Essential", duration: "1 year", purpose: "Cookie consent" }
                    ].map((cookie, i) => (
                      <tr key={i} className="border-b border-white/[0.04]">
                        <td className="py-3 pr-4 font-mono text-xs text-white/60">{cookie.name}</td>
                        <td className="py-3 pr-4">{cookie.type}</td>
                        <td className="py-3 pr-4">{cookie.duration}</td>
                        <td className="py-3">{cookie.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}