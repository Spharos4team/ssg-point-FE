import ContentHeader from "@/components/atoms/ContentHeader";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import TabForTabBox from "@/components/atoms/TabForTabBox";
import NoticeBox from "@/components/modules/NoticeBox";
import TabBoxSimple from "@/components/modules/TabBoxSimple";
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
      <div className="top_cnt0 px-5 py-10">
        <ContentHeader
          main={<strong className="font-medium">본인인증</strong>}
          sub="개인정보를 보호를 위해 본인인증을 진행하고 있습니다. 자주 사용하시는 인증수단을 선택해주세요."
        />
      </div>
      {/* <div className="p-0">
      TODO: url 변경 없이 화면 렌더링 tabBox/tabBoxForGradi 같은거 다른 거 만들기
        <TabBoxSimple>
          <TabForTabBox href="/myInfo/serviceAgree">서비스 동의</TabForTabBox>
          <TabForTabBox href="/myInfo/clubAgree">클럽 동의</TabForTabBox>
        </TabBoxSimple>
      </div> */}

      {children}
        <NoticeBox className="px-5" type="info" title="유의사항">
          <ListForNoticeBox isBullet={true} level={2}>
            본인 명의의 인증 수단 정보를 정확히 입력해 주세요.
          </ListForNoticeBox>
          <ListForNoticeBox isBullet={true} level={2}>
            법인명의 휴대폰(법인폰)는 통신사에서 본인인증 서비스 신청 후 휴대폰
            인증을 하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox isBullet={true} level={2}>
            개명하신 회원님의 경우 통신사 등에 등록된 본인인증 정보가 개명하신
            이름으로 바뀐 이후부터 자동으로 변경됩니다.
          </ListForNoticeBox>
          <ListForNoticeBox isBullet={true} level={2}>
            인증 오류 시 코리아크레딧뷰로 고객센터 02-708-1000에 문의해 주세요.
          </ListForNoticeBox>
        </NoticeBox>
    </>
  );
}
