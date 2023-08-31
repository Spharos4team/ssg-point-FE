"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Pages from "@/data/page.data.json";
import NavLogo from "./NavLogo";

export default function HeaderNavBox() {
  const currPathname = usePathname();
  const root = "/";

  const getThisBox = () => {
    const childPage = Pages.find((page) => page.pathname === currPathname);
    if (currPathname == root) {
      // root인 경우
      return <NavLogo nav />;
    } else if (!childPage?.parent_id) {
      // parent인 경우 자신의 name 반환
      const thisTitle = childPage?.name;
      return <NavH2>{thisTitle}</NavH2>;
    } else {
      // child인 경우 parent 찾아 반환
      const thisTitle = Pages.find(
        (page) => page.id == childPage.parent_id
      )?.name;
      return <NavH2>{thisTitle}</NavH2>;
    }
  };

  return <>{getThisBox()}</>;
}

const NavH2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <button
        className="absolute indent-[-999em] w-[48px] h-[56px] left-0 top-0 bg-[url('/images/arrow_left.png')] bg-[length:8px_auto] bg-center bg-no-repeat"
        onClick={() => window.history.back()}
      >
        뒤로가기
      </button>
      <h2 className="text-[16px] leading-[28px] font-medium text-center">
        {children}
      </h2>
    </>
  );
};
