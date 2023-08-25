"use client";
import Barcode from "@/utils/Barcode/Barcode";
import Link from "next/link";
import { useState } from "react";
import Modal from "../atoms/Modal";

const PointBox = ({
  type = "simpleBox",
}: {
  type?: "simpleBox" | "barcodeBox" | "simpleCard";
}) => {
  // 모달을 Context로 관리할까?
  const [modal, setModal] = useState(false);
  const barcodeNumber = "9350120018755220";
  const pointIcon =
    "after:content-[''] after:inline-block after:bg-[url('/images/point_gradi.png')] after:bg-[100%_auto] after:ml-[7px]";
  return (
    <>
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
              <button
                className="ml-auto w-4 h-4 bg-[url('/images/icon_info.png')] bg-[100%_auto] bg-no-repeat"
                onClick={() => setModal(true)}
              >
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

      {/* Modals */}
      <Modal modal={modal} onClick={setModal} title="신세계포인트 상세 안내">
        {/* TODO: 콘텐츠 리스트 컴포넌트로 대체: 이미 있는 걸로 안다.*/}
        <div className="px-5 pb-5">
          <p className="mb-1 text-sm leading-6">사용 가능 포인트</p>
          <p className="text-xs leading-5 text-[#767676] break-keep pt-2 mb-4">
            신세계포인트 가맹점에서 사용할 수 있도록{" "}
            <span className="!text-black">사용 가능 상태로 전환된 포인트</span>
            입니다.
          </p>
          <p className="mb-1 text-sm leading-6">적립 예정 포인트</p>
          <p className="text-xs leading-5 text-[#767676] break-keep pt-2 mb-4">
            결제 시 적립된 포인트로,{" "}
            <span className="!text-black">내일부터 사용할 수 있는 포인트</span>
            입니다.
          </p>
          <p className="mb-1 text-sm leading-6">소멸 예정 포인트</p>
          <ul>
            <li className="relative text-xs leading-5 text-[#767676] pl-[7px] tracking-[-.5px]">
              신세계포인트의 유효기간은{" "}
              <span className="!text-black">적립일로부터 24개월</span>
              이며,{" "}
              <span className="!text-black">
                사용되지 않은 포인트는 매월 1일에 소멸
              </span>
              됩니다.
            </li>
            <li className="relative text-xs leading-5 text-[#767676] pl-[7px] tracking-[-.5px]">
              <span className="!text-black">
                소멸 예정일 전까지 사용해 주세요.
              </span>
              <br />
              (예를 들어, 10월 1일 소멸 예정 포인트는 9월 30일까지 사용
              가능합니다.)
            </li>
            <li className="relative text-xs leading-5 text-[#767676] pl-[7px] tracking-[-.5px]">
              매월 1일 기준으로 소멸 예정 포인트가 조회되며, 포인트 사용 여부와
              상관없이 월 단위로 반영됩니다.
            </li>
            <li className="relative text-xs leading-5 text-[#767676] pl-[7px] tracking-[-.5px]">
              소멸 예정 포인트가 0보다 큰 경우에만 실제 소멸이 발생하며, 0 또는
              마이너스인 경우에는 소멸되지 않습니다.
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default PointBox;
