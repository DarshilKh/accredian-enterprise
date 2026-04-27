"use client";
import { useState } from "react";

const faqData: Record<string, { q: string; a: string }[]> = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian offers a wide range of programs including Data Science & AI, Product Management, Leadership & Strategy, Cloud Engineering, Fintech Innovation, and more. All programs are co-designed with industry experts and can be fully customized to your organization's needs.",
    },
    {
      q: "What domain specializations are available?",
      a: "We offer specializations across Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab.",
    },
    {
      q: "Are programs accredited or certified?",
      a: "Yes. Programs are certified through our partner institutions including IITs, IIMs, and other globally recognized universities. Certificates are verifiable and shareable.",
    },
  ],
  "About the Delivery": [
    {
      q: "How are programs delivered?",
      a: "Programs are delivered through a flexible blended model — live online sessions, self-paced modules, recorded content, and in-person workshops. We adapt to your team's schedule and geography.",
    },
    {
      q: "Can programs be customized for our organization?",
      a: "Absolutely. Our L&D consultants work with your team to design a fully tailored curriculum, delivery schedule, and assessment framework aligned with your business goals.",
    },
    {
      q: "What is the typical program duration?",
      a: "Program durations range from 4-week intensives to 6-month comprehensive journeys, depending on the depth and scope of the curriculum. We also offer modular short courses.",
    },
  ],
  "Miscellaneous": [
    {
      q: "How do I get started with Accredian Enterprise?",
      a: "Simply click 'Enquire Now' and fill in your details. Our enterprise consultant will reach out within 24 hours to schedule a discovery call and understand your requirements.",
    },
    {
      q: "What is the pricing model?",
      a: "Pricing is customized based on team size, program scope, and delivery format. We offer per-learner and enterprise-wide licensing options. Contact us for a tailored proposal.",
    },
  ],
};

const tabs = Object.keys(faqData);

export default function FAQs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 40 }}>
          Frequently Asked <span style={{ color: "#1a56db" }}>Questions</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 40, alignItems: "start" }} className="faq-grid">
          {/* Left tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenIdx(0); }}
                style={{
                  padding: "16px 20px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  background: activeTab === tab ? "#fff" : "#fff",
                  color: activeTab === tab ? "#1a56db" : "#6b7280",
                  fontWeight: activeTab === tab ? 600 : 400,
                  fontSize: 15,
                  cursor: "pointer",
                  textAlign: "left",
                  boxShadow: activeTab === tab ? "0 2px 8px rgba(26,86,219,0.1)" : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right accordion */}
          <div>
            {faqData[activeTab].map((item, i) => (
              <div
                key={item.q}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  paddingBottom: 16, marginBottom: 16,
                }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between",
                    alignItems: "center", background: "none", border: "none",
                    cursor: "pointer", textAlign: "left", padding: "4px 0",
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 500, color: "#111827", paddingRight: 16 }}>
                    {item.q}
                  </span>
                  <span style={{
                    flexShrink: 0, width: 24, height: 24, borderRadius: "50%",
                    border: "1.5px solid #d1d5db",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#6b7280", fontSize: 14,
                    transform: openIdx === i ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}>
                    ∨
                  </span>
                </button>
                {openIdx === i && (
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginTop: 10, paddingRight: 32 }}>
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enquire Now CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#1a56db", color: "#fff", border: "none",
              padding: "14px 48px", borderRadius: 8, fontSize: 16,
              fontWeight: 600, cursor: "pointer",
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
