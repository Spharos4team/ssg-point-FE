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
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12">
      <TabBarTopCont pages={pagesInMy} lineType="primary" activeColor="brown" />
      {children}
    </div>
  );
}
