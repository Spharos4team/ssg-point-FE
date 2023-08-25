import TabBarTopCont from "@/components/layout/tabbar/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";

const pagesInLounge: PageProp[] = [
  {
    _id: 1,
    _href: "/mylounge/history",
    name: "쇼핑 히스토리",
  },
  {
    _id: 2,
    _href: "/mylounge/recommend",
    name: "추천 서비스",
  },
  {
    _id: 3,
    _href: "/mylounge/receipt",
    name: "스마트 영수증",
  },
  {
    _id: 4,
    _href: "/mylounge/findstore",
    name: "매장찾기 ",
  },
  {
    _id: 5,
    _href: "/mylounge/regularstore",
    name: "자주 찾는 매장",
  },
];

export default function IngEventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12">
      <TabBarTopCont activeColor={'red'} lineType={'primary'} pages={pagesInLounge} />
      <div>{children}</div>
    </div>
  );
}
