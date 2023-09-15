import "./globals.css";
import "tailwindcss/tailwind.css";
// <Header /> is removed.
// {children} is modified to <body>{children}</body>
// Reference:
import type { Metadata } from "next";
//TODO: 전역 폰트 재설정 필요(Inter, NotoSansKR)
import { Inter } from "next/font/google";
import HeaderNav from "./component/HeaderNav";
import FooterNav from "./component/FooterNav";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHINSEGEA POINT APP",
  description: "SHINSEGEA POINT APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* //TODO: 현재 루트에서 나누고 있는데, 재고필요, 공통 객체만 남겨둘 것 */}
        <HeaderNav />
        {/* <ToTop /> to top button */}
        <section id="content">{children}</section>
        <Footer />
        <FooterNav />
      </body>
    </html>
  );
}
