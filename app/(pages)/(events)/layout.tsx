import BodyNavTop from "@/app/components/BodyNavTop";
import TabBarTopCont from "@/app/components/layout/tabbar/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";
import { usePathname } from "next/navigation";

const pagesInEvents: PageProp[] = [
  {
    _id: 1,
    _href: "/ingEvents",
    name: "진행 이벤트",
  },
  {
    _id: 2,
    _href: "/endEvents",
    name: "종료 이벤트",
  },
  {
    _id: 3,
    _href: "/winEvents",
    name: "당첨 확인",
  },
];

export default function IngEventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabBarTopCont pages={pagesInEvents} />
      <div className="mt-10">This is Layout for Events Pages</div>
      {children}
    </>
  );
}
