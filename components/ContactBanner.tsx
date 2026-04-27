"use client";

export default function ContactBanner() {
  return (
    <section id="contact" style={{ background: "#fff", padding: "0 24px 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          background: "#1a56db",
          borderRadius: 16,
          padding: "40px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          position: "relative",
          overflow: "hidden",
        }} className="contact-banner">
          {/* Decorative circles */}
          <div style={{
            position: "absolute", right: 200, top: -40,
            width: 200, height: 200, borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }} />
          <div style={{
            position: "absolute", right: 100, bottom: -60,
            width: 180, height: 180, borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }} />

          <div style={{ display: "flex", alignItems: "center", gap: 24, zIndex: 1 }}>
            {/* Headset icon box */}
            <div style={{
              width: 72, height: 72, borderRadius: 12,
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                <path d="M10 20C10 14.477 14.477 10 20 10s10 4.477 10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <rect x="6" y="20" width="8" height="12" rx="3" fill="white" />
                <rect x="26" y="20" width="8" height="12" rx="3" fill="white" />
                <path d="M34 28c0 3.314-6.268 6-14 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
                Want to Learn More About Our Training Solutions?
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)" }}>
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
          </div>

          <button
            style={{
              flexShrink: 0,
              padding: "14px 32px",
              borderRadius: 8,
              border: "2px solid #fff",
              background: "transparent",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8,
              zIndex: 1,
              whiteSpace: "nowrap",
            }}
          >
            Contact Us &nbsp;›
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-banner { flex-direction: column !important; padding: 32px 24px !important; text-align: center; }
        }
      `}</style>
    </section>
  );
}
