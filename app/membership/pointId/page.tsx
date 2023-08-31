import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Link from "next/link";
import Image from "next/image";
import {Checkbox} from "@/components/atoms/Checkbox";
import {ValueProvider} from "@/components/hooks/ValueProvider";
import Button from "@/components/atoms/Button/Button";

export default function Home() {
  return (
    <div className="p-0 relative">
      <h3 className="text-[18px] leading-[28px] font-normal px-5 pb-4">신세계포인트 통합 ID 서비스 TIP​</h3>
      <ul className="mx-5 mb-20 list-none">
        <li className="mb-2 relative">
          <Link className="block min-h-[146px] py-4 pl-4 bg-white box-border border-[1px] border-solid border-[#e8e8e8]
                after:content-[''] after:block after:clear-both"
                href={'/'}>
            <Image
                src={'/images/logo_ssgpoint.png'}
                alt={'신세계포인트 logo'}
                className={"block w-[70px] float-left"}
                width={160}
                height={160}
            />
            <span className="float-right w-[calc(100%-90px)]">
              <strong className="block text-base font-medium leading-[26px]">신세계포인트</strong>
              <em className="block pt-1 text-xs leading-5 text-[#767676] break-keep">
                내 쇼핑 정보가 한눈에!<br/>나만의 라이프 스타일에 맞는<br/>다양한 신세계포인트 혜택을 누리세요.
              </em>
            </span>
          </Link>
          <div>
            <span className="absolute top-[98px] left-[21px] z-[1] w-[70px] h-[28px] box-border text-center bg-white pt-[3px] border-[1px] border-solid border-[#e8e8e8] text-xs leading-5 text-[#767676]">가입완료</span>
          </div>
        </li>
        <li className="mb-2 relative">
          <Link className="block min-h-[146px] py-4 pl-4 bg-white box-border border-[1px] border-solid border-[#e8e8e8]
                after:content-[''] after:block after:clear-both"
                href={'/'}>
            <Image
                src={'/images/logo_ssgpoint.png'}
                alt={'신세계포인트 logo'}
                className={"block w-[70px] float-left"}
                width={160}
                height={160}
            />
            <span className="float-right w-[calc(100%-90px)]">
              <strong className="block text-base font-medium leading-[26px]">신세계포인트</strong>
              <em className="block pt-1 text-xs leading-5 text-[#767676] break-keep">
                내 쇼핑 정보가 한눈에!<br/>나만의 라이프 스타일에 맞는<br/>다양한 신세계포인트 혜택을 누리세요.
              </em>
            </span>
          </Link>
          <div>
            <button className="absolute top-[98px] left-[21px] z-[1] w-[70px] h-[28px] box-border text-center bg-[#04857f] pt-[1px] border-[1px] border-solid border-[#04857f] text-xs leading-5 text-white">가입하기</button>
          </div>
          <div className="p-4 border-[1px] border-solid border-[#e8e8e8] border-t-none">
            <p className="text-[13px] leading-[21px] text-black">신세계아울렛 이용약관 및 개인정보 수집·이용동의 내용을 확인하였으며, 아래 내용에 동의합니다.</p>
            <span className="text-[13px] leading-[21px] text-black">㈜신세계사이먼 귀중</span>
                <ul className="space-y-4 mt-[18px]">
                  <li className="relative flex justify-between">
                    <div className="relative inline-block align-top">
                      <Checkbox
                          id="00"
                          className="text-[13px]"
                          type="basic-single"
                          name="[필수] 신세계사이먼 회원 이용약관"
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
                          id="00"
                          className="text-[13px]"
                          type="basic-single"
                          name="[필수] 개인정보 수집 및 이용에 대한 동의"
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
                          className="text-[13px]"
                          name="[선택] 서비스 이벤트정보 제공을 위한 개인정보 수집 및 이용 동의"
                          type={"basic-single"}
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
                  <p className="text-[14px] leading-6 mb-4">
                    신세계아울렛 광고정보 수신동의
                  </p>
                  <ValueProvider>
                    <Checkbox
                        className="!block pb-4"
                        id="allCheck"
                        name="전체동의"
                        type={"basic-multi"}
                    >
                      <div className="flex gap-x-4">
                        <Checkbox id="email" name="이메일" type={"basic-multi"} />
                        <Checkbox id="message" name="문자" type={"basic-multi"} />
                        <Checkbox id="DM" name="DM" type={"basic-multi"} />
                        <Checkbox id="TM" name="TM" type={"basic-multi"} />
                      </div>
                    </Checkbox>
                  </ValueProvider>
                </div>
              <Button
                  className="h-12 mt-4"
                  backgroundColor="primary"
              >
                동의하기
              </Button>
              <Button
                  type={"basic"}
                  className="h-12 text-[#767676] font-normal text-xs block text-center mt-[18px] mx-auto px-2.5
                   after:content-[''] after:inline-block after:align-top after:w-2.5 after:h-1.5 after:mt-[7px] after:opacity-[.5] after:ml-1 after:bg-[url('/images/icon_back.png')] after:bg-[length:10px_auto] after:cursor-pointer after:bg-no-repeat after:rotate-90"
                  backgroundColor={"white"}
              >
                닫기
              </Button>
              <button
                  className="text-[#767676] text-xs block text-center mt-[18px] mx-auto px-2.5 border-none bg-transparent cursor-pointer align-baseline
              after:content-[''] after:inline-block after:align-top after:w-1.5 after:h-2.5 after:mt-[7px] after:opacity-[.5] after:ml-1 after:bg-[url('/images/icon_back.png')] after:bg-[length:6px_auto] after:bg-left-top after:cursor-pointer after:bg-no-repeat after:rotate-90">
                닫기
              </button>
              </div>



        </li>
      </ul>
    </div>
  );
}
