import ContentStrong from '../atoms/ContentStrong';
import ListForNoticeBox from '../atoms/ListForNoticeBox';
import ToggleCard from '../modules/ToggleCard';
import CollapseForCarInClub from './CollapseForCarInClub';
import Button from '../atoms/Button/Button';

const ClubContentCarSrv = () => {
  const smallListStyle =
    "relative text-xs leading-5 tracking-[-.5px] pl-[7px] before:content-['-'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5";

  return (
    <>
      <ContentStrong>차량 서비스</ContentStrong>
      <ToggleCard
        title="[선택] 차량 서비스 제공을 위한 부가 정보 수집 및 이용동의"
        toggleId="toggle02"
        modified=""
      />
      <ToggleCard
        className="border-t"
        title="[선택] 차량서비스 제공을 위한 이마트, 신세계 공동 부가 정보 수집 및 이용동의"
        toggleId="toggle03"
        modified=""
      />

      {/* 차량 정보 Collapse */}
      <CollapseForCarInClub />

      <ul className="pt-[16px] pb-6 px-6">
        <ListForNoticeBox level={2}>
          {`이마트, 신세계백화점 방문 시 구매 내역에 따라 등록하신 차량의 주차비가 자동으로 정산됩니다.<ul><li class="${smallListStyle}">이마트 : 일부 점포 제외 (이마트앱 > 주차 > 무료주차 가능점포)</li><li class="${smallListStyle}">백화점 : 경기점, 타임스퀘어점 제외</li></ul>`}
        </ListForNoticeBox>
        <ListForNoticeBox level={1}>
          차량번호는 최대 1대까지 입력이 가능하며, 임시번호 및 외교차량 등 일부 차량번호는 등록되지
          않습니다.
        </ListForNoticeBox>
      </ul>

      <Button className="h-12" backgroundColor="primary">
        확인
      </Button>
    </>
  );
};

export default ClubContentCarSrv;
