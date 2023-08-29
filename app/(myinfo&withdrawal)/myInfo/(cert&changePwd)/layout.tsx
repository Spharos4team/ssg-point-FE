import ContentHeader from "@/components/atoms/ContentHeader";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import NoticeBox from "@/components/modules/NoticeBox";
import { PageProp } from "@/types/LinkProps";

const pagesInMy: PageProp[] = [
  {
    _id: 5,
    _href: "/withdrawal/leavePassword",
    name: "회원 탈퇴",
  },
];

export default function CertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContentHeader
        main={<strong className="font-medium">본인인증</strong>}
        sub="개인정보를 보호를 위해 본인인증을 진행하고 있습니다. 자주 사용하시는 인증수단을 선택해주세요."
      />
      {/* <div className="p-0">
      TODO: url 변경 없이 화면 렌더링 tabBox/tabBoxForGradi 같은거 다른 거 만들기
        <TabBoxSimple>
          <TabForTabBox href="/myInfo/serviceAgree">서비스 동의</TabForTabBox>
          <TabForTabBox href="/myInfo/clubAgree">클럽 동의</TabForTabBox>
        </TabBoxSimple>
      </div> */}

      {children}
    </>
  );
}
