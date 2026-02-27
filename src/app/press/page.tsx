import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "Press — NovaPulse"
};

const pressReleases = [
  { title: "NovaPulse Raises $25M Series A to Democratize AI-Powered Finance", date: "January 8, 2025", source: "TechCrunch" },
  { title: "NovaPulse Named in Forbes Fintech 50 for 2025", date: "December 15, 2024", source: "Forbes" },
  { title: "NovaPulse Reaches 50,000 Users, $2.4B Under Management", date: "November 20, 2024", source: "Bloomberg" },
  { title: "How NovaPulse Is Using AI to Make Saving Money Effortless", date: "October 5, 2024", source: "Wired" },
  { title: "NovaPulse Launches Investment Autopilot Feature", date: "September 12, 2024", source: "The Verge" }
];

export default function PressPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Press"
        title="NovaPulse in the"
        titleGradient="news."
        description="Press releases, media coverage, and brand resources for journalists and partners."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          {/* Brand assets */}
          <ScrollAnimator animation="fade-up">
            <div className="bg-nova-card/70 rounded-card-lg border border-white/[0.06] p-8 mb-12 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Brand Assets</h3>
              <p className="text-sm text-nova-text-muted mb-6">Download our logos, brand guidelines, and product screenshots.</p>
              <button className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white border border-white/[0.12] rounded-button hover:border-nova-accent/40 hover:bg-white/[0.03] transition-all duration-200">
                Download Press Kit
              </button>
            </div>
          </ScrollAnimator>

          {/* Press releases */}
          <ScrollAnimator animation="fade-up">
            <h2 className="text-2xl font-bold text-white mb-8">Recent Coverage</h2>
          </ScrollAnimator>
          <div className="space-y-4">
            {pressReleases.map((pr, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-nova-card/70 rounded-card p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-nova-accent">{pr.source}</span>
                    <span className="text-xs text-nova-text-dim">•</span>
                    <span className="text-xs text-nova-text-dim">{pr.date}</span>
                  </div>
                  <h3 className="text-[16px] font-semibold text-white leading-snug">{pr.title}</h3>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          {/* Contact */}
          <ScrollAnimator animation="fade-up">
            <div className="mt-12 text-center">
              <p className="text-sm text-nova-text-muted mb-2">Media inquiries</p>
              <a href="mailto:press@novapulse.com" className="text-nova-accent hover:text-nova-accent-purple transition-colors">
                press@novapulse.com
              </a>
            </div>
          </ScrollAnimator>
        </div>
      </section>
      <Footer />
    </>
  );
}