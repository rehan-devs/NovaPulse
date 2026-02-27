"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Contact"
        title="Get in"
        titleGradient="touch."
        description="Have a question, feedback, or need help? We'd love to hear from you."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Reach out to us
              </h3>
              <div className="space-y-6">
                {[
                  { label: "General Inquiries", value: "hello@novapulse.com", icon: "✉️" },
                  { label: "Support", value: "support@novapulse.com", icon: "🛟" },
                  { label: "Press", value: "press@novapulse.com", icon: "📰" },
                  { label: "Partnerships", value: "partners@novapulse.com", icon: "🤝" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-nova-card/50 rounded-card border border-white/[0.06]">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <a href={`mailto:${item.value}`} className="text-sm text-nova-accent hover:text-nova-accent-purple transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-nova-card/50 rounded-card border border-white/[0.06]">
                <h4 className="text-sm font-semibold text-white mb-2">Office</h4>
                <p className="text-sm text-nova-text-muted leading-relaxed">
                  548 Market St, Suite 36879<br />
                  San Francisco, CA 94104<br />
                  United States
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-nova-card/70 rounded-card-lg border border-nova-accent/20 p-10 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-sm text-nova-text-muted">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-nova-accent/50 focus:ring-1 focus:ring-nova-accent/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-nova-accent/50 focus:ring-1 focus:ring-nova-accent/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm text-white focus:outline-none focus:border-nova-accent/50 focus:ring-1 focus:ring-nova-accent/30 transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-nova-card">Select a topic</option>
                      <option value="general" className="bg-nova-card">General Inquiry</option>
                      <option value="support" className="bg-nova-card">Technical Support</option>
                      <option value="billing" className="bg-nova-card">Billing Question</option>
                      <option value="partnership" className="bg-nova-card">Partnership</option>
                      <option value="feedback" className="bg-nova-card">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-button text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-nova-accent/50 focus:ring-1 focus:ring-nova-accent/30 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-button text-[15px] font-semibold bg-gradient-to-r from-nova-accent to-nova-accent-purple text-white hover:shadow-glow hover:scale-[1.01] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}