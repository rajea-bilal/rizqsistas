import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizq Sistas | Halal Financial Education",
  description: "Rizq Sistas is a community turning financial planning into practical action. We learn, invest, and steward our wealth side by side, grounded in faith.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#C25E30] selection:text-white text-neutral-900 bg-white">
        {children}
      </body>
    </html>
  );
}
