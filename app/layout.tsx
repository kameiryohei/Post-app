import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header";

const fonts = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ブログ投稿掲示板",
  description: "好きな内容について呟けるサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={fonts.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
