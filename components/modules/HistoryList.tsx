import { title } from "process";
import Dropdown from "../atoms/Dropdown";
import ListForHistory from "../atoms/ListForHistory";
import { Category } from "@/types/CategoryProps";

type DropdownType = {
  dropdownTitle: string;
  dropdownOptions: { [key: number]: string } | Category[] | string[];
  dropdownInitial: number;
};
//TODO: Dropdown 컴포넌트 수정 반영해야됨. options...
const HistoryList = ({
  dropdown,
  children,
}: {
  dropdown: DropdownType;
  children: React.ReactNode;
}) => {
  const { dropdownTitle, dropdownInitial, dropdownOptions } = dropdown;

  const plusIcon =
    "before:content-[''] before:rounded-[50%] before:inline-block before:w-4 before:h-4 before:bg-[url('/images/icon_plus.png')] before:bg-no-repeat before:bg-[#ea035c] before:bg-center before:bg-[8px_auto]";

  return (
    <>
      <div className="flex relative py-[14px] items-center justify-between gap-1">
        <div className="relative">
          <Dropdown
            id={dropdownTitle + "_dropdown_filter"}
            title={dropdownTitle}
            options={dropdownOptions}
            theme="mini"
            initialValue={dropdownInitial}
          />
        </div>

        {/* TODO: 필터 레이어로부터 값을 전달받아야함 */}
        <div className="text-xs w-[calc(100%-118px)] box-border">
          <p>2023-07-20 ~ 2023-08-20</p>
        </div>

        <button className="relative inline-block pr-4 after:content-[''] after:inline-block after:w-5 after:h-[19px] after:bg-[url('/images/icon_filter.png')] after:bg-[100%_auto]">
          <span className="hidden ">필터</span>
        </button>
      </div>

      {/* total */}
      <div>
        <div className="flex gap-6 items-center bg-[#f8f8f8] box-border h-9 px-2">
          <p
            className={`flex gap-1.5 items-center w-auto text-[#ea035c] text-[13px] leading-[21px] font-medium box-border
            ${plusIcon}`}
          >
            <span>적립</span>
            <span>12p</span>
          </p>

          <p
            className="flex gap-1.5 items-center text-[13px] leading-[21px] font-medium box-border
            before:content-[''] before:rounded-[50%] before:inline-block before:w-4 before:h-4 before:bg-[url('/images/icon_minus.png')] before:bg-no-repeat before:bg-center before:bg-[100%_auto]"
          >
            <span>사용</span>
            <span>0P</span>
          </p>
        </div>

        {/* 포인트 히스토리 */}
        <ul className="pr-[5px] pl-2">{children}</ul>
      </div>
    </>
  );
};

export default HistoryList;
