import CertNavigation from '@/components/atoms/CertNavigation';
import ContentHeader from '@/components/atoms/ContentHeader';
import UserCertPage from '@/components/pages/UserCertPage';
import ContentTitle from '@/components/atoms/ContentTitle';
import NoticeBox from '@/components/modules/NoticeBox';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import { Checkbox } from '@/components/atoms/Checkbox';
import { ValueProvider } from '@/components/hooks/ValueProvider';
import React from 'react';
import Button from '@/components/atoms/Button/Button';
import Subtitle from '@/components/atoms/Subtitle';
import Input from '@/components/atoms/Input';
import { KEY } from '@/utils/KeyHelper';
import SignUpForm from '@/components/organisms/SignUpForm';
import { FormProvider } from '@/components/hooks/FormProvider';
import { AppContextProvider } from '@/provider/AppContextProvider';

export default function FormPage() {
  return (
    <>
      {/*네비게이션, 타이틀*/}
      <div className="px-5 py-10">
        <CertNavigation />
        <ContentTitle className="font-medium">정보입력</ContentTitle>
        <Subtitle className="!text-[13px] leading-[21px] font-normal mt-2 !pt-0" type="small">
          필수 정보를 정확하게 입력해주세요.
        </Subtitle>
      </div>

      {/*input box*/}
      <div className="px-5 pb-6">
        <AppContextProvider>
          <SignUpForm />
        </AppContextProvider>
      </div>

      {/*체크박스*/}
      <div className="px-5">
        <div>
          <ul className="space-y-4">
            <li className="relative flex justify-between">
              <div className="relative inline-block align-top">
                <Checkbox
                  id="00"
                  type="basic-single"
                  name="[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의"
                />
              </div>
              <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                  내용보기
                </span>
              </button>
            </li>

            <li className="relative flex justify-between">
              <div className="relative inline-block align-top">
                <Checkbox
                  id="01"
                  name="[선택] 이마트/신세계 공동 개인정보 수집 및 이용동의"
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
              <Checkbox className="!block pb-4" id="allCheck" name="전체동의" type={'basic-multi'}>
                <div className="flex gap-x-4">
                  <Checkbox id="email" name="이메일" type={'basic-multi'} />
                  <Checkbox id="message" name="문자" type={'basic-multi'} />
                  <Checkbox id="DM" name="DM" type={'basic-multi'} />
                  <Checkbox id="TM" name="TM" type={'basic-multi'} />
                </div>
              </Checkbox>
            </ValueProvider>
          </div>
        </div>
      </div>

      <div className="font-normal px-5 py-10">
        <ListForNoticeBox className="!text-[#505050]" level={2}>
          당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 소식지 제공, 이벤트 정보
          제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함), 제휴행사를 안내해 드립니다. 수신동의
          변경은 신세계포인트 고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.
        </ListForNoticeBox>
        <ListForNoticeBox className="!text-[#505050] " level={2} isReference>
          서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다.
        </ListForNoticeBox>
      </div>
      {/*todo: 체크박스 선택에 동의하지 않으면 modal 동의하면 성공화면으로 넘어가기*/}
      <div className="!px-5 pb-5">
        <Button
          type={'link'}
          className="h-12 !font-medium leading-6 text-sm "
          href={'/member/join/success'}
          backgroundColor={'primary'}
        >
          확인
        </Button>
      </div>

      <NoticeBox type={'info'} title={'유의사항'} className="px-5 mt-5">
        <ListForNoticeBox level={2} isBullet>
          아이디는 영문 소문자, 숫자를 조합하여 6-20자리로 입력해 주세요.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          비밀번호는 영문 대/소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해
          주세요.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          아이디와 동일한 비밀번호는 사용하실 수 없습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          생년월일, 전화번호와 동일하거나 일부를 포함한 비밀번호는 사용하실 수 없습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          3글자 이상의 동일한 숫자/문자 또는 연속된 숫자/문자, 키보드 상 연속된 배열의 문자는
          입력하실 수 없습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          개명하신 회원님의 경우 통신사 등에 등록된 본인인증 정보가 개명하신 이름으로 바뀐 이후부터
          자동으로 변경됩니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          본인인증을 통해 확인된 정보는 수정하실 수 없습니다.
        </ListForNoticeBox>
      </NoticeBox>
    </>
  );
}
