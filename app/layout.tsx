import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap" });

export const metadata: Metadata = {
  // Основні SEO-налаштування
  title: {
    default: "КАСКАД ЕЛЕКТРО | Енергія надійних рішень",
    template: "%s | КАСКАД ЕЛЕКТРО",
  },
  description:
    "Широкий асортимент електротехнічних товарів для дому, бізнесу та професійного монтажу. Кабель, автоматика, щити, розетки, освітлення та лічильники. Якість, перевірена часом.",
  keywords: [
    "електротехніка",
    "кабель",
    "провід",
    "автоматика",
    "щити",
    "розетки",
    "вимикачі",
    "освітлення",
    "лічильники",
    "електротовари",
    "Київ",
    "Україна",
  ],
  authors: [{ name: "КАСКАД ЕЛЕКТРО" }],
  creator: "КАСКАД ЕЛЕКТРО",
  publisher: "КАСКАД ЕЛЕКТРО",

  // Налаштування для соцмереж (Open Graph)
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://cascadelectro.prom.ua", // Замініть на реальний домен, коли буде
    siteName: "КАСКАД ЕЛЕКТРО",
    title: "КАСКАД ЕЛЕКТРО | Енергія надійних рішень",
    description:
      "Широкий асортимент електротехнічних товарів для дому, бізнесу та професійного монтажу. Кабель, автоматика, щити, розетки, освітлення та лічильники.",
    images: [
      {
        url: "/OG-image.webp",
        width: 1200,
        height: 630,
        alt: "КАСКАД ЕЛЕКТРО - Електротехніка",
      },
    ],
  },

  // Налаштування для Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "КАСКАД ЕЛЕКТРО | Енергія надійних рішень",
    description:
      "Широкий асортимент електротехнічних товарів для дому, бізнесу та професійного монтажу.",
    images: ["/OG-image.webp"],
  },

  // Інші налаштування
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://cascadelectro.prom.ua", // Замініть на реальний домен
  },
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
