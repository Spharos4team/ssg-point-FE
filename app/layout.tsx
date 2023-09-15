<<<<<<< HEAD
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
=======
import { AppContextProvider } from "@/provider/AppContextProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthContextProvider from "@/provider/AuthContextProvider";
import TabbarFooter from "@/components/TabbarFooter";

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});
>>>>>>> 3b2363ca957659b3b4eadfaf8d63e5643c7199e7

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
<<<<<<< HEAD
      <body>
        {/* //TODO: 현재 루트에서 나누고 있는데, 재고필요, 공통 객체만 남겨둘 것 */}
        <HeaderNav />
        {/* <ToTop /> to top button */}
        <section id="content">{children}</section>
        <Footer />
        <FooterNav />
=======
      <body className={notoKr.className}>
        <AuthContextProvider>
          <AppContextProvider>
            <Header />
            <section className="pt-14 bg-white">{children}</section>
          </AppContextProvider>
          <Footer />
          <TabbarFooter />
        </AuthContextProvider>
>>>>>>> 3b2363ca957659b3b4eadfaf8d63e5643c7199e7
      </body>
    </html>
  );
}
