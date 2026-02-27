import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Blog — NovaPulse"
};

const posts = [
  {
    slug: "ai-revolution-personal-finance",
    title: "The AI Revolution in Personal Finance: What's Next",
    excerpt: "Artificial intelligence is transforming how we manage money. Here's what the future holds for AI-powered financial tools.",
    category: "AI & Finance",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    featured: true
  },
  {
    slug: "automate-savings-guide",
    title: "How to Automate Your Savings Without Thinking About It",
    excerpt: "A step-by-step guide to setting up automatic savings that work with your lifestyle and income patterns.",
    category: "Savings",
    date: "Jan 10, 2025",
    readTime: "5 min read",
    featured: false
  },
  {
    slug: "investment-strategies-beginners",
    title: "Investment Strategies for Beginners in 2025",
    excerpt: "New to investing? Here are the strategies and tools that make it easy to start building wealth today.",
    category: "Investing",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    slug: "budgeting-myths-debunked",
    title: "5 Budgeting Myths That Are Keeping You Broke",
    excerpt: "Stop believing these common budgeting myths. We break down what actually works for modern money management.",
    category: "Budgeting",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    featured: false
  },
  {
    slug: "subscription-audit-save-money",
    title: "The Subscription Audit: How We Helped Users Save $200/Month",
    excerpt: "Our bill tracking feature uncovered hidden subscriptions costing users hundreds per month. Here's what we found.",
    category: "Tips",
    date: "Dec 20, 2024",
    readTime: "4 min read",
    featured: false
  },
  {
    slug: "financial-goals-psychology",
    title: "The Psychology Behind Achieving Financial Goals",
    excerpt: "Why most people fail at financial goals and how behavioral psychology can help you succeed.",
    category: "Psychology",
    date: "Dec 15, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    slug: "novapulse-year-in-review",
    title: "NovaPulse 2024: Year in Review",
    excerpt: "A look back at everything we built this year — new features, milestones, and what's coming in 2025.",
    category: "Company",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    featured: false
  },
  {
    slug: "emergency-fund-guide",
    title: "Building an Emergency Fund: The Complete Guide",
    excerpt: "How much do you really need? Where should you keep it? Everything you need to know about emergency funds.",
    category: "Savings",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    featured: false
  },
  {
    slug: "smart-spending-habits",
    title: "10 Smart Spending Habits of Financially Free People",
    excerpt: "What wealthy people do differently with their money — and how you can adopt the same habits today.",
    category: "Tips",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    featured: false
  }
];

const categories = ["All", "AI & Finance", "Savings", "Investing", "Budgeting", "Tips", "Company", "Psychology"];

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Blog"
        title="Insights for smarter"
        titleGradient="money."
        description="Tips, guides, and insights to help you take control of your finances and build lasting wealth."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200 ${
                  i === 0
                    ? "bg-nova-accent/10 text-nova-accent border border-nova-accent/20"
                    : "text-nova-text-muted hover:text-white bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="block mb-12 group">
              <div className="relative bg-nova-card/70 rounded-card-lg border border-white/[0.06] overflow-hidden hover:border-nova-accent/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-nova-accent/[0.08] to-nova-accent-purple/[0.05] flex items-center justify-center">
                    <div className="text-[80px] opacity-20">📊</div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-nova-accent bg-nova-accent/10 px-2.5 py-1 rounded-pill">
                        Featured
                      </span>
                      <span className="text-xs text-nova-text-muted">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-[28px] font-bold text-white mb-3 group-hover:text-nova-accent transition-colors duration-200 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[15px] text-nova-text-muted leading-relaxed mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-nova-text-dim">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-nova-card/70 rounded-card-lg border border-white/[0.06] overflow-hidden hover:border-nova-accent/20 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[16/10] bg-gradient-to-br from-nova-accent/[0.05] to-nova-accent-purple/[0.03] flex items-center justify-center">
                    <div className="text-[48px] opacity-15">📝</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-nova-accent">
                        {post.category}
                      </span>
                      <span className="text-xs text-nova-text-dim">•</span>
                      <span className="text-xs text-nova-text-dim">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-nova-accent transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-nova-text-muted leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="text-xs text-nova-text-dim mt-4">
                      {post.date}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}