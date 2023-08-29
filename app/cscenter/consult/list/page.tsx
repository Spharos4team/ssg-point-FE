export default function ListPage({}) {
  return (
    <>
      <ul></ul>
      <div className="py-7">
        <p className="relative pt-16 flex justify-center text-[13px] text-[#767676] after:content-[''] after:absolute after:top-0 after:left-1/2 after:translate-x-[-50%] after:w-12 after:h-12 after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:bg-[100%_auto]">
          보유하신 제휴 신용카드가 없습니다.
        </p>
      </div>
    </>
  );
}
