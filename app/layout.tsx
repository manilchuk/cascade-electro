import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap" });

export const metadata: Metadata = {
  title: "КАСКАД ЕЛЕКТРО | Енергія надійних рішень",
  description:
    "Широкий асортимент електротехнічних товарів для дому, бізнесу та професійного монтажу. Якість, перевірена часом.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
