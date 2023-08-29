import ListForNoticeBox from "../atoms/ListForNoticeBox";
import { FormProvider } from "../hooks/FormProvider";
import NoticeBox from "../modules/NoticeBox";
import UserCert from "../organisms/UserCert";

const UserCertPage = () => {
  return (
    <>
      <div className="">
        <FormProvider>
          <UserCert />
        </FormProvider>

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
      </div>
    </>
  );
};

export default UserCertPage;
