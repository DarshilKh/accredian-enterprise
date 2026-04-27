"use client";
const clientLogos = [
  { name: "Reliance Industries Limited", short: "Reliance", color: "#7c3f00" },
  { name: "HCL", short: "HCL", color: "#0066cc" },
  { name: "IBM", short: "IBM", color: "#1f70c1" },
  { name: "CRIF", short: "CRIF", color: "#ff6600" },
  { name: "ADP", short: "ADP", color: "#cc0000" },
  { name: "Bayer", short: "Bayer", color: "#10a651" },
];

function LogoCard({ name, short, color }: { name: string; short: string; color: string }) {
  return (
    <div style={{
      minWidth: 160, height: 80,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "0 24px",
    }}>
      <span style={{ fontSize: 26, fontWeight: 800, color, letterSpacing: -1 }}>{short}</span>
      {name !== short && (
        <span style={{ fontSize: 10, color: "#6b7280", marginTop: 2, textAlign: "center" }}>{name.replace(short, "").trim()}</span>
      )}
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" style={{ background: "#fff", paddingBottom: 80 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
            Our Proven <span style={{ color: "#1a56db" }}>Partnerships</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280" }}>
            Successful Collaborations With the <span style={{ color: "#1a56db" }}>Industry&apos;s Best</span>
          </p>
        </div>

        {/* Logo strip */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          flexWrap: "wrap", gap: 16,
          borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb",
          padding: "32px 0",
        }}>
          {clientLogos.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
