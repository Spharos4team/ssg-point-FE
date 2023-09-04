"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { useEffect } from "react";

export default function Collapse({
  id,
  title,
  children,
  open = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  const { appValueList, handleAppRecord } = useAppContext();

  useEffect(() => {
    if (open) handleAppRecord(id, true);
  }, []);

  const collapseArrow =
    "bg-[url('/images/arrow_up_down.png')] bg-[100%_auto] bg-opacity-50";

  const isOpen = appValueList[id];
  return (
    <div
      className={`border-b ${
        isOpen ? "h-full" : "h-[49px]"
      } transition ease-in-out duration-300 overflow-hidden`}
    >
      <button
        id={id}
        className="relative block w-full h-12 text-left text-sm leading-[24px] bg-white"
        onClick={() => handleAppRecord(id, !appValueList[id])}
      >
        {title}
        <span
          className={`absolute right-0 top-5 w-3 h-2 -indent-[999em] ${collapseArrow} ${
            isOpen ? "bg-[center_bottom_1px]" : "bg-[center_top_1px]"
          }`}
        >
          <em>{isOpen ? "메뉴닫기" : "메뉴열기"}</em>
        </span>
      </button>

      <div
        className={`relative ${
          isOpen ? "translate-y-0 h-full" : "-translate-y-full h-0"
        } transition-all ease-in-out duration-300 overflow-hidden -z-10`}
      >
        {children}
      </div>
    </div>
  );
}
