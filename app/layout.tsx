import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizq Sistas | Halal Financial Education",
  description: "Rizq Sistas is a community turning financial planning into practical action. We learn, invest, and steward our wealth side by side, grounded in faith.",
  keywords: ["halal finance", "Islamic investing", "Muslim women", "financial planning", "wealth building", "community"],
  authors: [{ name: "Rizq Sistas" }],
  creator: "Rizq Sistas",
  publisher: "Rizq Sistas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
  openGraph: {
    title: "Rizq Sistas | Halal Financial Education",
    description: "A community turning financial planning into practical action. Learn, invest, and steward wealth side by side, grounded in faith.",
    url: 'https://rizqsistas.com',
    siteName: 'Rizq Sistas',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rizq Sistas | Halal Financial Education",
    description: "A community turning financial planning into practical action. Learn, invest, and steward wealth side by side, grounded in faith.",
    creator: '@rizqsistas',
  },
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
