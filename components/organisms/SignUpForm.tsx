'use client';
import Input from '@/components/atoms/Input';
import { KEY } from '@/utils/KeyHelper';
import Button from '@/components/atoms/Button/Button';
import React, { useContext, useEffect, useState } from 'react';
import PostCodeDaum from '@/components/atoms/PostCodeDaum';
import { DaumAddressType } from '@/types/DaumAddressType';
import { useFormContext } from '@/components/hooks/FormProvider';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/provider/AppContextProvider';
import Modal from '@/components/atoms/Modal';
import { Checkbox } from '@/components/atoms/Checkbox';
import { ValueProvider } from '@/components/hooks/ValueProvider';
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";

export default function SignUpForm() {
  // input data 입력값 저장
  //     const [formData, setFormData] = React.useState({
  //         [KEY.USERID]: '',
  //         [KEY.USERPASSWORD]: '',
  //         [KEY.NAME]: '',
  //         [KEY.PHONE]: '',
  //         [KEY.POSTCODE]: '',
  //         [KEY.ADRESS]: '',
  //         [KEY.DETAILADRESS]: '',
  //     });
  //     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //         const {id, value} = e.target;
  //         console.log("Changed ID:", id);
  //         console.log("Changed Value:", value);
  //         setFormData((prev) => ({
  //             ...prev,
  //             [id]: value
  //         }));
  //     }
  const [address, setAddress] = useState<DaumAddressType[]>();
  const { appValueList, handleAppRecord } = useAppContext();

  useEffect(() => {
    if (address) {
      handleAppRecord(KEY.POSTCODE, address[0] as unknown as string);
      handleAppRecord(KEY.ADRESS, address[1] as unknown as string);

      console.log('우편번호', KEY.POSTCODE);
      console.log('전체주소', KEY.ADRESS);
      console.log(appValueList);
    }
  }, [address]);

  return (
    <>
      <div className="flex">
        {/*아이디*/}
        <div className="w-full">
          <Input
            className="rounded-lg"
            titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
            id={KEY.USERID}
            type={'text'}
            title="아이디"
          >
            {/*place holder 안사라짐*/}
            영문, 숫자 6~20자리 입력해주세요.
          </Input>
        </div>
        <Button
          backgroundColor={'white'}
          className={
            'h-12 text-sm font-normal ml-[5px] block !w-auto break-keep p-3 translate-y-[60%]'
          }
        >
          중복확인
        </Button>
      </div>
      {/*todo: 미입력시 에러메시지, 애니메이션 미입력시 박스 색 #eb0000*/}
      <p className="block text-xs leading-6 pt-1 mb-4 animate-errorTxt">
        아이디 형식에 맞게 입력해주세요.
      </p>
      {/*비밀번호*/}
      <Input
        className="rounded-lg"
        titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
        id={KEY.USERPASSWORD}
        type={'password'}
        title="비밀번호"
      >
        영문 대/소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해 주세요.
      </Input>
      {/*todo: 미입력시 에러메시지, 애니메이션 미입력시 박스 색 #eb0000*/}
      <p className="block text-xs leading-6 pt-1 mb-4 animate-errorTxt">
        아이디 형식에 맞게 입력해주세요.
      </p>
      <Input
        className="rounded-lg"
        titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
        id={KEY.USERPASSWORDCHECK}
        type={'password'}
        title="비밀번호 확인"
      >
        비밀번호 형식에 맞게 입력해주세요.
      </Input>
      {/*todo: 미입력시 에러메시지, 애니메이션 미입력시 박스 색 #eb0000*/}
      <p className="block text-xs leading-6 pt-1 mb-4 animate-errorTxt">
        비밀번호가 일치하지 않습니다.
      </p>
      {/*todo: 이름, 폰번호 전전 cert 페이지에서 데이터 가져오기*/}
      {/*이름*/}
      <Input
        className="rounded-lg mb-4"
        titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
        id={KEY.NAME}
        type={'text'}
        title="이름"
      >
        {/* 폱 번호 */}
      </Input>
      <Input
        className="rounded-lg mb-4"
        titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
        id={KEY.PHONE}
        type={'phone'}
        title="휴대폰 번호"
      >
        {/* 우편번호 */}
      </Input>
      <div className="flex mb-2">
        <div className="w-full">
          <Input
            className="rounded-lg"
            titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
            id={KEY.POSTCODE}
            type={'text'}
            title="자택주소"
            disabled
          >
            우편번호
          </Input>
        </div>
        <Button
          backgroundColor={'white'}
          className={
            'h-12 text-sm font-normal ml-[5px] block !w-auto break-all p-3 translate-y-[60%]'
          }
        >
          <PostCodeDaum setAddress={setAddress}>우편번호 찾기</PostCodeDaum>
        </Button>
      </div>
      {/*주소 찾기*/}
      <div></div>

      {/*주소*/}
      <Input className="rounded-lg mb-2" id={KEY.ADRESS} type={'text'} disabled />
      {/*상세주소*/}
      <Input className="rounded-lg mb-4" id={KEY.DETAILADRESS} type={'text'}>
        상세주소
      </Input>

        {/*광고 동의 안 할 시 modal*/}
      <Modal modal={true}>
        <strong className="block mb-2 text-[20px] leading-[30px] font-medium text-[#ea035c]">
          잠깐!
        </strong>
        <p className="font-medium leading-6 text-sm">
          신세계포인트의 각종 소식을 받아볼 수 있는
          <br />
          혜택 알림에 아직 동의하지 않으셨어요.
        </p>
        {/*todo: before:check_image listnotice*/}
        <ul className="mt-[15px] list-none ">
            <ListForNoticeBox
                level={6}
                className="font-medium"
            >
                각종 프로모션 참여 기회부여
            </ListForNoticeBox>
            <ListForNoticeBox
                level={6}
                className="font-medium mt-2"
            >
                프로모션 및 이벤트 실시간 알림
            </ListForNoticeBox>
            <ListForNoticeBox
                level={6}
                className="font-medium mt-2"
            >
                추천서비스 제공
            </ListForNoticeBox>
        </ul>
        <div className="pt-5 text-[11px]">
          <div>
            <ul className="space-y-4">
              <li className="relative flex justify-between break-words mb-4">
                <div className="relative inline-block align-top text-0">
                  <Checkbox
                    className="break-keep"
                    id="00"
                    type="basic-single"
                    name="[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 <br/> 이용 동의"
                  />
                </div>
                <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                  <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                    내용보기
                  </span>
                </button>
              </li>

              <li className="relative flex justify-between mb-4">
                <div className="relative inline-block align-top">
                  <Checkbox
                    id="01"
                    name="[선택] 이마트/신세계 공동 개인정보 수집 및 이용<br/>동의"
                    type={'basic-single'}
                  />
                </div>
                <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                  <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                    내용보기
                  </span>
                </button>
              </li>
            </ul>
            <div className="mt-[8px] ml-[11px] py-2 pl-5 border-l border-black">
              <p className="text-[14px] leading-6 mb-4">신세계포인트 광고정보 수신동의</p>
              <ValueProvider>
                <Checkbox
                  className="!block pb-4"
                  id="allCheck"
                  name="전체동의"
                  type={'basic-multi'}
                >
                  <div className="flex gap-x-4">
                    <Checkbox id="email" name="이메일" type={'basic-multi'} />
                    <Checkbox id="message" name="문자" type={'basic-multi'} />
                    <Checkbox id="DM" name="DM" type={'basic-multi'} />
                    <Checkbox id="TM" name="TM" type={'basic-multi'} />
                  </div>
                </Checkbox>
              </ValueProvider>
            </div>
            <div className="pt-5 pb-[25px] flex">
              <Button
                className="h-10 font-normal text-gray-500 text-xs mr-[5px]"
                backgroundColor="white"
              >
                다음에 할게요
              </Button>
              <Button className="h-10 text-xs" backgroundColor="black">
                확인
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
