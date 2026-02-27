import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientOrb from "@/components/GradientOrb";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return { title: `${title} — NovaPulse Blog` };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <Navbar />
      <article className="relative pt-40 pb-section-mobile md:pt-48 md:pb-section overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <GradientOrb color="blue" size="md" className="-top-[200px] -right-[200px]" />

        <div className="relative z-10 max-w-[720px] mx-auto px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-nova-text-muted hover:text-white transition-colors duration-200 mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium text-nova-accent bg-nova-accent/10 px-2.5 py-1 rounded-pill">
              AI & Finance
            </span>
            <span className="text-xs text-nova-text-dim">Jan 15, 2025</span>
            <span className="text-xs text-nova-text-dim">•</span>
            <span className="text-xs text-nova-text-dim">8 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-6">
            {title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-12 pb-8 border-b border-white/[0.06]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nova-accent/30 to-nova-accent-purple/30 flex items-center justify-center text-sm font-semibold text-white/80">
              NP
            </div>
            <div>
              <div className="text-sm font-medium text-white">NovaPulse Team</div>
              <div className="text-xs text-nova-text-muted">Content & Research</div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose-nova space-y-6">
            <p className="text-[16px] text-white/80 leading-[1.8]">
              The intersection of artificial intelligence and personal finance is creating unprecedented opportunities for individuals to manage their money more effectively. In this article, we explore the key trends and technologies shaping the future of AI-powered financial management.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              The Current Landscape
            </h2>
            <p className="text-[16px] text-white/80 leading-[1.8]">
              Traditional personal finance tools have relied on manual input and basic rule-based systems. Users had to categorize transactions, set budgets manually, and make investment decisions with limited data. AI changes all of this by bringing intelligent automation to every aspect of financial management.
            </p>
            <p className="text-[16px] text-white/80 leading-[1.8]">
              Machine learning algorithms can now analyze spending patterns across millions of data points, identify trends that humans would miss, and make real-time recommendations that adapt to changing financial circumstances.
            </p>

            <div className="bg-nova-card/70 border border-white/[0.06] rounded-card p-6 my-8">
              <p className="text-[15px] text-nova-accent italic leading-relaxed">
                &ldquo;AI-powered financial tools are not just about automation — they&apos;re about giving every individual access to the kind of sophisticated financial management that was previously available only to the wealthy.&rdquo;
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Key Technologies Driving Change
            </h2>
            <p className="text-[16px] text-white/80 leading-[1.8]">
              Several key technologies are converging to make AI-powered personal finance a reality. Natural language processing enables conversational financial advisors. Predictive analytics help forecast future spending and income patterns. Reinforcement learning optimizes investment strategies in real-time.
            </p>

            <ul className="space-y-3 my-6">
              {[
                "Machine Learning for pattern recognition in spending data",
                "Natural Language Processing for conversational AI advisors",
                "Predictive Analytics for forecasting financial trends",
                "Reinforcement Learning for investment optimization",
                "Computer Vision for receipt and document scanning"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-nova-accent mt-2.5 flex-shrink-0" />
                  <span className="text-[16px] text-white/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              What&apos;s Next
            </h2>
            <p className="text-[16px] text-white/80 leading-[1.8]">
              The future of AI in personal finance is incredibly exciting. We&apos;re moving toward a world where your finances truly run on autopilot — where AI not only tracks and categorizes your spending but actively makes decisions to optimize your financial health.
            </p>
            <p className="text-[16px] text-white/80 leading-[1.8]">
              At NovaPulse, we&apos;re building this future today. Our AI engine learns from your behavior, adapts to your goals, and continuously works to improve your financial outcomes. It&apos;s not just a tool — it&apos;s a financial partner that never sleeps.
            </p>
          </div>

          {/* Share / Tags */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-nova-text-dim">Tags:</span>
              {["AI", "Finance", "Technology", "Automation"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-nova-text-muted bg-white/[0.04] px-2.5 py-1 rounded-pill border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-nova-card/70 border border-white/[0.06] rounded-card-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to experience AI-powered finance?
            </h3>
            <p className="text-sm text-nova-text-muted mb-6">
              Start your free trial today and see the difference.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center px-6 py-3 text-[15px] font-semibold text-white bg-gradient-to-r from-nova-accent to-nova-accent-purple rounded-button hover:shadow-glow transition-all duration-300"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}