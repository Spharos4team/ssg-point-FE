"use client";
import ContentHeader from "@/components/atoms/ContentHeader";
import { PageProp } from "@/types/LinkProps";
import { usePathname } from "next/navigation";

export default function RegAffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageHeaders: PageProp[] = [
    {
      _href: "/myPoint/regAffiliatePntCard",
      name: "제휴포인트 카드 관리",
      title: (
        <>
          신세계포인트에 <span className="text-[#ea035c]">제휴사 포인트</span>
          더하기!
        </>
      ),
      subTitle:
        "이마트 제휴 멤버십 포인트 카드를 등록하면<br />신세계포인트와 제휴사 포인트를<br />모두 적립할 수 있어요.",
    },
    {
      _href: "/myPoint/pntGiftMain",
      name: "포인트 선물",
      title: (
        <>
          마음을 담아
          <br />
          <span className="text-[#ea035c]">신세계포인트를 선물</span>하세요!
        </>
      ),
      subTitle:
        "신세계포인트 회원끼리 주고받는<br />가장 실속있는 마음의 선물!<br />친구나 가족, 소중한 사람에게 선물해 보세요.",
    },
    {
      _href: "/mypoint/convertPntList",
      name: "포인트 전환",
      title: (
        <>
          여기저기 흩어져 있는 포인트를
          <br />
          신세계포인트로{" "}
          <span className="text-[#ea035c]">한 곳에 모아보세요.</span>
        </>
      ),
      subTitle:
        "알뜰하게 적립한 포인트를 모두 모아<br />자주 사용하는 포인트로 전환해 보세요.",
    },
    {
      _href: "/mypoint/convertPntList",
      name: "영수증으로 적립",
      title: (
        <>
          포인트 적립을 깜빡하셨나요?
          <br />
          <span className="text-[#ea035c]">영수증 정보만 입력해 주세요.</span>
        </>
      ),
      subTitle:
        "이마트, 신세계백화점, 이마트 에브리데이에서<br />구매하신 영수증 정보로 포인트 적립이 가능합니다.",
    },
  ];
  const currPath = usePathname();
  const currPage = pageHeaders.find((el) => el._href === currPath);

  return (
    <>
      <ContentHeader
        main={currPage?.title}
        sub={currPage?.subTitle as string}
      />
      {children}
    </>
  );
}
