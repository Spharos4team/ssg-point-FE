"use client";
import { useEffect } from "react";
import Button from "../atoms/Button/Button";
import { Checkbox } from "../atoms/Checkbox";
import Dropdown from "../atoms/Dropdown";
import { InputText } from "../atoms/InputText";
import { useFormContext } from "../hooks/FormProvider";

const AffiliForm = () => {
  const { valueList } = useFormContext();

  const isAgreeInputStyle = `border-0 rounded-lg text-center ${
    !valueList["isAgree"] ? "bg-[#eeeeee]" : ""
  }`;

  useEffect(() => {
    console.log(valueList["isAgree"]);
  }, [valueList]);

  const 제휴멤버십 = [
    "제휴사를 선택하세요.",
    "삼성전자 포인트",
    "대한항공 마일리지",
    "아시아나마일리지",
  ];
  return (
    <>
      <div className="bg-[#fbfbfb] p-5 border-b border-[#e8e8e8] mb-10 text-[14px]">
        <div className="relative pb-2">
          <p className="relative pr-[22px]">
            [필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의
            <ModalButton />
          </p>
        </div>
        <Checkbox
          type="form"
          id="isAgree"
          name="동의합니다."
          className="text-[14px]"
        />
      </div>

      <div className="px-5 pb-10">
        <div className="pb-4 box-border">
          <p className="pb-2 text-xs">이름을 입력해 주세요.</p>
          <Dropdown
            className=""
            type="form"
            id="membership"
            mainTitle="제휴멤버십선택"
            options={제휴멤버십}
            disabled={!valueList["isAgree"] as boolean}
          />
        </div>
        <div className="pb-4 box-border">
          <p className="pb-2 text-xs">카드번호</p>
          <div
            className={`flex flex-row border rounded-lg ${
              !valueList["isAgree"] ? "bg-[#eeeeee]" : ""
            }`}
          >
            <InputText
              className={isAgreeInputStyle}
              type="form"
              id="cardNumber01"
              inputType="card"
              placeholder=""
              title="카드"
              disabled={!valueList["isAgree"] as boolean}
            />
            <div className="relative block top-[24px] min-w-[4px] h-[1px] bg-[#666] bg-[4px_auto]" />
            <InputText
              className={isAgreeInputStyle}
              type="form"
              id="cardNumber02"
              inputType="card"
              placeholder=""
              title="카드"
              disabled={!valueList["isAgree"] as boolean}
            />
            <div className="relative block top-[24px] min-w-[4px] h-[1px] bg-[#666] bg-[4px_auto]" />
            <InputText
              className={isAgreeInputStyle}
              type="form"
              id="cardNumber03"
              inputType="card"
              placeholder=""
              title="카드"
              disabled={!valueList["isAgree"] as boolean}
            />
            <div className="relative block top-[24px] min-w-[4px] h-[1px] bg-[#666] bg-[4px_auto]" />
            <InputText
              className={isAgreeInputStyle}
              type="form"
              id="cardNumber04"
              inputType="card"
              placeholder=""
              title="카드"
              disabled={!valueList["isAgree"] as boolean}
            />
          </div>
        </div>

        <Button backgroundColor="primary" className="h-12">
          등록하기
        </Button>
      </div>
    </>
  );
};

export default AffiliForm;

const ModalButton = ({ onClick }: { onClick?: () => {} }) => {
  return (
    <button
      className="absolute right-0 top-0 w-[24px] h-[22px]"
      onClick={onClick}
    >
      <span className="block w-[24px] h-[100%] text-[0] indent-[-9999em] relative bg-[url('/images/arrow_down.png')] bg-[position:right_8px_bottom] bg-no-repeat bg-[9px_auto] opacity-[.5] rotate-[-90deg] box-border">
        내용보기
      </span>
    </button>
  );
};
