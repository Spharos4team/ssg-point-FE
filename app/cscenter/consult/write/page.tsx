"use client";
<<<<<<< HEAD
import RoundedButton from "@/components/atoms/Button/RoundedButton";
import Dropdown from "@/components/atoms/Dropdown";
import { InputText } from "@/components/atoms/InputText";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";

import Category from "@/datas/category.data.json";
import { useState } from "react";

export default function WritePage({}) {
  const [textCount, setTextCount] = useState(0);
  return (
    <>
      <div className="px-5 py-10">
        <div className="pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">이름</p>
          <InputText
            className="rounded-lg"
            title="상담자 이름"
            id="이름"
            inputType="text"
            placeholder="조*일"
            disabled
          />
        </div>

        <div className="pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">
            연락처
            <span className="text-[#666] font-bold">
              {" "}
              (필수 기재 사항이 아닙니다.)
            </span>
          </p>
          <InputText
            className="rounded-lg"
            title="상담자 이름"
            id="전화번호"
            inputType="text"
            placeholder="010-4916-8999"
            disabled
          />
        </div>

        <div className="pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">유형*</p>
          <div className="flex gap-2">
            <Dropdown
              type="category"
              id=""
              mainTitle="대분류"
              subTitle="소분류"
              options={Category}
=======
import Button from "@/components/atom/Button";
import Dropdown from "@/components/atom/Dropdown";
import Input from "@/components/atom/Input";
import ListBody from "@/components/atom/ListBody";
import ListItem from "@/components/atom/ListItem";
import TabPannel from "@/components/atom/TabPannel";
import { useSession } from "next-auth/react";

export default function CunsultWritePage() {
  const session = useSession();
  return (
    <>
      <TabPannel className="px-5" id="ConsultTab" label="consultWrite">
        <Input
          className="rounded-lg"
          id="consultUserName"
          title={`이름`}
          disabled
        >
          {session.data?.user?.name}
        </Input>

        <Input
          className="rounded-lg"
          id="consultUserName"
          title={
            <>
              {`연락처 `}
              <span className="text-gray-700 font-bold">
                (필수 기재 사항이 아닙니다.)
              </span>
            </>
          }
        >
          {session.data?.user.user.phone2}
        </Input>

        <div className="">
          <p className="text-[13px]">유형</p>
          <div className="flex justify-between w-full gap-x-2">
            <Dropdown
              className="flex-1 h-12 w-full border rounded-lg"
              wrapper="flex-1"
              id="ConsultTypeMain"
              options={[]}
            />
            <Dropdown
              className="flex-1 h-12 w-full border rounded-lg"
              wrapper="flex-1"
              id="ConsultTypeSub"
              options={[]}
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
            />
          </div>
        </div>

<<<<<<< HEAD
        <div className="pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">제목*</p>
          <InputText
            className="rounded-lg"
            title="상담 제목"
            id="제목"
            inputType="text"
            placeholder="제목을 입력해 주세요.(50자 이내)"
          />
        </div>

        {/* TODO: textarea 글자 입력 상태 */}
        <div className="relative pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">내용*</p>
          <textarea
            className="block w-full h-52 box-border border rounded-lg border-[#e8e8e8] resize-none text-[14px] leading-[24px] py-3 px-4"
            name="content"
            id="cetent"
            maxLength={10000}
          ></textarea>
          <label
            htmlFor="content00"
            className="absolute table left-[-26px] top-12 box-border w-full h-12 px-12 text-sm text-[#767676]"
          >
            <span className="table-cell align-middle text-left text-sm leading-6 break-keep">
              {" "}
              문의하실 내용을 입력해 주세요.
              <br /> 최대 10,000자까지 입력가능합니다.
              <br /> ※ 기재 시 주민등록번호 등 개인정보가
              <br /> 포함되지 않도록 유의하시기 바랍니다.{" "}
            </span>
          </label>
          <span className="absolute right-4 bottom-6 text-xs text-[#666]">
            {textCount}/10,000자
          </span>
        </div>

        <ul className="space-y-2 text-xs">
          <ListForNoticeBox level={2} isBullet>
            * 표는 필수입력 사항입니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            문의 사항 답변 완료 시 APP PUSH로 답변 완료 알림을 드립니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            통화로 답변 받기를 원하시는 경우 연락처 정보를 입력해 주세요.
          </ListForNoticeBox>
        </ul>
      </div>

      <div className="flex justify-between gap-2 px-5 pb-16">
        <RoundedButton className="w-full h-12">취소</RoundedButton>
        <RoundedButton className="w-full h-12" backgroundColor="primary">
          저장
        </RoundedButton>
      </div>
=======
        <Input
          className="rounded-lg"
          id="consultTitle"
          title={`제목`}
        >{`제목을 입력해 주세요.(50자 이내)`}</Input>

        <>
          <p className="text-[13px]">내용</p>
          <div className="relative w-full" data-state>
            <label
              className="py-3 px-4 absolute table left-0 top-0 box-border w-full h-12 px-[16px] text-[#767676] text-[14px] leading-[24px] peer-focus:opacity-0 transition-opacity peer-data-[state]:hidden"
              htmlFor="consultTextArea"
            >
              <span className="align-middle text-left break-all leading-5">
                {
                  <>
                    문의하실 내용을 입력해주세요.
                    <br />
                    최대 10,000자까지 입력가능합니다.
                    <br />
                    ※기재 시 주민등록번호 등 개인정보가
                    <br />
                    포함되지 않도록 유의하시기 바랍니다.
                  </>
                }
              </span>
            </label>
            <span className="absolute text-xs right-[15px] bottom-[15px] text-gray-400">
              ({`0`}/10,000 자)
            </span>
            <textarea
              className="w-full h-[200px] border rounded-lg resize-none caret-cscenter focus-visible:relative peer"
              name="consultTextArea"
              id="consultTextArea"
              maxLength={10000}
            ></textarea>
          </div>

          <ListBody className="space-y-1">
            <ListItem className="!text-xs text-gray-500" bullet>
              <span className="text-[#be5e00]">*</span> 표는 필수입력
              사항입니다.
            </ListItem>
            <ListItem className="!text-xs text-gray-500" bullet>
              문의 사항 답변 완료 시 APP PUSH로 답변 완료 알림을 드립니다.
            </ListItem>
            <ListItem className="!text-xs text-gray-500" bullet>
              통화로 답변 받기를 원하시는 경우 연락처 정보를 입력해 주세요.
            </ListItem>
          </ListBody>

          <div className="py-10 flex gap-x-2">
            <Button className="text-gray-500">취소</Button>
            <Button bgColor="primary">저장</Button>
          </div>
        </>
      </TabPannel>

      <TabPannel className="px-0" id="ConsultTab" label="consultHistory">
        test2
      </TabPannel>
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
    </>
  );
}
