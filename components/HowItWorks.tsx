"use client";
const steps = [
  {
    num: "1",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <path d="M4 20l6-8 5 6 4-5 5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
        <path d="M4 22h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 10h8M10 14h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
        <circle cx="14" cy="14" r="3" stroke="white" strokeWidth="2" />
        <path d="M9 14h2M17 14h2" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="howItWorks" style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            How We <span style={{ color: "#1a56db" }}>Deliver Results</span> That Matter?
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            A Structured Three-Step Approach to <span style={{ color: "#1a56db" }}>Skill Development</span>
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="hiw-grid">
          {steps.map((step) => (
            <div
              key={step.title}
              style={{
                background: "#eef4ff",
                borderRadius: 12,
                padding: "32px 28px",
                borderLeft: "4px solid #1a56db",
                position: "relative",
              }}
            >
              {/* Number badge */}
              <div style={{
                position: "absolute", top: 16, left: 16,
                width: 28, height: 28, borderRadius: "50%",
                border: "1.5px solid #9ca3af",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: "#6b7280", fontWeight: 600,
                background: "#fff",
              }}>
                {step.num}
              </div>

              {/* Icon circle */}
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "#1a56db",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "24px auto 20px",
              }}>
                {step.icon}
              </div>

              <p style={{ fontSize: 17, fontWeight: 700, color: "#111827", textAlign: "center", marginBottom: 10 }}>
                {step.title}
              </p>
              <p style={{ fontSize: 14, color: "#6b7280", textAlign: "center", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .hiw-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
