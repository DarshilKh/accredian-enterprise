"use client";
const stats = [
  { value: "10K+", label: "Professionals Trained For Exceptional Career Success" },
  { value: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
  { value: "5K+", label: "Active Learners Engaged In Dynamic Courses" },
];

export default function Stats() {
  return (
    <section id="stats" style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            Our <span style={{ color: "#1a56db" }}>Track Record</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            The Numbers Behind <span style={{ color: "#1a56db" }}>Our Success</span>
          </p>
        </div>

        {/* Stats row with dividers */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr", alignItems: "center", gap: 0 }} className="stats-grid">
          {stats.map((stat, i) => (
            <>
              <div key={stat.value} style={{ textAlign: "center", padding: "0 40px" }}>
                {/* Blue pill */}
                <div style={{
                  display: "inline-block",
                  background: "#dbeafe",
                  color: "#1a56db",
                  fontSize: 28,
                  fontWeight: 700,
                  padding: "8px 32px",
                  borderRadius: 50,
                  marginBottom: 20,
                }}>
                  {stat.value}
                </div>
                <p style={{ fontSize: 15, color: "#374151", fontWeight: 500, lineHeight: 1.5, textAlign: "center" }}>
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div key={`div-${i}`} style={{ width: 1, height: 80, background: "#e5e7eb" }} />
              )}
            </>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
