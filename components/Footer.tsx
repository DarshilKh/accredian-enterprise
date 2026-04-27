"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 0" }}>
        {/* Top row: logo + social + Enquire Now */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 24 }}>
          {/* Logo + socials */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#1a56db", letterSpacing: "-0.5px" }}>accredian</div>
              <div style={{ fontSize: 11, color: "#6b7280" }}>credentials that matter</div>
            </div>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" },
                { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label}
                  style={{
                    width: 36, height: 36, display: "flex", alignItems: "center",
                    justifyContent: "center", color: "#374151",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1a56db")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Enquire Now */}
          <div style={{ textAlign: "right" }}>
            <button
              onClick={() => document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "#1a56db", color: "#fff", border: "none",
                padding: "12px 28px", borderRadius: 8, fontSize: 15,
                fontWeight: 600, cursor: "pointer", marginBottom: 8, display: "block",
                marginLeft: "auto",
              }}
            >
              Enquire Now
            </button>
            <p style={{ fontSize: 13, color: "#6b7280" }}>Speak with our Advisor</p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e5e7eb", marginBottom: 32 }} />

        {/* Two columns: Accredian links + Contact */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 40 }} className="footer-cols">
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Accredian</h4>
            {[
              { label: "About", href: "https://accredian.com/About" },
              { label: "Blog", href: "https://blog.accredian.com/" },
              { label: "Why Accredian", href: "https://accredian.com/whyaccredian" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block", fontSize: 14, color: "#374151",
                  marginBottom: 12, textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a56db")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Contact Us</h4>
            <p style={{ fontSize: 14, color: "#374151", marginBottom: 8 }}>
              Email us:{" "}
              <a href="mailto:enterprise@accredian.com" style={{ color: "#1a56db", textDecoration: "none" }}>
                enterprise@accredian.com
              </a>
            </p>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,<br />
              Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div style={{ height: 1, background: "#e5e7eb", marginBottom: 20 }} />
        <div style={{ textAlign: "center", paddingBottom: 24 }}>
          <p style={{ fontSize: 13, color: "#6b7280" }}>
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) { .footer-cols { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
