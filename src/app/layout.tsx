import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const MPlusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-m-plus-rounded",
  display: "swap",
});

const ZenMaru = Zen_Maru_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-m-plus-rounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "只野るくろのWebsite",
  description:
    "このウェブサイトは、只野るくろのポートフォリオ兼ブログ（の予定）です",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${MPlusRounded.variable} ${ZenMaru.variable} antialiased`}
      >
        {children}
        <footer className="text-center py-4">
          <p>© 2025 Tadano Rukuro All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
