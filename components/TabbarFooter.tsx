import { PageType } from "@/type/Page";
import Image from "next/image";
import Link from "next/link";

export default function TabbarFooter({
  innerPages,
  currPath,
}: {
  innerPages: PageType[];
  currPath: string;
}) {
  const active =
    "before:absolute before:top-[5px] before:left-1/2 before:translate-x-[-50%] before:w-1 before:h-1 before:bg-black before:rounded-full";
  return (
    <div className="tab_bar fixed left-0 bottom-0 bg-white w-full h-[75px] z-[99] border-t-[1px]">
      <ul className="flex">
        {innerPages.map(
          (page) =>
            page && (
              <li key={page.id} className="relative w-[20%]">
                <Link
                  className={`block w-full h-[60px] text-[9px] text-black text-center leading-[13px] box-border pt-[11px] before:block before:mx-auto before:mb-[4px] ${
                    page.pathname == currPath && active
                  }`}
                  href={page.pathname}
                >
                  <div className="relative w-[24px] h-[24px] mx-auto mb-[4px] overflow-hidden">
                    <Image
                      className={`absolute ${
                        currPath == page.pathname ? "top-0" : "bottom-0"
                      }`}
                      src={page.tab_icon}
                      width={48}
                      height={96}
                      alt={page.name}
                    />
                  </div>
                  {page.tab_name || page.name}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
