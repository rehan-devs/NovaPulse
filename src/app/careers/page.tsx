import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "Careers — NovaPulse"
};

const openings = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote (US)", type: "Full-time" },
  { title: "ML Engineer — Financial Models", team: "AI/ML", location: "San Francisco, CA", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Remote (US/EU)", type: "Full-time" },
  { title: "Backend Engineer (Go/Python)", team: "Engineering", location: "Remote (US)", type: "Full-time" },
  { title: "Growth Marketing Manager", team: "Marketing", location: "New York, NY", type: "Full-time" },
  { title: "Data Analyst", team: "Data", location: "Remote (US)", type: "Full-time" },
  { title: "Customer Success Lead", team: "Support", location: "Remote (US)", type: "Full-time" },
  { title: "DevOps / SRE Engineer", team: "Infrastructure", location: "Remote (US)", type: "Full-time" }
];

const perks = [
  "Competitive salary + equity",
  "Unlimited PTO",
  "Remote-first culture",
  "Health, dental & vision insurance",
  "$1,500 annual learning budget",
  "Home office stipend",
  "Annual team retreats",
  "401(k) matching"
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Careers"
        title="Help us build the future of"
        titleGradient="finance."
        description="We're a remote-first team of engineers, designers, and finance experts building AI-powered tools that make money management effortless."
      />

      {/* Perks */}
      <section className="relative pb-20">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <ScrollAnimator animation="fade-up">
            <div className="bg-nova-card/70 rounded-card-lg border border-white/[0.06] p-8 md:p-10">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Why join NovaPulse?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-nova-accent flex-shrink-0">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-white/70">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Openings */}
      <section className="relative py-section-mobile md:py-section">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <ScrollAnimator animation="fade-up">
            <h2 className="text-section-mobile md:text-section font-bold text-white mb-4 text-center">
              Open <span className="gradient-text">positions.</span>
            </h2>
            <p className="text-nova-text-muted text-center mb-12">
              {openings.length} open roles across the company
            </p>
          </ScrollAnimator>

          <div className="space-y-3">
            {openings.map((job, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 60}>
                <Link href="/careers" className="group block bg-nova-card/70 rounded-card p-5 border border-white/[0.06] hover:border-nova-accent/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-[16px] font-semibold text-white group-hover:text-nova-accent transition-colors duration-200">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-nova-text-muted">{job.team}</span>
                        <span className="text-xs text-nova-text-dim">•</span>
                        <span className="text-xs text-nova-text-muted">{job.location}</span>
                        <span className="text-xs text-nova-text-dim">•</span>
                        <span className="text-xs text-nova-text-muted">{job.type}</span>
                      </div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-nova-text-dim group-hover:text-nova-accent transition-colors flex-shrink-0">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}