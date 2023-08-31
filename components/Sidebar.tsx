"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import NavLogo from "./NavLogo";
import Button from "./Button";
import SidebarFavoBox from "./SidebarFavoBox";

import { staticPageFetch } from "@/utils/StaticFetch";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  const temsPages = staticPageFetch.getChildrenPageByParentId(
    Number(process.env.NEXT_PUBLIC_PAGE_TERMS_PARENT)
  );

  const { appValueList, handleAppRecord } = useAppContext();
  const hiddenRef = useRef<HTMLDivElement | null>(null);
  const currPathname = usePathname();

  const handleHidden = () => {
    handleAppRecord("sidebar", false);
    appValueList["sidebar"] &&
      setTimeout(() => {
        hiddenRef.current!.className += " hidden";
      }, 300);
  };

  useEffect(() => {
    handleHidden();
  }, [currPathname]);

  useEffect(() => {
    if (!appValueList["sidebar"]) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [appValueList]);

  return (
    <nav className="fixed left-0 top-0 z-[100]">
      <div
        className={`fixed block top-0 w-[85%] min-w-[320px] h-full z-20 bg-white overflow-y-auto ease-in-out duration-300 ${
          appValueList["sidebar"] ? "left-0" : "left-[-100%]"
        }`}
      >
        {/* <NavLogo /> */}
        <div className="block h-[60px] pt-[16px] pl-[20px] box-border">
          <NavLogo
            className="inline-block"
            onClick={() => handleHidden()}
            nav
          />
        </div>

        {/* TODO: 로그인 여부 확인 */}
        <div className="relative px-5 pt-[18px] pb-6">
          <div className="flex items-center justify-between">
            <p className="text-[18px] leading-[26px]">로그인해 주세요.</p>
          </div>
          {/* 사용자 버튼 박스 */}
          <div className="flex gap-2 mt-[25px]">
            <Button className="h-9" bgColor="primary">
              로그아웃
            </Button>
            <Button className="h-9" bgColor="black">
              <Link href={"/"}>마이페이지</Link>
            </Button>
          </div>
        </div>

        {/* Favorite Menus */}
        <SidebarFavoBox />

        {/* MenuList */}
        <SidebarMenu />

        {/* Terms */}
        <ul className="space-x-5 mt-[20px] mb-[80px] ml-5">
          {temsPages.map((page) => (
            <li key={page.id} className="inline-block">
              <Link
                className={`block text-[13px] leading-[13px] text-[#767676] py-[5px] ${
                  page.name === "개인정보 처리방침" ? "text-[#eb0000]" : ""
                }`}
                href={page.pathname as string}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Close Button */}
        <button
          className="absolute top-0 right-0 w-[60px] h-[60px] bg-[url('/images/icon_close.png')] bg-[14px_auto] bg-center bg-no-repeat"
          onClick={handleHidden}
        />
      </div>

      {/* Background */}
      <div
        className={`fixed w-full h-full min-w-[320px] bg-black transition-all ease-linear duration-300 ${
          appValueList["sidebar"] ? "bg-opacity-50" : "bg-opacity-0 hidden"
        }`}
        onClick={handleHidden}
        ref={hiddenRef}
      ></div>
    </nav>
  );
}
