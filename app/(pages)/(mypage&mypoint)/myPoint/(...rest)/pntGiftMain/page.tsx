import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import ListForHistory, {
  PointListType,
} from "@/components/atoms/ListForHistory";
import HistoryList from "@/components/modules/HistoryList";
import RoundedButton from "@/components/atoms/Button/RoundedButton";

export default function pntGiftMain() {
  const dropdownForHistory = {
    dropdownTitle: "pntHistory",
    dropdownOptions: ["1주일", "1개월", "3개월", "6개월", "직접입력"],
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
      <div className="flex justify-center">
        <RoundedButton className="h-[48px] w-[93%] " backgroundColor='primary'>
          선물하기
        </RoundedButton>
      </div>

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
