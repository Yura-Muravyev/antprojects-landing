import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://antprojects.ru";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Муравьёв Юрий — IT Project Manager",
  description:
    "Личный сайт Муравьёва Юрия — IT Project Manager с 6+ годами опыта. Scrum, Agile, управление продуктами и командами в сфере IT.",
  keywords: [
    "IT Project Manager",
    "Муравьёв Юрий",
    "Agile",
    "Scrum",
    "управление проектами",
    "менеджер проектов",
    "Канбан",
    "продакт менеджер",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Муравьёв Юрий — IT Project Manager",
    description: "Управляю продуктами и командами в сфере IT. 6+ лет опыта.",
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: "Муравьёв Юрий",
  },
  twitter: {
    card: "summary_large_image",
    title: "Муравьёв Юрий — IT Project Manager",
    description: "Управляю продуктами и командами в сфере IT. 6+ лет опыта.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
      <Script
        defer
        src="https://analytics.antprojects.ru/script.js"
        data-website-id="62be10bb-e7b1-41a9-9d9e-b4dc321444d9"
        strategy="afterInteractive"
      />
    </html>
  );
}
