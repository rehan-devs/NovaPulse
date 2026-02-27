import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata = {
  title: "System Status — NovaPulse"
};

const services = [
  { name: "Web Application", status: "operational", uptime: "99.99%" },
  { name: "Mobile API", status: "operational", uptime: "99.98%" },
  { name: "Banking Connections", status: "operational", uptime: "99.95%" },
  { name: "Investment Engine", status: "operational", uptime: "99.99%" },
  { name: "AI Processing", status: "operational", uptime: "99.97%" },
  { name: "Notifications", status: "operational", uptime: "99.96%" },
  { name: "Data Analytics", status: "operational", uptime: "99.98%" },
  { name: "Authentication", status: "operational", uptime: "99.99%" }
];

const incidents = [
  { date: "Jan 10, 2025", title: "Resolved: Delayed bank syncs for some users", duration: "42 min", severity: "minor" },
  { date: "Dec 28, 2024", title: "Resolved: Intermittent API latency", duration: "18 min", severity: "minor" },
  { date: "Dec 5, 2024", title: "Resolved: Scheduled maintenance completed", duration: "2 hours", severity: "maintenance" }
];

export default function StatusPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="System Status"
        title="All systems"
        titleGradient="operational."
        description="Real-time status of NovaPulse services and infrastructure."
      />

      <section className="relative pb-section-mobile md:pb-section">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          {/* Overall status */}
          <ScrollAnimator animation="fade-up">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-card-lg p-6 mb-10 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="text-lg font-semibold text-emerald-400">All Systems Operational</div>
                <div className="text-sm text-emerald-400/60">Last checked: just now</div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Services */}
          <div className="space-y-2 mb-16">
            {services.map((service, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 50}>
                <div className="flex items-center justify-between p-4 bg-nova-card/50 rounded-card border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-sm font-medium text-white">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-nova-text-dim">{service.uptime} uptime</span>
                    <span className="text-xs text-emerald-400 font-medium capitalize">{service.status}</span>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          {/* Incidents */}
          <ScrollAnimator animation="fade-up">
            <h3 className="text-xl font-bold text-white mb-6">Recent Incidents</h3>
          </ScrollAnimator>
          <div className="space-y-4">
            {incidents.map((incident, i) => (
              <ScrollAnimator key={i} animation="fade-up" delay={i * 80}>
                <div className="p-5 bg-nova-card/50 rounded-card border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-pill ${
                      incident.severity === "minor" ? "bg-amber-400/10 text-amber-400" : "bg-nova-accent/10 text-nova-accent"
                    }`}>
                      {incident.severity === "maintenance" ? "Maintenance" : "Minor"}
                    </span>
                    <span className="text-xs text-nova-text-dim">{incident.date}</span>
                    <span className="text-xs text-nova-text-dim">•</span>
                    <span className="text-xs text-nova-text-dim">{incident.duration}</span>
                  </div>
                  <h4 className="text-sm font-medium text-white">{incident.title}</h4>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}