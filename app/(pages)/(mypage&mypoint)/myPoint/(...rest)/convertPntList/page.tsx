import RoundedButton from "@/components/atoms/Button/RoundedButton";
import Link from "next/link";

export default function ConvertPntList() {
  const pinkArrowBefore =
    "before:content-[''] before:absolute before:top-[39px] before:left-[calc(20px+25%)] before:ml-[-9px] before:w-[18px] before:h-[14px] before:bg-[url('/images/arrow_right_pink.png')] before:bg-no-repeat before:bg-[100%_auto]";
  const pinkArrowAfter =
    "after:content-[''] after:absolute after:top-[39px] after:right-[calc(20px+25%)] after:mr-[-9px] after:w-[18px] after:h-[14px] after:bg-[url('/images/arrow_right_pink.png')] after:bg-no-repeat after:bg-[100%_auto]";
  const pointList =
    "relative inline-block box-border w-[80px] h-[103px] before:content-[''] before:block before:w-[80px] before:h-[80px] before:mb-2 before:bg-[url('/images/cnvrt_pntList.png')] before:bg-no-repeat before:bg-[258px_auto] before:bg-[]";
  const pointSpan = "block text-[11px] leading-[19px]";
  return (
    <>
      <div className="pb-10">
        <div
          className={`relative mt-6 max-w-[320px] mx-auto ${pinkArrowBefore} ${pinkArrowAfter}`}
        >
          <ol className="text-center space-x-10">
            <li
              className={`${pointList} before:left-[calc(10px-12%)] before:bg-left-bottom`}
            >
              <span className={`${pointSpan}`}>포인트 선택</span>
            </li>
            <li className={`${pointList} before:bg-top`}>
              <span className={`${pointSpan}`}>포인트 입력</span>
            </li>
            <li className={`${pointList} before:bg-right-top`}>
              <span className={`${pointSpan}`}>포인트 전환</span>
            </li>
          </ol>
        </div>

        <div className="pt-10">
          <RoundedButton backgroundColor="pink">한 번에 조회하기</RoundedButton>
        </div>
      </div>

      <div className="pb-10">
        <ul className="first:border-t last::border-b border-[#e8e8e8]">
          <li className="relative border-b bg-white">
            {/* 컴포넌트 분리 */}
            <div className="block w-full h-[75px]">
              <input
                className="absolute left-[2px] top-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] outline-none appearance-none"
                type="radio"
                id="convertPointList"
                name="convertPntList"
              />
              <label
                htmlFor="convertPointList"
                className="relative table w-full h-[75px] box-border pr-[30px] pl-[82px] bg-[20px] bg-[length:50px_50px] bg-no-repeat bg-[url('/images/samsung_pnt.png')]"
              >
                <span className="table-cell align-middle text-[16px] leading-[26px] text-left pb-[1px]">
                  삼성카드 포인트
                </span>
              </label>
            </div>
            <span className="absolute right-[30px] top-1/2 mt-[-7px] z-[2]">
              <Link
                href={""}
                className="relative text-sm leading-[18px] text-[#767676] pr-[10px]
                after:absolute after: after:bg-[url('/images/arrow_right_gray.png')]"
              >
                조회하기
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
