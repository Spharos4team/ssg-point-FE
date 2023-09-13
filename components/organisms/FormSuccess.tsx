'use client';
import CertNavigation from '@/components/atoms/CertNavigation';
import ContentTitle from '@/components/atoms/ContentTitle';
import SpecialTitle from '@/components/atoms/SpecialTitle';
import Modal from '@/components/atoms/Modal';
import Underline from '@/components/atoms/Underline';
import { RadioProvider } from '@/components/hooks/RadioProvider';
import RadioCardGroup2 from '@/components/modules/RadioCardGroup2';
import RadioCard2 from '@/components/atoms/RadioCard2';
import TextBox from '@/components/atoms/TextBox';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import Button from '@/components/atoms/Button/Button';
import { useState } from 'react';

export default function FormSuccess() {
  const underline =
    "after:content-[''] after:inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[12px] after:bg-[#ffdfb5] after:z-[-1]";
  const genderRadios = {
    valueName: 'KidsGender',
    innerHtml: {
      1: '남자',
      2: '여자',
    } as {
      [key: number]: string;
    },
  };
  const [modal, setModal] = useState(true);
  return (
    <>
      <div className="px-5 pt-10">
        <CertNavigation />
        <ContentTitle className="font-medium">가입완료</ContentTitle>
      </div>
      <div className="px-5 py-5 text-xl leading-[30px] mb-2">
        <Underline underlineColor={'yellow'}>박*민</Underline>
        님, &nbsp;
        <span className="font-medium">ksun2128 ID</span>
        로
        <br />
        신세계포인트&nbsp;
        <span className="font-medium">통합 회원 가입</span>
        이
        <br />
        완료되었습니다.
      </div>
      <div className="px-5 pb-10">
        <h3 className="text-base leading-[26px] font-medium pb-[12px] border-b border-black">회원정보</h3>
        <div className="pt-4 pb-10 text-[13px] font-normal">
        <p className="">휴대폰 번호</p>
        <p className=" text-gray-500 pb-4">010-95**-50**</p>
        <p className="">주소</p>
        <p className=" text-gray-500 pb-4">부산 북구 금곡대로, *****</p>
        <p className="">이메일</p>
        <p className=" text-gray-500 pb-4">없음</p>
        </div>
      </div>
      <div className="px-5">
        <h3 className="text-base leading-[26px] font-medium pb-[12px] border-b border-black">
          광고정보 수신동의
          <br /> 동의일자 2023.08.30</h3>
        <div className="pt-4 pb-10 text-[13px] font-normal">
        <p className="">동의</p>
        <p className=" text-gray-500 pb-4">이메일, 문자, DM, TM, APP PUSH</p>
        <p className="">비동의</p>
        <p className=" text-gray-500 pb-4">이메일, 문자, DM, TM, APP PUSH</p>
        </div>
      </div>

      {/*collapse card 여러개 한번에 하나만 열림*/}
      {/*<div className="pb-10">*/}
      {/*  <div className="px-5 py-5 text-xl leading-[30px] mb-2">*/}
      {/*    <span className="font-medium">박*민</span>*/}
      {/*    님,*/}
      {/*    <br />*/}
      {/*    통합 ID로 더 다양한 서비스를*/}
      {/*    <br />*/}
      {/*    이용할 수 있습니다!*/}
      {/*  </div>*/}
      {/*/!*  card div *!/*/}
      {/*  <div>*/}
      {/*  /!*<div class="group_join_list gray_type"><div class="tab" style="background-color: rgb(255, 184, 28);"><button class="link_box on"><span class="logo_img"><img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/group-images/emart_join_52.png" alt="logo"></span><span class="name">이마트</span><span class="arr"><span>약관 항목 닫기</span></span></button><!----></div><div class="tab_cnt" style=""><div class="txt_cnt"><p class="txt0">이마트 이용약관 및 개인정보 수집·이용동의 내용을 확인하였으며, 아래 내용에 동의합니다.</p><p class="txt1">㈜이마트 귀중</p></div><ul class="agree_list btn_type0 txt_type0"><li class="agree_form"><div class="chk_box"><input id="checkboxall0" type="checkbox"><label for="checkboxall0"><span class="in_box">모두 동의합니다.</span></label></div><p>※ 전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며, 개별적인 동의 선택도 가능합니다. 선택항목에 대한 동의를 거부하시더라도 필수 서비스 이용은 가능합니다.</p></li></ul><ul class="agree_list btn_type0 txt_type0"><li class="agree_form"><div class="chk_box"><input id="checkbox00" type="checkbox" class="check_list_js" value="4003801"><label for="checkbox00"><span class="in_box">[필수] 이마트 필수약관</span></label></div><button class="agree_show"><span>내용보기</span></button></li><li><!----><!----></li></ul><div class="btn_box"><button class="btn0">동의하기</button></div></div></div>*!/*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="w-full pb-[60px] flex px-5">
        <Button className="h-12 !font-medium" type={"link"} href={'/login'} backgroundColor={"primary"}>
          신세계포인트 로그인하기
        </Button>
      </div>

      <Modal modal={modal} fill>
        <div className="relative h-[36px] after:mt-5 after:bg-gradient-primary-line2 after:absolute after:h-1 after:-ml-5 after:w-[120%] after:content-['']">
          <h2 className="text-lg leading-7 -my-1.5 pr-[60px] font-medium">
            신세계포인트 맞춤혜택 서비스
          </h2>
        </div>
        {/*모달 내부 스크롤*/}
        <div className="py-10">
          <Underline underlineColor={'yellow'} className="text-xl leading-[30px] mb-2">
            박*민
          </Underline>
          <span className="text-xl mb-2 leading-[30px]">
            님, 더 많은 혜택이 남아있어요!
            <p className="text-sm leading-6 text-gray-500">
              신세계포인트 맞춤 혜택 서비스 이용에
              <br />
              동의하신 후 원하시는 혜택을 받아보세요.
            </p>
          </span>
        </div>
        <div className="border-[1px] border-solid border-[#e8e8e8] rounded-lg">
          <h4 className="text-lg leading-7 pt-4 inline-flex font-normal">
            <span className="text-xs bg-gradient-primary-line2 bg-clip-text text-transparent font-medium leading-5 mt-1 mr-1 ml-5">
              혜택 하나.
            </span>
            클럽 서비스
          </h4>
          {/*    맘키즈 배경, 이미지 추가*/}
          <div className="px-5 pb-10">
            <RadioProvider>
              <RadioCardGroup2 title={'자녀1'} radioType="titleLeft">
                {Object.keys(genderRadios.innerHtml).map((key) => (
                  <RadioCard2
                    key={key}
                    id={`kids_gender1_${key}`}
                    value={genderRadios.innerHtml[parseInt(key)]}
                  >
                    {genderRadios.innerHtml[parseInt(key)]}
                  </RadioCard2>
                ))}
                <TextBox className="w-[calc(100%-66px)] ml-[66px]" id="kids_birth_1" type="text">
                  생년월일 ex)20170201
                </TextBox>
              </RadioCardGroup2>
            </RadioProvider>
            <RadioProvider>
              <RadioCardGroup2 title={'자녀2'} radioType="titleLeft">
                {Object.keys(genderRadios.innerHtml).map((key) => (
                  <RadioCard2
                    key={key}
                    id={`kids_gender2_${key}_`}
                    value={genderRadios.innerHtml[parseInt(key)]}
                  >
                    {genderRadios.innerHtml[parseInt(key)]}
                  </RadioCard2>
                ))}
                <TextBox className="w-[calc(100%-66px)] ml-[66px]" id="kids_birth_2" type="text">
                  생년월일 ex)20170201
                </TextBox>
              </RadioCardGroup2>
            </RadioProvider>
            <ul className="pt-[16px] pb-6 px-5">
              <ListForNoticeBox level={2} isBullet>
                맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.
              </ListForNoticeBox>
              <ListForNoticeBox level={2} isBullet>
                자녀 정보는 최대 2명까지 입력하실 수 있습니다.
              </ListForNoticeBox>
              <ListForNoticeBox level={2} isBullet>
                {
                  '맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.<br />(온·오프라인 옴니동의 시 SSG.COM 이용 가능)'
                }
              </ListForNoticeBox>
            </ul>
            <div>
              <Button className="h-12" backgroundColor="primary">
                저장하기
              </Button>
            </div>
          </div>
          {/*차량서비스 이미지*/}
          <div className="px-5 pb-10"></div>
          <button
            onClick={() => setModal(!modal)}
            className="absolute top-[6px] right-[2px] w-[50px] h-[50px] bg-[url('/images/del.png')] bg-center bg-no-repeat bg-[size:14px_14px] z-[3] indent-[-999em] text-transparent"
          ></button>
        </div>
      </Modal>
    </>
  );
}
