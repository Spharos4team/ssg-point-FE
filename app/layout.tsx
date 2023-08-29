import "app/globals.css";
import "tailwindcss/tailwind.css";

//TODO: 전역 폰트 재설정 필요(Inter, NotoSansKR)
import { Inter, Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";

import Footer from "@/components/templates/Footer";
import TabBarBottomGlobal from "@/components/templates/TabBarBottomGlobal";
import HeaderNavBar from "@/components/templates/HeaderNavBar";

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

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
      <body className={notoKr.className}>
        {/* //TODO: 현재 루트에서 나누고 있는데, 재고필요, 공통 객체만 남겨둘 것 */}
        <HeaderNavBar />
        {/* <ToTop /> to top button */}
        <section id="content">{children}</section>
        <Footer />
        <TabBarBottomGlobal />
      </body>
    </html>
  );
}
