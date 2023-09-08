'use client';
import Dropdown from '../atoms/Dropdown';
import { Category } from '@/types/CategoryProps';
import Modal from '../atoms/Modal';
import { useState } from 'react';
import { Checkbox } from '../atoms/Checkbox';
import CalcBox from '../atoms/Input/CalcBox';
import Button from '../atoms/Button/Button';

type DropdownType = {
  dropdownTitle: string;
  dropdownOptions: Category[] | string[];
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
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  const { dropdownTitle, dropdownInitial, dropdownOptions } = dropdown;

  const plusIcon =
    "before:content-[''] before:rounded-[50%] before:inline-block before:w-4 before:h-4 before:bg-[url('/images/icon_plus.png')] before:bg-no-repeat before:bg-[#ea035c] before:bg-center before:bg-[8px_auto]";

  return (
    <>
      <div className="flex relative py-[14px] items-center justify-between gap-1">
        <div className="relative">
          <Dropdown id={dropdownTitle + '_filter'} options={dropdownOptions} theme="mini_inline" />
        </div>

        {/* TODO: 필터 레이어로부터 값을 전달받아야함 */}
        <div className="text-xs w-[calc(100%-118px)] box-border">
          <p>2023-07-20 ~ 2023-08-20</p>
        </div>

        <button
          className="relative inline-block pr-4 after:content-[''] after:inline-block after:w-5 after:h-[19px] after:bg-[url('/images/icon_filter.png')] after:bg-[100%_auto]"
          onClick={() => setModal(true)}
        >
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

      {/* Modal */}
      <Modal title="필터" modal={modal} fill>
        <>
          <div className="relative flex flex-1 flex-col h-auto">
            <div className="px-5 pt-6">
              <p className="text-[14px] font-medium leading-6 pb-4">조회기간</p>
              <div className="pb-4">
                <div className="flex justify-start pb-5">
                  <Checkbox className="text-[14px] pr-10" id="1w" name="1주일" />
                  <Checkbox className="text-[14px] pr-10" id="1m" name="1개월" />
                  <Checkbox className="text-[14px] pr-10" id="3m" name="3개월" />
                  <Checkbox className="text-[14px] pr-10" id="6m" name="6개월" />
                </div>
                <div className="flex justify-between pb-5">
                  <Checkbox className="text-[14px] pr-5" id="custom" name="직접입력(최대 6개월)" />
                </div>
                <div className="flex justify-between gap-x-4 mb-10">
                  <CalcBox />
                  <CalcBox />
                </div>
              </div>
              <p className="text-[14px] font-medium leading-6 pb-4">포인트 적립/사용 구분</p>
              <div className="pb-4">
                <div className="flex justify-start pb-4">
                  <Checkbox className="text-[14px] pr-5" id="allUse" name="전체" />
                  <Checkbox className="text-[14px] pr-5" id="save" name="적립" />
                  <Checkbox className="text-[14px] pr-5" id="use" name="사용" />
                </div>
              </div>
              <p className="text-[14px] font-medium leading-6 pb-4">포인트 내역 구분</p>
              <div className="pb-4">
                <div className="flex justify-start pb-4">
                  <Checkbox className="text-[14px] pr-5" id="allHistory" name="전체" />
                  <Checkbox className="text-[14px] pr-5" id="general" name="일반" />
                  <Checkbox className="text-[14px] pr-5" id="event" name="이벤트" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 px-5 pb-5">
              <Button className="h-10" onClick={handleModal}>
                취소
              </Button>
              <Button className="h-10" backgroundColor="black">
                조회
              </Button>
            </div>
          </div>
          <button
            className="absolute right-[2px] top-[6px] w-[50px] h-[50px] indent-[-999em] bg-[url('/images/icon_close.png')] bg-center bg-no-repeat bg-[length:14px_14px]"
            onClick={() => setModal(!modal)}
          >
            닫기
          </button>
        </>
      </Modal>
    </>
  );
};

export default HistoryList;
