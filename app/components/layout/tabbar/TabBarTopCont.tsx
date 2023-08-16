"use client";
import { PageProp } from "@/types/LinkProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

//TODO: 현재 페이지 확인하고 현재 페이지 아래 style
export default function TabBarTopCont({ pages }: { pages: PageProp[] }) {
  const pathname = usePathname();

  //
  const active =
    "before:content-[''] before:absolute before:top-[-2px] before:left-1/2 before:translate-x-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full";
  const tab =
    "relative block box-border h-full text-base text-center pt-[12px] whitespace-nowrap";

  return (
    <div className="p-0">
      <div className="absolute top-[56px] left-0 bg-white h-[48px] w-full border-y-[1px] overflow-hidden z-[10]">
        <ul className="flex flex-nowrap w-full h-full box-border justify-start overflow-x-auto scrollbar-hide">
          {pages.map(({ _id, _href, name }) => (
            <li className="relative flex basis-auto px-5" key={_id}>
              <Link
                className={`${tab} ${_href == pathname ? active : ""}`}
                href={_href}
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
