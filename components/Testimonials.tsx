"use client";
import { useState } from "react";

const slides = [
  [
    {
      logo: "ADP",
      logoColor: "#cc0000",
      quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "BAYER",
      logoColor: "#10a651",
      isCircle: true,
      quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
  ],
  [
    {
      logo: "IBM",
      logoColor: "#1f70c1",
      quote: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
    {
      logo: "HCL",
      logoColor: "#0066cc",
      quote: "The programs have been transformational for our tech teams. Accredian's blend of theory and practical application ensured our employees could immediately apply their learning to real business challenges.",
    },
  ],
];

function LogoBadge({ logo, logoColor, isCircle }: { logo: string; logoColor: string; isCircle?: boolean }) {
  if (isCircle) {
    return (
      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        border: `2px solid ${logoColor}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, fontWeight: 800, color: logoColor,
        lineHeight: 1.1, textAlign: "center",
      }}>
        {logo}
      </div>
    );
  }
  return (
    <div style={{ fontSize: 28, fontWeight: 900, color: logoColor, letterSpacing: -1 }}>{logo}</div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            Testimonials from <span style={{ color: "#1a56db" }}>Our Partners</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            What <span style={{ color: "#1a56db" }}>Our Clients</span> Are Saying
          </p>
        </div>

        {/* Two cards side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="testi-grid">
          {slides[current].map((t, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "32px 28px",
                background: "#fff",
              }}
            >
              <LogoBadge logo={t.logo} logoColor={t.logoColor} isCircle={(t as { isCircle?: boolean }).isCircle} />
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.8, marginTop: 20 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Dot pagination */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: 10, height: 10, borderRadius: "50%",
                background: current === i ? "#1a56db" : "#d1d5db",
                border: "none", cursor: "pointer", padding: 0,
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
