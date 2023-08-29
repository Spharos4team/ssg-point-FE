import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import CertLayout from "@/app/(pages)/(myinfo&withdrawal)/myInfo/(cert&changePwd)/layout";
import UserCertPage from "@/components/pages/UserCertPage";
import ContentHeader from "@/components/atoms/ContentHeader";
import UserCert from "@/components/organisms/UserCert";
import NoticeBox from "@/components/modules/NoticeBox";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";

export default function TempCardCert() {
  return (
    <>
      <ContentHeader
          main={<strong className="font-medium">본인인증</strong>}
          sub="개인정보를 보호를 위해 본인인증을 진행하고 있습니다. 자주 사용하시는 인증수단을 선택해주세요."
      />
      <div className="px-5">
        <UserCert />
        <NoticeBox type="info" title="유의사항">
          <ListForNoticeBox isBullet={true} level={2}>
            본인 명의의 인증 수단 정보를 정확히 입력해 주세요.
          </ListForNoticeBox>
          <ListForNoticeBox isBullet={true} level={2}>
            법인명의 휴대폰(법인폰)는 통신사에서 본인인증 서비스 신청 후 휴대폰
            인증을 하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox isBullet={true} level={2}>
            인증 오류 시 코리아크레딧뷰로 고객센터 02-708-1000에 문의해 주세요.
          </ListForNoticeBox>
        </NoticeBox>
      </div>
    </>
  );
}
