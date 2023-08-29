import ContentStrong from "../atoms/ContentStrong";
import ListForNoticeBox from "../atoms/ListForNoticeBox";
import ToggleCard from "../modules/ToggleCard";
import CollapseForMomKidsInClub from "./CollapseForMomKidsInClub";
import Button from "../atoms/Button/Button";

const ClubContentMomKids = () => {
  return (
    <>
      <ContentStrong>맘키즈 클럽</ContentStrong>
      <ToggleCard
        title="[선택] 맘키즈 클럽 혜택을 위한 부가 정보 수집 및 이용 동의"
        toggleId="toggle04"
        modified=""
      />

      {/* 맘키즈 정보 Collapse */}
      <CollapseForMomKidsInClub />

      <ul className="pt-[16px] pb-6 px-6">
        <ListForNoticeBox level={2}>
          맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          자녀 정보는 최대 2명까지 입력하실 수 있습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          {
            "맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.<br />(온·오프라인 옴니동의 시 SSG.COM 이용 가능)"
          }
        </ListForNoticeBox>
      </ul>

      <Button className="h-12" backgroundColor="primary">
        확인
      </Button>
    </>
  );
};

export default ClubContentMomKids;
