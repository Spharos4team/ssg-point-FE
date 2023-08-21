import Barcode from "@/utils/Barcode/Barcode";
import Link from "next/link";

const PointBox = ({
  type = "simpleBox",
}: {
  type?: "simpleBox" | "barcodeBox" | "simpleCard";
}) => {
  const barcodeNumber = "9350120018755220";
  const pointIcon =
    "after:content-[''] after:inline-block after:bg-[url('/images/point_gradi.png')] after:bg-[100%_auto] after:ml-[7px]";
  return (
    <div className="bg-[#fbfbfb] p-6">
      {type === "simpleCard" ? (
        <p className="mb-4 text-center text-[14px] leading-[24px] font-medium">
          <strong>총 2건</strong>의
          <span>신세계포인트 카드를 보유하고 있습니다.</span>
        </p>
      ) : (
        <></>
      )}
      <div className="pb-[2px] mx-auto box-border h-full max-w-[327px] bg-gradient-primary-line rounded-[20px] overflow-hidden shadow-md">
        <div className="flex items-center justify-between h-10 px-4">
          <h3 className="indent-[-999em] w-[105px] h-[18px] bg-[length:100%_auto] bg-[url('/images/point_card_logo.png')] bg-no-repeat overflow-hidden">
            shinsegae point
          </h3>
          {type === "barcodeBox" ? (
            <Link
              className="inline-block items-center text-sm p-[10px] pr-0 after:inline-block after:content-[''] after:w-[6px] after:h-[10px] after:bg-[url('/images/arrow_right.png')] after:bg-[length:100%_auto] after:ml-1"
              href={"/mypoint/pntHistory"}
            >
              <span className="hidden">포인트 내역으로</span>
            </Link>
          ) : type === "simpleBox" ? (
            <button className="ml-auto w-4 h-4 bg-[url('/images/icon_info.png')] bg-[100%_auto] bg-no-repeat">
              <span className="hidden">신세계포인트 상세 안내</span>
            </button>
          ) : type === "simpleCard" ? (
            <button
              className="w-[56px] h-6 bg-[url('/images/icon_barcode.png')] bg-[100%_auto] indent-[-999em]"
              id="barcode_btn"
            >
              <span>바코드 보기</span>
            </button>
          ) : (
            <></>
          )}
        </div>

        <div className="relative bg-white rounded-[18px] w-[calc(100%-3px)] h-full box-border p-6 mx-auto">
          {type === "barcodeBox" ? (
            <>
              <strong
                className={`flex items-center text-[32px] leading-6 font-bold after:w-[44px] after:h-[41px] ${pointIcon}`}
              >
                12
              </strong>
              <div className="flex mt-2 mb-8 space-x-5">
                <p className="flex text-[#767676] text-sm">
                  내일 적립 예정
                  <span className="ml-1 text-black font-bold">0P</span>
                </p>
                <p className="flex text-[#767676] text-sm">
                  다음달 소멸 예정
                  <span className="ml-1 text-black font-bold">0P</span>
                </p>
              </div>

              <div className="barcode">
                <Barcode value={barcodeNumber} />
              </div>
            </>
          ) : type === "simpleBox" ? (
            <>
              <dl className="flex box-border w-full items-center pb-[14px]">
                <dt className="flex-[1.3] text-[13px] font-medium leading-[21px]">
                  사용가능
                </dt>
                <dd
                  className={`flex justify-end items-center text-2xl leading-[29px] font-bold after:w-[33px] after:h-[30px] ${pointIcon}`}
                >
                  12
                </dd>
              </dl>

              <dl className="flex mt-[3px]">
                <dt className="flex-[1.3] text-xs leading-5 text-left text-[#505050]">
                  {" "}
                  적립 예정{" "}
                </dt>
                <dd className="flex-[3.7] text-[13px] leading-[21px] font-bold text-right break-keep">
                  0P
                </dd>
              </dl>

              <dl className="flex mt-[3px]">
                <dt className="flex-[1.3] text-xs leading-5 text-left text-[#505050]">
                  {" "}
                  소멸 예정{" "}
                </dt>
                <dd className="flex-[3.7] text-[13px] leading-[21px] font-bold text-right break-keep">
                  <span className="flex text-left">
                    <em className="text-[#767676] text-[11px] leading-[19px] mr-auto font-normal">
                      2023-09-31
                    </em>
                    <em>0P</em>
                  </span>
                  <span className="flex text-left">
                    <em className="text-[#767676] text-[11px] leading-[19px] mr-auto font-normal">
                      2023-10-01
                    </em>
                    <em>0P</em>
                  </span>
                </dd>
              </dl>
            </>
          ) : type === "simpleCard" ? (
            <>
              <div className="pt-10">
                <p className="text-[18px] leading-[21px] font-bold">
                  {barcodeNumber.match(/.{1,4}/g)?.map((segment, index) => (
                    <>
                      {segment}
                      {index < segment.length - 1 && <span>-</span>}
                    </>
                  ))}
                </p>

                <button className="absolute top-[61px] right-5 bg-white w-[36px] h-7 box-border rounded-[4px] border border-[#bcbcbc] text-[11px]">
                  복사
                </button>
              </div>

              <dl className="flex justify-between item-center w-full box-border pt-8">
                <dt className="felx-1 my-auto text-xs leading-5 font-normal">
                  사용가능
                </dt>
                <dd className="flex gap-2 items-center text-[16px] leading-[19px] font-medium after:w-[27px] after:h-[27px] after:bg-[url('/images/point_gradi.png')] after:bg-no-repeat after:bg-[100%_auto]">
                  12
                </dd>
              </dl>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default PointBox;
