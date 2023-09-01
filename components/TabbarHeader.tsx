"use client";

import { PageType } from "@/type/Page";
import { staticPageFetch } from "@/utils/StaticFetch";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabbarHeader({
  className,
  pages,
}: {
  className?: string;
  pages?: PageType[];
}) {
  const pathname = usePathname();

  const activeLineGradi =
    "before:content-[''] before:absolute before:w-full before:left-0 before:bottom-0 before:h-[2px] before:bg-gradient-primary";

  const activePointAbove =
    "before:absolute before:top-[-2px] before:left-1/2 before:translate-x-[-50%] before:w-1 before:h-1 before:bg-black before:rounded-full";

  return (
    <div
      className={`${className} fixed top-14 left-0 w-full h-9 bg-white border-b border-gray overflow-hidden z-20 transition-all`}
    >
      <ul className="flex flex-nowrap justify-center w-full h-full box-border overflow-x-auto scrollbar-hide pt-[2px]">
        {pages!.map(
          (each) =>
            each && (
              <li
                key={each.id}
                className={`relative flex basis-auto px-5 ${
                  pathname === each.pathname ? activePointAbove : ""
                }`}
              >
                <Link href={each.pathname as string}>{each.name}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
