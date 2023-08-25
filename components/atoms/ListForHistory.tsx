export type PointListType = {
  historyTag: "결제적립" | "이벤트적립" | "선물적립" | "영수증적립" | "전환";
  pntValue: number;
  pntInfo: { title: string; sub: string };
  pntDate: string;
};

const ListForHistory = ({ point }: { point: PointListType }) => {
  const { historyTag, pntValue, pntInfo, pntDate, receipt } = point;
  const plusIcon =
    "before:content-[''] before:rounded-[50%] before:inline-block before:w-4 before:h-4 before:bg-[url('/images/icon_plus.png')] before:bg-no-repeat before:bg-[#ea035c] before:bg-center before:bg-[8px_auto]";

  return (
    <li className="relative flex flex-wrap items-center min-h-[74px] py-[5px] border-b border-gray-400">
      <p
        className={`flex flex-wrap gap-1.5 w-[90px] text-[#ea035c] text-[13px] leading-[21px] font-medium ${plusIcon}`}
      >
        {pntValue}P
        <span className="block text-[11px] leading-[19px] font-normal break-keep basis-full pl-5 mt-[-4px]">
          {historyTag}
        </span>
      </p>

      {/* 선물인 경우에는 다른 화면 */}

      <p className="flex flex-wrap items-center px-2 text-[14px] leading-[24px]">
        {historyTag === "이벤트적립" ? (
          <>
            {pntInfo.title}
            <br />
            <span className="block text-[10px] leading-[18px] text-[#767676] w-full">
              {pntInfo.sub}
            </span>
          </>
        ) : historyTag === "선물적립" ? (
          <>
            {pntInfo.title}
          </>
        ) : historyTag === "결제적립" ? (
          <>
            <span className="block text-[14px] leading-[24px] text-[#767676] w-full">
            </span>
            {pntInfo.title}
          </>
        ) : (
          <></>
        )}
      </p>
      <div className="absolute top-[16px] right-[5px]">
        <p className="text-[11px] leading-[19px] text-[#767676] min-w-[62px]">
          {pntDate}
        </p>
        {historyTag === "결제적립" ? (
            <button className="text-[11px] text-[#767676] mt-2 border-0 border-none bg-transparent cursor-pointer align-middle bg-none
                after:mt-[1.4px] after:w-[5px] after:content-[''] after:inline-block after:align-top after:h-2.5 after:ml-[1px] after:bg-[url('/images/arrow_right_re.png') after:bg-no-repeat after:bg-[position:0px_0px]">
                영수증보기
            </button> )
        : (<></>)}
      </div>

    </li>
  );
};

export default ListForHistory;
