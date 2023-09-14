<<<<<<< HEAD
import "app/globals.css";
import "tailwindcss/tailwind.css";

//TODO: 전역 폰트 재설정 필요(Inter, NotoSansKR)
import { Inter, Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";

import Footer from "@/components/templates/Footer";
import TabBarBottomGlobal from "@/components/templates/TabBarBottomGlobal";
import HeaderNavBar from "@/components/templates/HeaderNavBar";
import { ValueProvider } from "@/components/hooks/ValueProvider";
import BarcodeBox from "@/components/atoms/BarcodeBox";
=======
import { AppContextProvider } from "@/provider/AppContextProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthContextProvider from "@/provider/AuthContextProvider";
import TabbarFooter from "@/components/TabbarFooter";
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12

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
<<<<<<< HEAD
        <ValueProvider>
          <HeaderNavBar />
          {/* <ToTop /> to top button */}
          <section id="content">{children}</section>
          <BarcodeBox />
        </ValueProvider>
        <Footer />
        <TabBarBottomGlobal />
=======
        <AuthContextProvider>
          <AppContextProvider>
            <Header />
            <section className="pt-14 bg-white">{children}</section>
          </AppContextProvider>
          <Footer />
          <TabbarFooter />
        </AuthContextProvider>
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
      </body>
    </html>
  );
}
