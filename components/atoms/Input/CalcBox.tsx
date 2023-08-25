const CalcBox = () => {
  return (
    <div className="relative">
      <div className="relative inline-block">
        <label
          className="absolute table left-0 top-0 box-border w-[calc(100%-45px)] px-4 text-sm leading-6 text-[#767676]"
          htmlFor="searchDate01"
        >
          <span className="absolute z-[-1] w-[1px] h-[1px] border-0 overflow-hidden table-cell text-left break-keep">
            조회 시작 년-월-일
          </span>
        </label>
        <input
          className="block w-[calc(100%-45px)] h-10 text-[14px] px-4 box-border border border-[#e8e8e8] rounded-lg"
          placeholder="2023-07-25"
          id="searchDate"
          type="text"
          readOnly
        />
      </div>
      <button className="absolute right-0 top-0 w-10 h-10 border border-[#bcbcbc] indent-[-999em] bg-white rounded-lg after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[length:20px_auto] after:bg-center after:bg-[url('/images/icon_calendar.png')] after:bg-no-repeat"></button>
    </div>
  );
};

export default CalcBox;
