"use client";
import { PageProp } from "@/types/LinkProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TabBarTopCont({
  align = "start",
  activeColor = "black",
  lineType = "simple",
  bg = false,
  pages,
}: {
  align?: "start" | "between" | "end";
  activeColor?: "black" | "red" | "purple" | "brown" | "green";
  lineType?: "simple" | "primary";
  bg?: boolean;
  pages: PageProp[];
}) {
  const pathname = usePathname();

  //TODO: utils로 분리
  function activeHref(_href: string | string[]) {
    if (Array.isArray(_href)) {
      return _href.some((href) => href === pathname);
    } else return _href === pathname;
  }

  const colorSet = {
    Black: { Active: "text-black", BG: "bg-white" },
    Red: { Active: "text-[#eb0000]", BG: "bg-[#fff3f8]" },
    Purple: { Active: "text-[#5c1880]", BG: "bg-[#f7e8ff]" },
    Brown: { Active: "text-[#a16c0c]", BG: "bg-white" },
    Green: { Active: "text-[#04857f]", BG: "bg-white" },
  };

  const currColor = () => {
    switch (activeColor) {
      case "black":
        return colorSet.Black.Active + (bg ? " " + colorSet.Black.BG : "");
      case "red":
        return colorSet.Red.Active + (bg ? " " + colorSet.Red.BG : "");
      case "purple":
        return colorSet.Purple.Active + (bg ? " " + colorSet.Purple.BG : "");
      case "brown":
        return colorSet.Brown.Active + (bg ? " " + colorSet.Brown.BG : "");
      case "green":
        return colorSet.Green.Active + (bg ? " " + colorSet.Green.BG : "");
    }
  };

  const lineGradi =
    "before:content-[''] before:absolute before:w-full before:left-0 before:bottom-0 before:h-[2px] before:bg-gradient-primary";
  const lineSimple =
    "border-b " +
    (activeColor === "black"
      ? "border-black"
      : activeColor === "red"
      ? "border-[#eb0000]"
      : activeColor === "purple"
      ? "border-[#5c1880]"
      : activeColor === "brown"
      ? "border-[#a16c0c]"
      : activeColor === "green"
      ? "border-[#04857f]"
      : "");

  const active = `${currColor()} ${
    lineType === "simple" ? lineSimple : lineType === "primary" ? lineGradi : ""
  } relative font-medium`;
  const tab =
    "relative block box-border h-full w-full text-base text-center pt-[12px] whitespace-nowrap";
  const itemAlign =
    align === "start"
      ? "justify-start"
      : align === "between"
      ? "justify-between"
      : "justify-end";
  const liAlign =
    align === "start"
      ? "justify-start"
      : align === "between"
      ? "justify-center w-full"
      : "justify-end";
  return (
    <div className="p-0">
      <div
        className={`${itemAlign} absolute top-[56px] left-0 h-[48px] w-full border-y-[1px] overflow-hidden z-[10]`}
      >
        <ul
          className={`flex flex-nowrap w-full h-full box-border overflow-x-auto scrollbar-hide`}
        >
          {pages.map(({ _id, _href, name }) => (
            <li
              className={`relative ${liAlign} flex basis-auto px-5 ${
                activeHref(_href) ? active : ""
              }`}
              key={_id}
            >
              <Link
                className={`${tab}`}
                href={Array.isArray(_href) ? _href[0] : _href}
                prefetch
              >
                {name}
                {/*span 밑에 after로 primary line을 만들어야 길이가 짧아지는 것으로ㅓ 보임*/}
                <span className={"hidden"}>선택됨</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
