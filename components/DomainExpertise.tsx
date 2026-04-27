"use client";
const domains = [
  { icon: "💡", label: "Product & Innovation Hub" },
  { icon: "🧠", label: "Gen-AI Mastery" },
  { icon: "👥", label: "Leadership Elevation" },
  { icon: "📊", label: "Tech & Data Insights" },
  { icon: "⚙️", label: "Operations Excellence" },
  { icon: "🌐", label: "Digital Enterprise" },
  { icon: "💳", label: "Fintech Innovation Lab" },
];

export default function DomainExpertise() {
  return (
    <section style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            Our <span style={{ color: "#1a56db" }}>Domain Expertise</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            <span style={{ color: "#1a56db" }}>Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        {/* Grid: first 6 in 3 cols, last 1 centered */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="domain-grid">
          {domains.slice(0, 6).map((d) => (
            <DomainCard key={d.label} {...d} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
          <div style={{ width: "calc(33.333% - 8px)" }} className="domain-last">
            <DomainCard {...domains[6]} />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .domain-grid { grid-template-columns: repeat(2,1fr) !important; }
          .domain-last { width: 50% !important; }
        }
      `}</style>
    </section>
  );
}

function DomainCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb", borderRadius: 12,
      padding: "32px 24px", textAlign: "center",
      background: "#fff",
      transition: "box-shadow 0.2s",
      cursor: "default",
    }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,86,219,0.12)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div style={{ fontSize: 36, marginBottom: 16, color: "#1a56db" }}>{icon}</div>
      <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{label}</p>
    </div>
  );
}
