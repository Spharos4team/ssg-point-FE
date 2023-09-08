import NavBoxForMainBody from '@/components/templates/NavBoxForMainBody';
import MainBanner from '@/components/templates/MainBanner';
import BannerListForMain from '@/components/templates/BannerListForMain';
import Title from '@/components/atoms/Title';
import Link from 'next/link';
import ClubList from '@/components/atoms/ClubList';
import Button from '@/components/atoms/Button/Button';
import { Checkbox } from '@/components/atoms/Checkbox';
import { RadioProvider } from '@/components/hooks/RadioProvider';
import RadioCardGroup2 from '@/components/modules/RadioCardGroup2';
import RadioCard2 from '@/components/atoms/RadioCard2';
import { InputText } from '@/components/atoms/InputText';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import Image from 'next/image';

export default function momkidsdetail() {
  const genderRadios = {
    valueName: 'sortHistory',
    innerHtml: ['남자', '여자'] as string[],
  };
  const genderRadios2 = {
    valueName: 'sortHistory',
    innerHtml: ['남자', '여자'] as string[],
  };
  return (
    <div className="-mt-20">
      <div className="bg-[#e6f3f3] pt-6 pr-[118px] pb-5 pl-[30px] min-h-[130px] relative box-border">
        <h2 className="text-[#00635e] text-[13px] leading-[21px] block font-bold ">맘키즈 클럽</h2>
        <p className="text-[#00635e] text-lg leading-[28px] font-medium pt-0.5">
          우리 아이를 위한
          <br />
          맘키즈 클럽 혜택
        </p>
        <Image
          className="w-[90px] absolute right-5 -translate-y-1/2 top-1/2"
          src={'/images/logo_momkids.png'}
          width={180}
          height={180}
        ></Image>
      </div>
      <div className="pt-[17px] px-5 pb-[60px]">
        <ul>
          <li className="relative flex justify-between">
            <Checkbox
              className="text-[11px] align-middle"
              id="checker"
              name="[선택] 맘키즈 클럽 혜택을 위한 부가 정보 수집 및 이용 동의"
            />
            <button className="ablsolute right-0 top-0 w-6 h-[22px]">
              <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                내용보기
              </span>
            </button>
          </li>
        </ul>
        <div className="mt-10">
          <RadioProvider>
            <RadioCardGroup2 radioType={'titleLeft'} title="자녀1">
              {Object.keys(genderRadios.innerHtml).map((key) => (
                <RadioCard2 id={`gender_${key}`} value={genderRadios.innerHtml[parseInt(key)]}>
                  {genderRadios.innerHtml[parseInt(key)]}
                </RadioCard2>
              ))}
              <div className="w-[calc(100%-60px)] mt-2 ml-[65px] align-top inline-block relative box-border">
                <InputText
                  className="rounded-lg"
                  type="basic"
                  // id={`gender_${key}`}
                  inputType="birth"
                  title="생년월일을 입력해주세요."
                  placeholder=" "
                />
              </div>
            </RadioCardGroup2>
          </RadioProvider>
          <RadioProvider>
            <RadioCardGroup2 radioType={'titleLeft'} title="자녀2">
              {Object.keys(genderRadios2.innerHtml).map((key) => (
                <RadioCard2 id={`gender_${key}2`} value={genderRadios2.innerHtml[parseInt(key)]}>
                  {genderRadios2.innerHtml[parseInt(key)]}
                </RadioCard2>
              ))}
              <div className="w-[calc(100%-60px)] mt-2 ml-[65px] align-top inline-block relative box-border">
                <InputText
                  className="rounded-lg"
                  type="basic"
                  // id={`gender_${key}2`}
                  inputType="birth"
                  title="생년월일을 입력해주세요."
                  placeholder=" "
                />
              </div>
            </RadioCardGroup2>
          </RadioProvider>
        </div>
        <ul className="list-none">
          <ListForNoticeBox level={2} isBullet>
            맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            자녀 정보는 최대 2명까지 입력하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} className="pl-[7px]">
            (온·오프라인 옴니동의 시 SSG.COM 이용 가능)
          </ListForNoticeBox>
        </ul>
        <Button className="mt-6 w-full h-[48px] rounded-lg" backgroundColor="primary">
          저장하기
        </Button>
      </div>
    </div>
  );
}
