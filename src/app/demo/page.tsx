import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GradientOrb from "@/components/GradientOrb";

export const metadata = {
  title: "Watch Demo — NovaPulse"
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Product Demo"
        title="See NovaPulse in"
        titleGradient="action."
        description="Watch how NovaPulse automates your entire financial life in under 3 minutes."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <GradientOrb color="blue" size="lg" className="top-0 left-1/2 -translate-x-1/2" />

        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          {/* Video Player Mockup */}
          <div className="relative rounded-card-lg overflow-hidden border border-white/[0.08] bg-nova-card shadow-card-hover">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-nova-card to-[#0E0E16] relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,108,247,0.08)_0%,transparent_60%)]" />
              {/* Play Button */}
              <button className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-r from-nova-accent to-nova-accent-purple flex items-center justify-center shadow-glow-lg hover:scale-110 transition-transform duration-300 group">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-nova-accent to-nova-accent-purple animate-ping opacity-20" />
              </button>
              <div className="absolute bottom-4 left-4 text-xs text-white/40">
                Duration: 2:47
              </div>
            </div>
          </div>

          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Account Setup",
                time: "0:00 - 0:45",
                description: "See how easy it is to connect your bank accounts and get started."
              },
              {
                title: "AI in Action",
                time: "0:45 - 1:50",
                description: "Watch the AI analyze spending patterns and create your personalized plan."
              },
              {
                title: "Automation",
                time: "1:50 - 2:47",
                description: "See savings automation, investment management, and goal tracking live."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-nova-card/70 rounded-card p-6 border border-white/[0.06] hover:border-nova-accent/20 transition-all duration-300"
              >
                <div className="text-xs text-nova-accent font-medium mb-2">
                  {item.time}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-nova-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to try it yourself?
            </h3>
            <p className="text-nova-text-muted mb-8">
              Start your free trial today. No credit card required.
            </p>
            <a
              href="/signup"
              className="inline-flex items-center px-8 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-nova-accent to-nova-accent-purple rounded-button hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Start for Free
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}