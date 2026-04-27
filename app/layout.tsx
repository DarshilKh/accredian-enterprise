import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
  description: "Cultivate high-performance teams through expert learning. Tailored Solutions, Industry Insights, Expert Guidance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
