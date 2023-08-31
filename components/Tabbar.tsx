"use client";

import { PageType } from "@/type/Page";
import { staticPageFetch } from "@/utils/StaticFetch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TabbarFooter from "./TabbarFooter";
import path from "path";

export default function Tabbar({
  className,
  type,
  tabIdList,
}: {
  className?: string;
  type: "header" | "footer";
  tabIdList?: number[];
}) {
  const pathname = usePathname();

  function activeHref(_href: string | string[]) {
    if (Array.isArray(_href)) {
      return _href.some((href) => href === pathname);
    } else return _href === pathname;
  }

  switch (type) {
    case "header": {
      const childPages =
        pathname == "/"
          ? staticPageFetch.getPagesByIdList([13, 0])
          : staticPageFetch.getParentandChildrenByCurrPath(pathname);

      const activeLineGradi =
        "before:content-[''] before:absolute before:w-full before:left-0 before:bottom-0 before:h-[2px] before:bg-gradient-primary";

      const activePointAbove =
        "before:absolute before:top-[-2px] before:left-1/2 before:translate-x-[-50%] before:w-1 before:h-1 before:bg-black before:rounded-full";

      return (
        <div
          className={`${className} fixed top-14 left-0 w-full h-9 bg-white border-b border-gray overflow-hidden z-20 transition-all`}
        >
          <ul className="flex flex-nowrap justify-center w-full h-full box-border overflow-x-auto scrollbar-hide pt-[2px]">
            {childPages.map(
              (each) =>
                each && (
                  <li
                    key={each.id}
                    className={`relative flex basis-auto px-5 ${
                      activeHref(each.pathname) ? activePointAbove : ""
                    }`}
                  >
                    <Link href={each.pathname}>{each.name}</Link>
                  </li>
                )
            )}
          </ul>
        </div>
      );
    }

    case "footer": {
      if (!tabIdList)
        throw new Error("'footer'타입은 'tabIdList'속성이 필수 입니다.");
      const tabbarPageId = tabIdList;
      const tabbarPages = staticPageFetch.getPagesByIdList(tabbarPageId);
      return (
        <TabbarFooter
          innerPages={tabbarPages as PageType[]}
          currPath={pathname}
        />
      );
    }
  }
}
