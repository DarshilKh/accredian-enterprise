"use client";
const edgeItems = [
  {
    icon: "💡", label: "Tailored Solutions",
    desc: "Programs customized to your organization's goals and challenges.",
    position: "top",
  },
  {
    icon: "🏆", label: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    position: "bottom",
  },
  {
    icon: "⚙️", label: "Innovative Framework",
    desc: "Proprietary methods for impactful, application-driven results.",
    position: "top",
  },
  {
    icon: "🌐", label: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
    position: "bottom",
  },
  {
    icon: "📈", label: "Diverse Offerings",
    desc: "Courses across industries, skill levels, and emerging fields.",
    position: "top",
  },
  {
    icon: "🎯", label: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    position: "bottom",
  },
  {
    icon: "📦", label: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
    position: "top",
  },
];

export default function AccredianEdge() {
  return (
    <section id="accredianEdge" style={{ background: "#f9fafb", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            The <span style={{ color: "#1a56db" }}>Accredian Edge</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            Key Aspects of <span style={{ color: "#1a56db" }}>Our Strategic Training</span>
          </p>
        </div>

        {/* Scrollable row of circles */}
        <div style={{ overflowX: "auto", paddingBottom: 16 }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 0, minWidth: 900, padding: "80px 24px",
            position: "relative",
          }}>
            {edgeItems.map((item, i) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center" }}>
                {/* Circle + label layout */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 120 }}>
                  {/* Top label */}
                  {item.position === "top" && (
                    <div style={{ textAlign: "center", marginBottom: 12, minHeight: 70 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{item.label}</p>
                      <p style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  )}
                  {item.position === "bottom" && <div style={{ minHeight: 70 }} />}

                  {/* Circle */}
                  <div style={{
                    width: 80, height: 80,
                    borderRadius: "50%",
                    background: i === 0 ? "none" : "#1a56db",
                    border: i === 0 ? "2px solid #1a56db" : "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28,
                    boxShadow: "0 4px 16px rgba(26,86,219,0.2)",
                    zIndex: 1,
                    position: "relative",
                  }}>
                    <span style={{ filter: i === 0 ? "none" : "brightness(0) invert(1)" }}>
                      {item.icon}
                    </span>
                  </div>

                  {/* Bottom label */}
                  {item.position === "bottom" && (
                    <div style={{ textAlign: "center", marginTop: 12, minHeight: 70 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{item.label}</p>
                      <p style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  )}
                  {item.position === "top" && <div style={{ minHeight: 70 }} />}
                </div>

                {/* Arrow connector */}
                {i < edgeItems.length - 1 && (
                  <div style={{ display: "flex", alignItems: "center", marginTop: item.position === "top" ? -40 : 40, color: "#9ca3af", fontSize: 20, zIndex: 0 }}>
                    ❯❯
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
