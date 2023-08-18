import ContentHeader from "@/app/components/atoms/ContentHeader";
import ListForNoticeBox from "@/app/components/atoms/ListForNoticeBox";
import TabForTabBox from "@/app/components/atoms/TabForTabBox";
import NoticeBox from "@/app/components/modules/NoticeBox";
import TabBoxSimple from "@/app/components/modules/TabBoxSimple";
import { PageProp } from "@/types/LinkProps";

const pagesInMy: PageProp[] = [
  {
    _id: 5,
    _href: "/withdrawal/leavePassword",
    name: "회원 탈퇴",
  },
];

export default function ServiceAndClubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pb-10">
        <ContentHeader
          main={<strong className="font-medium">서비스 동의 관리</strong>}
          sub="신세계포인트의 다양한 서비스 혜택을 받을 수 있습니다."
        />
        <TabBoxSimple>
          <TabForTabBox href="/myInfo/serviceAgree">서비스 동의</TabForTabBox>
          <TabForTabBox href="/myInfo/clubAgree">클럽 동의</TabForTabBox>
        </TabBoxSimple>

        {children}
      </div>
      <NoticeBox className="mt-[-80px]" title="유의사항">
        <ListForNoticeBox level={2}>
          관련 법령에 의거하여 동의는 언제든지 수정하실 수 있습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          스위치를 클릭하여 활성화 모드이면 동의한 것으로, 비활성화 모드이면
          거절한 것으로 반영됩니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          SSG.COM 가입을 하셔야 통합 서비스 제공이 가능하며, SSG.COM 휴면회원이
          되시면 개인정보는 제공되지 않습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={5}>
          개인정보 제3자 제공 및 활용 동의에 동의하지 않으시더라도
          신세계포인트의 기본 서비스는 이용하실 수 있습니다.
        </ListForNoticeBox>
        {/* TODO: br 태그는 view에 반영되지만, dangerouslySetInnerHTML로 전달받아야한다. */}
        <ListForNoticeBox level={2}>
          이마트 또는 신세계백화점을 통해 신세계 유니버스 클럽에 가입한 회원의
          경우, 해당 클럽을 먼저 탈회해 주셔야 각 사이트 이용 동의 철회가
          가능합니다.
          <br />
          클럽 탈회는 가입처에 문의해 주세요.
        </ListForNoticeBox>
      </NoticeBox>
    </>
  );
}
