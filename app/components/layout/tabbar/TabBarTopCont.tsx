"use client";
import { PageProp } from "@/types/LinkProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBarTopCont({ pages }: { pages: PageProp[] }) {
  const pathname = usePathname();

  //TODO: utils로 분리
  function activeHref(_href: string | string[]) {
    if (Array.isArray(_href)) {
      return _href.some((href) => href === pathname);
    } else return _href === pathname;
  }

  const active =
    "relative text-[#eb0000] font-medium before:absolute before:w-full before:left-0 before:bottom-0 before:h-[2px] before:bg-gradient-primary before:content-['']";
  const tab =
    "relative block box-border h-full text-base text-center pt-[12px] whitespace-nowrap";

  return (
    <div className="p-0">
      <div className="absolute top-[56px] left-0 bg-white h-[48px] w-full border-y-[1px] overflow-hidden z-[10] ">
        <ul className="flex flex-nowrap w-full h-full box-border justify-start overflow-x-auto scrollbar-hide">
          {pages.map(({ _id, _href, name }) => (
            <li
              className={`relative flex basis-auto px-5 ${
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
