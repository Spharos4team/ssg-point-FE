import Dropdown from "@/components/atoms/Dropdown";
import ListForHistory, {
  PointListType,
} from "@/components/atoms/ListForHistory";
import PointBox from "@/components/modules/PointBox";
import RadioCard2 from "@/components/atoms/RadioCard2";
import HistoryList from "@/components/modules/HistoryList";
import RadioCardGroup2 from "@/components/modules/RadioCardGroup2";
import { RadioProvider } from "@/components/modules/RadioContext";

export default function pntHistory() {
  const searchReceiptIcon =
    "before:content-[''] before:absolute before:left-0 before:top-1/2 before:mt-[-20px] before:w-10 before:h-10 before:bg-[url('/images/icon_search_receipt.png')] before:bg-no-repeat before:bg-[100%_auto]";
  const arrowIcon =
    "after:relative after:inline-block after:content-[''] after:w-[6px] after:h-[10px] after:ml-[5px] after:bg-[url('/images/icon_back.png')] after:rotate-180 after:bg-[100%_auto]";

  const historySortList = {
    valueName: "sortHistory",
    innerHtml: {
      1: "전체",
      2: "적립/사용",
      3: "선물",
      4: "전환",
    } as { [key: number]: string },
  };

  const dropdownForHistory = {
    dropdownTitle: "pntHistory",
    dropdownOptions: ["1주일", "1개월", "3개월", "6개월", "직접입력"],
    dropdownInitial: 2,
  };

  const pointExample: PointListType[] = [
    {
      historyTag: "이벤트적립",
      pntValue: 1,
      pntInfo: {
        title: "신세계포인트닷컴",
        sub: "[APP] 럭키룰렛 포인트 지급",
      },
      pntDate: "2023-08-14",
    },
    {
      historyTag: "이벤트적립",
      pntValue: 1,
      pntInfo: {
        title: "신세계포인트닷컴",
        sub: "[APP] 출석체크 포인트 지급",
      },
      pntDate: "2023-08-08",
    },
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
      <h3 className="hidden">포인트 내역</h3>
      <PointBox type="simpleBox" />

      <div className="bg-[#fcebf1] h-[65px]">
        <div
          className={`relative w-[308px] box-border mx-auto p-3 pl-14 h-full ${searchReceiptIcon}`}
        >
          <p className="text-[13px] font-medium leading-[21px] text-[#d9044b]">
            내가 어디서 뭘 샀더라
          </p>
          <button className={`text-xs leading-5 ${arrowIcon}`}>
            신세계포인트 영수증 한 번에 모아보기
          </button>
        </div>
      </div>

      {/* point history box */}
      <div className="px-5 pt-[25px] pb-[60px]">
        <RadioProvider>
          <RadioCardGroup2
            title={"test"}
            radioType="tabList"
            theme="BlackActiveBottomLine"
            defaultValue="전체"
          >
            {Object.keys(historySortList.innerHtml).map((key) => (
              <RadioCard2
                key={key}
                id={`test_${key}`}
                value={historySortList.innerHtml[parseInt(key)]}
              >
                {historySortList.innerHtml[parseInt(key)]}
              </RadioCard2>
            ))}
          </RadioCardGroup2>
        </RadioProvider>
        {/* TODO: 위 Radio의 값에 따라 아래 div내 표시되는 요소를 다르게 */}

        {/* TODO: HisotryList 추가 */}
        <HistoryList dropdown={dropdownForHistory}>
          {pointExample.map((point, index) => (
            <ListForHistory key={index} point={point} />
          ))}
        </HistoryList>
      </div>
    </>
  );
}
