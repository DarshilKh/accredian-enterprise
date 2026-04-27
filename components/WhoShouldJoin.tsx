"use client";
const profiles = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect x="4" y="8" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
        <path d="M8 28h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 24v4" stroke="white" strokeWidth="2" />
        <path d="M10 16l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect x="4" y="8" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
        <path d="M8 28h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 24v4" stroke="white" strokeWidth="2" />
        <path d="M11 12h10M11 16h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 18l4-4-4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M18 6l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 28c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect x="8" y="14" width="20" height="14" rx="2" stroke="white" strokeWidth="2" />
        <path d="M12 14V11a6 6 0 0112 0v3" stroke="white" strokeWidth="2" />
        <circle cx="18" cy="21" r="2" fill="white" />
      </svg>
    ),
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
  },
];

export default function WhoShouldJoin() {
  return (
    <section style={{ background: "#f9fafb", padding: "0 24px 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          background: "#1a56db",
          borderRadius: 16,
          padding: "48px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }} className="who-grid">
          {/* Left */}
          <div style={{ color: "#fff" }}>
            <p style={{ fontSize: 15, opacity: 0.85, marginBottom: 8 }}>Who Should Join?</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2 }}>Strategic Skill Enhancement</h2>

            {/* Person illustration */}
            <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-start" }}>
              <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
                {/* Person 1 - woman */}
                <ellipse cx="70" cy="45" rx="18" ry="18" fill="#93c5fd" />
                <rect x="48" y="66" width="44" height="70" rx="6" fill="#60a5fa" />
                <rect x="52" y="80" width="18" height="30" rx="3" fill="#dbeafe" />
                {/* Laptop */}
                <rect x="52" y="108" width="35" height="22" rx="2" fill="#e2e8f0" />
                <rect x="53" y="110" width="33" height="17" rx="1" fill="#93c5fd" />
                {/* Person 2 - man */}
                <ellipse cx="150" cy="42" rx="17" ry="17" fill="#7dd3fc" />
                <rect x="130" y="62" width="40" height="72" rx="6" fill="#1e40af" />
                <rect x="152" y="80" width="15" height="28" rx="3" fill="#dbeafe" />
              </svg>
            </div>
          </div>

          {/* Right - 2x2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {profiles.map((p) => (
              <div key={p.title}>
                <div style={{ marginBottom: 10 }}>{p.icon}</div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{p.title}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .who-grid { grid-template-columns: 1fr !important; padding: 32px 24px !important; } }
      `}</style>
    </section>
  );
}
