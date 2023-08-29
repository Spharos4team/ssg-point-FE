import BodyNavTop from "@/components/atoms/BodyNavTop";
import TabBarTopCont from "@/components/templates/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";

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
      {children}
    </>
  );
}
