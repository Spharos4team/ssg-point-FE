<<<<<<< HEAD
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
=======
import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function EventsLayout({
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
<<<<<<< HEAD
      <TabBarTopCont pages={pagesInEvents} />
=======
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "진행 이벤트",
          "종료 이벤트",
          "당첨 확인",
        ])}
        activeTab="underline-primary"
        activeColor="benefits"
        justify="between"
        hideByScroll
      />
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
      {children}
    </>
  );
}
