import TabBarTopCont from "@/app/components/layout/tabbar/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";

const pagesInMy: PageProp[] = [
  {
    _id: 1,
    _href: "/myInfo/infoRcvAgree",
    name: "광고정보 수신관리",
  },
  {
    _id: 2 - 1,
    _href: ["/myInfo/serviceAgree", "/myInfo/clubAgree"],
    name: "서비스 동의 관리",
  },
  {
    _id: 3,
    _href: "/myInfo/cert",
    name: "회원정보 수정",
  },
  {
    _id: 4,
    _href: "/myInfo/changePwd",
    name: "비밀번호 변경",
  },
  {
    _id: 5,
    _href: "/withdrawal/leavePassword",
    name: "회원 탈퇴",
  },
];

export default function MyInfoLayout({
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
