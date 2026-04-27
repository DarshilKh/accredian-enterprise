"use client";
const catItems = [
  {
    letter: "C",
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <rect x="10" y="8" width="28" height="32" rx="3" stroke="#1a56db" strokeWidth="2" />
        <path d="M16 18h16M16 24h12M16 30h8" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="34" r="8" fill="#e8f0fe" stroke="#1a56db" strokeWidth="1.5" />
        <path d="M31 34l2 2 4-4" stroke="#1a56db" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    letter: "A",
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="14" width="32" height="24" rx="3" stroke="#1a56db" strokeWidth="2" />
        <circle cx="14" cy="20" r="2" fill="#1a56db" />
        <circle cx="20" cy="20" r="2" fill="#1a56db" />
        <path d="M12 28h24" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 32h16" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 6l4 4-4 4" stroke="#1a56db" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    letter: "T",
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="8" stroke="#1a56db" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="#1a56db" />
        <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="14" stroke="#1a56db" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ),
  },
];

export default function CATFramework() {
  return (
    <section id="cat" style={{ background: "#eef4ff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            The <span style={{ color: "#1a56db" }}>CAT Framework</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            Our Proven Approach to <span style={{ color: "#1a56db" }}>Learning Excellence</span>
          </p>
        </div>

        {/* Three large circles connected */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap", overflowX: "auto" }}>
          {catItems.map((item, i) => (
            <div key={item.title} style={{ display: "flex", alignItems: "center" }}>
              {/* Circle */}
              <div style={{
                width: 220, height: 220,
                borderRadius: "50%",
                border: "2.5px solid #1a56db",
                background: "#fff",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                padding: 24, textAlign: "center",
                position: "relative",
                boxShadow: "0 4px 20px rgba(26,86,219,0.08)",
              }}
                className="cat-circle"
              >
                {/* Dot on circle edge */}
                <div style={{
                  position: "absolute",
                  width: 14, height: 14,
                  borderRadius: "50%",
                  background: "#1a56db",
                  top: i % 2 === 0 ? -7 : "auto",
                  bottom: i % 2 === 1 ? -7 : "auto",
                  left: "50%",
                  transform: "translateX(-50%)",
                }} />

                {item.icon}
                <p style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginTop: 8, marginBottom: 4 }}>{item.title}</p>
                <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>{item.desc}</p>
              </div>

              {/* S-curve connector */}
              {i < catItems.length - 1 && (
                <div style={{ width: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d={i === 0 ? "M0 20 Q30 20 30 30 Q30 40 60 40" : "M0 40 Q30 40 30 30 Q30 20 60 20"}
                      stroke="#1a56db" strokeWidth="2" fill="none" />
                    <circle cx={i === 0 ? 0 : 0} cy={i === 0 ? 20 : 40} r="4" fill="#1a56db" />
                    <circle cx={60} cy={i === 0 ? 40 : 20} r="4" fill="#1a56db" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .cat-circle { width: 160px !important; height: 160px !important; } }
      `}</style>
    </section>
  );
}
