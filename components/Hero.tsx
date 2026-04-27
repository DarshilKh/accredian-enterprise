"use client";

export default function Hero() {
  const scrollToFAQs = () => document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{ paddingTop: 72, background: "#f8faff", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px", width: "100%" }}>
        {/* Main card - light blue background like screenshot */}
        <div style={{
          background: "#e8f0fe",
          borderRadius: 20,
          padding: "60px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: 420,
        }}
          className="hero-grid"
        >
          {/* Left content */}
          <div>
            <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, color: "#111827" }} className="hero-h1">
              Next-Gen{" "}
              <span style={{ color: "#1a56db" }}>Expertise</span>
              <br />
              For Your{" "}
              <span style={{ color: "#1a56db" }}>Enterprise</span>
            </h1>

            <p style={{ fontSize: 18, color: "#374151", marginBottom: 24, lineHeight: 1.6 }}>
              Cultivate high-performance<br />teams through expert learning.
            </p>

            {/* Checkmarks row */}
            <div style={{ display: "flex", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
              {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#22c55e" />
                    <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToFAQs}
              style={{
                background: "#1a56db", color: "#fff", border: "none",
                padding: "14px 36px", borderRadius: 8, fontSize: 16,
                fontWeight: 600, cursor: "pointer", letterSpacing: 0.3,
              }}
            >
              Enquire Now
            </button>
          </div>

          {/* Right - placeholder for the professional image */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "100%" }}>
            <div style={{
              width: "100%", maxWidth: 380, height: 360,
              background: "linear-gradient(135deg, #c7d9f8 0%, #dce8ff 100%)",
              borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 12,
            }}>
              {/* SVG illustration of two professionals */}
              <svg width="200" height="220" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Person 1 */}
                <ellipse cx="70" cy="60" rx="22" ry="22" fill="#b0c4de" />
                <rect x="45" y="85" width="50" height="80" rx="8" fill="#1a56db" />
                <rect x="50" y="95" width="20" height="35" rx="4" fill="#c8d8f0" />
                {/* Laptop */}
                <rect x="52" y="128" width="40" height="26" rx="3" fill="#e2e8f0" />
                <rect x="54" y="130" width="36" height="20" rx="2" fill="#93c5fd" />
                <rect x="48" y="154" width="50" height="4" rx="2" fill="#cbd5e1" />
                {/* Person 2 */}
                <ellipse cx="140" cy="55" rx="20" ry="20" fill="#9fb4cc" />
                <rect x="116" y="78" width="48" height="85" rx="8" fill="#1e3a6e" />
                {/* Arms crossed hint */}
                <path d="M120 100 Q130 110 125 120" stroke="#b0c4de" strokeWidth="6" strokeLinecap="round" />
                <path d="M160 100 Q150 110 155 120" stroke="#b0c4de" strokeWidth="6" strokeLinecap="round" />
              </svg>
              <p style={{ color: "#4a6fa5", fontSize: 13, textAlign: "center", padding: "0 16px" }}>
                Enterprise Learning Professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 32px 24px !important; }
          .hero-h1 { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
