<<<<<<< HEAD
import TabBarTopCont from "@/components/templates/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";

const pagesInMy: PageProp[] = [
  {
    _id: 1,
    _href: "/benefits/pntPlus/attend",
    name: "포인트 플러스",
  },
  {
    _id: 2,
    _href: "/benefits/benefitMyLuck",
    name: "나의 운세보기",
  },
  {
    _id: 3,
    _href: "/benefits/myCoupon",
    name: "마이 쿠폰함",
  },
  {
    _id: 4,
    _href: "/benefits/myEvent",
    name: "마이 이벤트",
  },
  {
    _id: 5,
    _href: "/benefits/pntTip",
    name: "포인트 꿀팁",
  },
];

export default function PntPlusLayout({
=======
import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function BenefitsLayout({
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <div className="mt-12">
      <TabBarTopCont pages={pagesInMy} />
      {children}
    </div>
=======
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "포인트 플러스",
          "나의 운세보기",
          "마이 쿠폰함",
          "마이 이벤트",
          "포인트 꿀팁",
        ])}
        activeTab="underline-primary"
        activeColor="benefits"
        justify="start"
        hideByScroll
      />
      {children}
    </>
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
  );
}
