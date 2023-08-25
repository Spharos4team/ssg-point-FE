"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderIconBox from "./HeaderIconBox";
import Sidebar from "@/components/modules/Sidebar";
import HeaderStatusBox from "@/components/modules/HeaderStatusBox";
import { ValueProvider } from "@/components/modules/ValueContext";

//TODO: 전역 상태 또는 세션,쿠키 확인해서 로그인 상태 가져오기 -> 컴포넌트로 빼고 Header는 use server
export default function HeaderNavBar() {
  const pathname = usePathname();

  return (
    <header className="flex">
      <div className="fixed left-0 top-0 w-full h-[56px] bg-white z-[100]">
        {/* TODO: pathname을 HeaderIconBox 안에서 사용하기 */}
        <div className="flex justify-between items-center align-middle h-full relative pr-[60px] pl-[48px] z-2">
          <ValueProvider>
            <HeaderIconBox pathname={pathname} />
            <HeaderStatusBox />
            <Sidebar />
          </ValueProvider>
        </div>
      </div>
    </header>
  );
}
