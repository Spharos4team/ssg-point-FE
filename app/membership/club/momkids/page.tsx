import NavBoxForMainBody from '@/components/templates/NavBoxForMainBody';
import MainBanner from '@/components/templates/MainBanner';
import BannerListForMain from '@/components/templates/BannerListForMain';
import Title from '@/components/atoms/Title';
import Link from 'next/link';
import ClubList from '@/components/atoms/ClubList';
import Button from '@/components/atoms/Button/Button';

export default function momkids() {
  return (
    <div className="-mt-20">
      <ClubList
        type={'detail'}
        title={'맘키즈 클럽'}
        subtext={
          '아이와 엄마가 모두 행복한 라이프!<br/>매월 다양한 이마트 맘키즈 클럽<br/>혜택을 받아보세요.'
        }
        src={'/images/logo_momkids.png'}
        link={'/membership/club/momkids'}
        bgtxtcolor={'bluegreen'}
      />
      <div className="pt-6 px-5 pb-[60px]">
        <p className="text-sm leading-6 break-keep text-black">
          맘키즈 클럽은 임산부와 만 13세 이하의 자녀를 두신
          <br />
          회원님께만 드리는 이마트만의 회원제 혜택 서비스입니다.
          <br />※ 이마트와 SSG.COM 이마트몰에서 모두 혜택 이용 가능합니다.
          <br />
          (단, 온↔오프라인 옴니동의에 동의한 고객에 한하여 적용됩니다.)
        </p>
        <Button className="mt-10 h-12" backgroundColor={'primary'}>
          <Link href={'/membership/club/momkids/detail'}>가입하기</Link>
        </Button>
      </div>
    </div>
  );
}
