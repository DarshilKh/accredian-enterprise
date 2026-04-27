"use client";
const segments = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    emoji: "📋",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    emoji: "🏭",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    bg: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    emoji: "🔬",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    emoji: "📈",
  },
];

export default function CourseSegmentation() {
  return (
    <section style={{ background: "#f9fafb", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            Tailored <span style={{ color: "#1a56db" }}>Course Segmentation</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            Explore <span style={{ color: "#1a56db" }}>Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="seg-grid">
          {segments.map((seg) => (
            <div key={seg.title} style={{
              background: "#fff", borderRadius: 12,
              overflow: "hidden", border: "1px solid #e5e7eb",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}>
              {/* Image area */}
              <div style={{
                height: 160, background: seg.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 64,
              }}>
                {seg.emoji}
              </div>
              {/* Text */}
              <div style={{ padding: "20px 16px" }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#1a56db", marginBottom: 8 }}>{seg.title}</p>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{seg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .seg-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .seg-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
