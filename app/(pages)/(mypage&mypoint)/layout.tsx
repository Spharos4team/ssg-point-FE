import TabBarTopCont from "@/app/components/layout/tabbar/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";

const pagesInMy: PageProp[] = [
  {
    _id: 1,
    _href: "/myPoint/pntHistory",
    name: "포인트 내역",
  },
  {
    _id: 2,
    _href: "/myPoint/cardManage",
    name: "포인트 카드 관리",
  },
  {
    _id: 3,
    _href: "/myPoint/regAffiliatePntCard",
    name: "제휴포인트 카드 관리",
  },
  {
    _id: 4,
    _href: "/myPoint/pntGiftMain",
    name: "포인트 선물",
  },
  {
    _id: 5,
    _href: "/myPoint/convertPntList",
    name: "포인트 전환",
  },
  {
    _id: 6,
    _href: "/myPoint/savePoint",
    name: "영수증으로 적립",
  },
  {
    _id: 7,
    _href: "/myPoint/chgPntPwdCert",
    name: "포인트 비밀번호 변경",
  },
];

export default function IngEventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12">
      <TabBarTopCont pages={pagesInMy} />
      {children}
    </div>
  );
}
