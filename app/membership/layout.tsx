<<<<<<< HEAD
import TabBarTopCont from "@/components/templates/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";

const pagesInMy: PageProp[] = [
  {
    _id: 1,
    _href: "/membership/pointId",
    name: "신세계 통합 ID 관리",
  },
  {
    _id: 2,
    _href: ["/membership/club"],
    name: "클럽",
  },
  {
    _id: 3,
    _href: "/membership/combine",
    name: "신세계 유니버스 클럽",
  },
];

export default function SpointLayout({
=======
import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function MembershipLayout({
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <div className="mt-12">
      <TabBarTopCont pages={pagesInMy} lineType="primary" activeColor="brown" />
      {children}
    </div>
=======
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "신세계포인트 통합 ID 관리",
          "클럽",
          "신세계유니버스 클럽",
        ])}
        activeTab="underline-primary"
        activeColor="membership"
        justify="between"
        hideByScroll
      />
      {children}
    </>
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
  );
}
