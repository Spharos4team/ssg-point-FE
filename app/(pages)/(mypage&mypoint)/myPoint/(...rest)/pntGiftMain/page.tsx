import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import ListForHistory, {
  PointListType,
} from "@/components/atoms/ListForHistory";
import HistoryList from "@/components/modules/HistoryList";

export default function pntGiftMain() {
  const dropdownForHistory = {
    dropdownTitle: "pntHistory",
    dropdownOptions: {
      1: "1주일",
      2: "1개월",
      3: "3개월",
      4: "6개월",
      5: "직접입력",
    },
    dropdownInitial: 2,
  };

  const pointExample: PointListType[] = [
    {
      historyTag: "선물적립",
      pntValue: 10,
      pntInfo: {
        title: "권*(ID:ks*******)",
        sub: "받은 선물: 수락",
      },
      pntDate: "2023-08-02",
    },
  ];
  return (
    <>
      <ButtonPrimary className="py-10" round="rounded-lg">
        선물하기
      </ButtonPrimary>

      <div className="px-5 pb-10">
        {/* TODO: 스타일 설정 */}
        <HistoryList dropdown={dropdownForHistory}>
          {pointExample.map((point, index) => (
            <ListForHistory key={index} point={point} />
          ))}
        </HistoryList>
      </div>
    </>
  );
}
