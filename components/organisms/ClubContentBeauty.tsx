import ContentStrong from "../atoms/ContentStrong";
import ListForNoticeBox from "../atoms/ListForNoticeBox";
import NoticeBox from "../modules/NoticeBox";
import ToggleCard from "../modules/ToggleCard";
import Button from "../atoms/Button/Button";

const brandList: { [key: number]: string } = {
  1: "아모레퍼시픽",
  2: "이자녹스",
  3: "더샘",
  4: "수려한",
  5: "토니모리",
  6: "더페이스샵",
  7: "이니스프리",
  8: "비욘드",
  9: "미샤",
  10: "엔프라니",
  11: "네이처리퍼블릭",
};

const ClubContentBeauty = () => {
  return (
    <>
      <ContentStrong>뷰티 클럽</ContentStrong>
      <ToggleCard
        title="뷰티 클럽 가입"
        toggleId="toggle08"
        modified=""
        detail={false}
      />
      <NoticeBox className="!p-5" type="strong" title="해당 브랜드">
        {Object.entries(brandList).map((value) => (
          <ListForNoticeBox
            key={value[0]}
            className="inline-block w-1/3"
            level={1}
          >
            {value[1]}
          </ListForNoticeBox>
        ))}
      </NoticeBox>

      <ListForNoticeBox className="inline-block mt-4 mb-6 mx-5" level={2}>
        이마트 매장에서 브랜드 화장품 구매 시 신세계포인트 2~5% 추가 적립 혜택을
        받으실 수 있습니다.
      </ListForNoticeBox>

      <Button className="px-5" backgroundColor="primary">
        확인
      </Button>
    </>
  );
};

export default ClubContentBeauty;
