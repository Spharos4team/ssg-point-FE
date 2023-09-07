"use client";
import TabBarTopCont from "@/components/templates/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";
import ContentHeader from "@/components/atoms/ContentHeader";
import {usePathname} from "next/navigation";

const PagesMembership: PageProp[] = [
  {
    _id: 1,
    _href: "/membership/pointId",
    name: "신세계포인트 통합 ID 관리",
  },
  {
    _id: 2,
    _href: ["/membership/club", "/membership/club/momkids", "/membership/club/momkids/detail", "/membership/club/parking", "/membership/club/parking/detail", "/membership/club/beauty", "/membership/club/biz", "/membership/club/biz/mod"],
      name: "클럽",
  },
  {
    _id: 3,
    _href: "/membership/combine",
    name: "신세계 유니버스 클럽",
  },
];

export default function MembershipLayout({
   children,
 }: {
  children: React.ReactNode;
}) {
  const pageHeaders: PageProp[] = [
    {
      _href: "/membership/pointId",
      name: "신세계포인트 통합 ID 관리",
      title: (
          <>
            신세계포인트 통합ID 하나면​
            <br/>
            <span className="text-[#04857f]">신세계가 한 손안에 쓱 -</span>
          </>
      ),
      subTitle:
          "하나의 ID로 이마트, 신세계백화점, SSG.COM 등<br/>다양한 제휴사의 혜택과 온라인 서비스를<br/>간편하게 이용하실 수 있습니다.",
    },
    {
      _href: "/membership/club",
      name: "클럽",
      title: (
          <>
            <span className="text-[#04857f]">클럽 서비스</span>
            에 가입하고<br/>다양한 혜택을 받아보세요.
          </>
      ),
      subTitle:
          "고객님의 취향에 따른 맞춤 클럽 혜택으로<br />",
    },
  ];
  const currPath = usePathname();
  const currPage = pageHeaders.find((el) => el._href === currPath);

  return (
      <div className="mt-12">
        <TabBarTopCont pages={PagesMembership} lineType="primary" activeColor="green" />
        <ContentHeader
            main={currPage?.title}
            sub={currPage?.subTitle as string}
        />
        {children}
      </div>
  );
}
