"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredianEdge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#howItWorks" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#fff",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "0 1px 0 #e5e7eb",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#1a56db", letterSpacing: "-0.5px" }}>accredian</span>
          <span style={{ fontSize: 10, color: "#6b7280", letterSpacing: "0.5px" }}>credentials that matter</span>
        </div>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden-mobile">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 14, fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#1a56db" : "#374151",
                  borderBottom: isActive ? "2px solid #1a56db" : "2px solid transparent",
                  paddingBottom: 2, transition: "all 0.15s",
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
        >
          <div style={{ width: 24, height: 2, background: "#374151", marginBottom: 5, transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: "#374151", marginBottom: 5, opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: 24, height: 2, background: "#374151", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #e5e7eb", padding: "16px 24px" }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "10px 0", background: "none", border: "none",
                fontSize: 15, color: "#374151", cursor: "pointer",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
