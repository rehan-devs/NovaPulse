import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "About — NovaPulse"
};

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "$2.4B", label: "Money Managed" },
  { value: "98%", label: "User Satisfaction" },
  { value: "12K+", label: "Institutions Supported" }
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-founder", bio: "Former VP at Goldman Sachs. Stanford MBA." },
  { name: "Priya Sharma", role: "CTO & Co-founder", bio: "Ex-Google AI researcher. MIT PhD." },
  { name: "Jordan Lee", role: "Head of Product", bio: "Previously PM at Stripe and Square." },
  { name: "Maria Santos", role: "Head of Design", bio: "Former design lead at Figma." },
  { name: "David Chen", role: "Head of Engineering", bio: "Ex-Meta, built systems at scale." },
  { name: "Aisha Johnson", role: "Head of Growth", bio: "Grew previous startup to $50M ARR." }
];

const values = [
  { title: "Transparency", description: "No hidden fees, no data selling, no dark patterns. We believe your finances should be crystal clear." },
  { title: "Security First", description: "Bank-level encryption, SOC 2 compliance, and read-only access. Your money and data are always safe." },
  { title: "AI for Good", description: "We use AI to democratize financial advice that was previously available only to the wealthy." },
  { title: "User Obsessed", description: "Every feature we build starts with a real user problem. We listen, iterate, and deliver." }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="About Us"
        title="Building the future of"
        titleGradient="personal finance."
        description="We're on a mission to give everyone access to AI-powered financial tools that help them save more, invest smarter, and stress less about money."
      />

      {/* Stats */}
      <section className="relative pb-20">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 100}>
                <div className="text-center p-6 bg-nova-card/50 rounded-card border border-white/[0.06]">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-nova-text-muted">{stat.label}</div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-section-mobile md:py-section">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <ScrollAnimator animation="fade-up">
            <h2 className="text-section-mobile md:text-section font-bold text-white mb-8">
              Our <span className="gradient-text">story.</span>
            </h2>
            <div className="space-y-6 text-[16px] text-white/70 leading-[1.8]">
              <p>
                NovaPulse was born in 2023 when our founders, Alex and Priya, realized that despite the explosion of fintech tools, most people were still struggling with basic financial management. The tools available were either too simple to be effective or too complex for everyday users.
              </p>
              <p>
                Having spent years in finance and AI respectively, they saw an opportunity to build something different — a platform that combines the sophistication of institutional-grade financial tools with the simplicity of a consumer app.
              </p>
              <p>
                Today, NovaPulse serves over 50,000 users who collectively manage $2.4 billion through our platform. We&apos;ve helped our users save an average of $3,200 more per year and earn 15% better investment returns compared to managing their finances manually.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <ScrollAnimator animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">Our Values</span>
              <h2 className="text-section-mobile md:text-section font-bold text-white">
                What we <span className="gradient-text">stand for.</span>
              </h2>
            </div>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-nova-card/70 rounded-card-lg p-8 border border-white/[0.06]">
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-[15px] text-nova-text-muted leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <ScrollAnimator animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block text-eyebrow font-semibold text-nova-accent uppercase tracking-widest mb-4">Our Team</span>
              <h2 className="text-section-mobile md:text-section font-bold text-white">
                Meet the <span className="gradient-text">team.</span>
              </h2>
            </div>
          </ScrollAnimator>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-nova-card/70 rounded-card-lg p-6 border border-white/[0.06] hover:border-nova-accent/20 transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nova-accent/20 to-nova-accent-purple/20 flex items-center justify-center text-xl font-bold text-white/40 mx-auto mb-4">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-nova-accent mb-2">{member.role}</p>
                  <p className="text-xs text-nova-text-muted">{member.bio}</p>
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