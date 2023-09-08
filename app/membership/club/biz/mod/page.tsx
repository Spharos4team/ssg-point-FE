import NavBoxForMainBody from '@/components/templates/NavBoxForMainBody';
import BodyNavTop from '@/components/BodyNavTop';
import MainBanner from '@/components/templates/MainBanner';
import BannerListForMain from '@/components/templates/BannerListForMain';
import Title from '@/components/atoms/Title';
import Link from 'next/link';
import ClubList from '@/components/atoms/ClubList';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import Button from '@/components/atoms/Button/Button';
import { InputText } from '@/components/atoms/InputText';
import Dropdown from '@/components/atoms/Dropdown';
import { Checkbox } from '@/components/atoms/Checkbox';

export default function mod() {
  return (
    <div className="-mt-20">
      <div className="bg-[#efe8f3] pt-6 pr-[118px] pb-5 pl-[30px] min-h-[130px] relative box-border">
        <h2 className="text-[#5c1880] text-[13px] leading-[21px] block font-bold ">비즈 클럽</h2>
        <p className="text-[#5c1880] text-lg leading-[28px] font-medium pt-0.5">
          개인 사업자 고객님들을 위한
          <br />
          편리한 세금계산서 발행 서비스
        </p>
      </div>
      <div className="pb-10 pt-[17px] px-5">
        <div>
          <form>
            <div className="pb-4 box-border">
              <p className="pb-2 text-[13px] leading-[21px] after:content-['*'] after:inline-block after:text-[#eb0000]">
                회사명
              </p>
              <InputText
                className="rounded-lg"
                id={'company'}
                inputType={'text'}
                title={'회사명'}
                placeholder={'회사명 입력'}
              />
              <p className="leading-5 text-[12px] text-[#767676] -mt-2 -mb-[3px] pt-2.5">
                나이스평가정보에 등록된 정확한 회사명을 입력해 주세요.
              </p>
            </div>
            <div className="pb-4 box-border">
              <p className="pb-2 text-[13px] leading-[21px] after:content-['*'] after:inline-block after:text-[#eb0000]">
                사업자등록번호
              </p>
              <InputText
                className="rounded-lg"
                id={'brnum'}
                inputType={'phone'}
                title={'사업자등록번호'}
                placeholder={'- 없이 사업자등록번호 입력'}
              />
            </div>
            <div className="pb-4 box-border">
              <p className="pb-2 text-[13px] leading-[21px] after:content-['*'] after:inline-block after:text-[#eb0000]">
                대표자명
              </p>
              <InputText
                className="rounded-lg"
                id={'name'}
                inputType={'text'}
                title={'대표자명'}
                placeholder={'대표자명 입력'}
              />
            </div>
            <div className="pb-4 box-border">
              <p className="pb-2 text-[13px] leading-[21px] after:content-['*'] after:inline-block after:text-[#eb0000]">
                회사 주소
              </p>
              <div className="mb-2 flex">
                <InputText
                  className="rounded-lg block w-full"
                  id={'adress'}
                  inputType={'text'}
                  title={'회사 주소'}
                  placeholder={'우편번호'}
                  disabled
                />
                <Button className="ml-[5px] h-12 py-3 font-normal !w-auto px-[45px] whitespace-nowrap">
                  우편번호찾기
                </Button>
              </div>
              <InputText
                className="rounded-lg block mb-2"
                id={'adress'}
                inputType={'text'}
                title={'회사 주소'}
                placeholder={''}
                disabled
              />
              <InputText
                className="rounded-lg block mb-2"
                id={'adress'}
                inputType={'text'}
                title={'회사 주소'}
                placeholder={'상세주소'}
                disabled
              />
              <p className="leading-5 text-[#767676] text-xs">
                사업자등록정보와 동일한 주소를 입력해 주세요.
              </p>
            </div>
            <div className="pb-4 box-border">
              <p className="pb-2 text-[13px] leading-[21px] after:content-['*'] after:inline-block after:text-[#eb0000]">
                이메일
              </p>
              <InputText
                className="rounded-lg block w-[calc(50%-12px)]"
                id={'email'}
                inputType={'text'}
                title={'이메일'}
                placeholder={'이메일 입력'}
              />
              <span className="inline-block align-top mt-3 text-center w-6 text-[13px] leading-[21px] text-[#767676]">
                @
              </span>
              <InputText
                className="rounded-lg block w-[calc(50%-12px)]"
                id={'email'}
                inputType={'text'}
                title={'이메일'}
                placeholder={' '}
              />
              <p className="leading-5 text-[#767676] text-xs">
                입력하신 이메일 주소로 세금계산서가 발행됩니다.
              </p>
            </div>
            <div className="mt-6 pt-[17px] pb-1 border-t-[1px] border-t-solid border-t-black">
              <div>
                <ul className="space-y-4">
                  <li className="relative flex justify-between">
                    <Checkbox
                      className="text-[11px] align-middle"
                      id="checker"
                      name=" [선택] 비즈 클럽 혜택 제공을 위한 개인정보 수집 및 이용 동의 "
                    />
                    <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                      <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                        내용보기
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <Button className="mt-6 w-full h-[48px] rounded-lg" backgroundColor="primary">
              저장하기
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
