import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "약속보다 기록을 남깁니다 | 금새인터랙티브 고객 사례",
  description: "블로그 문의 증가와 플레이스 예약 증가 사례로 확인하는 금새인터랙티브의 투명한 운영 기준.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="좋은 마케팅회사는 약속보다 기록을 남깁니다 | 금새인터랙티브" />
        <meta property="og:description" content="블로그 문의 증가와 플레이스 예약 증가 사례로 확인하는 투명한 마케팅 운영." />
        <meta property="og:image" content="/og-client-stories-v4.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-client-stories-v4.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
