"use client";
import { PageType } from "@/type/Page";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function TabbarHeader({
  className,
  justify = "center",
  pages,
  activeTab = "point",
  activeColor = "black",
  hideByScroll = false,
}: {
  className?: string;
  justify?: "center" | "start" | "between";
  pages?: PageType[];
  activeTab?: "point" | "underline-primary";
  activeColor?: "black" | "spoint";
  hideByScroll?: boolean;
}) {
  const pathname = usePathname();

  const currActive = () => {
    switch (activeTab) {
      case "point": {
        return "before:absolute before:top-[-2px] before:left-1/2 before:translate-x-[-50%] before:w-1 before:h-1 before:bg-black before:rounded-full";
      }
      case "underline-primary": {
        return "before:absolute before:mx-5 before:w-[calc(100%-40px)] before:left-0 before:bottom-0 before:h-[2px] before:bg-gradient-primary";
      }
    }
  };

  const currJustify = () => {
    switch (justify) {
      case "center":
        return "justify-center";
      case "start":
        return "justify-start";
      case "between":
        return "justify-between";
    }
  };

  const currColor = () => {
    switch (activeColor) {
      case "black":
        return "text-black";
      case "spoint":
        return "text-spoint";
    }
  };

  const [showHeader, setShowHeader] = useState(true);
  const [scrollState, setScrollState] = useState(0);
  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrollDown = scrollTop > scrollState;

      if (isScrollDown) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      if (!isScrollDown && scrollTop <= 40) {
        setShowHeader(true);
      }
      setScrollState(scrollTop); // 스크롤 위치 갱신
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollState]);

  return (
    <div className="fixed h-14 w-full z-10">
      <div
        className={`${className ?? ""} absolute ${
          hideByScroll && (showHeader ? "top-0" : "-top-14")
        } w-full h-9 bg-white border-b border-gray overflow-hidden z-10 transition-all duration-300 ease-in-out`}
      >
        <ul
          className={`flex flex-nowrap ${currJustify()} w-full h-full box-border overflow-x-auto scrollbar-hide pt-[2px] transition-all duration-300 ease-in-out`}
        >
          {pages!.map(
            (each) =>
              each && (
                <li
                  key={each.id}
                  className={`relative flex basis-auto px-5 transition-all duration-300 ease-in-out ${
                    pathname === each.pathname && currActive()
                  } ${pathname === each.pathname && currColor()} ${
                    justify == "between"
                      ? "before:!w-full before:!mx-0"
                      : "px-5"
                  }`}
                >
                  <Link
                    className="relative block w-full whitespace-nowrap"
                    href={each.pathname as string}
                  >
                    {each.name}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
