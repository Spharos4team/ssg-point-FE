import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import Image from "next/image";
import ClubList from "@/components/atoms/ClubList";

export default function club() {
  return (
    <div className="relative pb-20">
      <h3 className="text-lg leading-7 font-normal px-5 pb-4">이런 클럽은 어때요?</h3>
      <ul>
        <ClubList
            type={"list"}
            title={'맘키즈 클럽'}
            subtext={'아이와 엄마가 모두 행복한 라이프!<br/>매월 다양한 이마트 맘키즈 클럽<br/>혜택을 받아보세요.'}
            src={'/images/logo_momkids.png'}
            link={'/membership/club/momkids'}
            bgtxtcolor={'bluegreen'}
        />
        <ClubList
            type={"list"}
            title={'차량 서비스'}
            subtext={'주차를 빠르고 편리하게!<br/>이마트·신세계백화점에서<br/>자동으로 주차 정산 받으세요.'}
            src={'/images/logo_parking.png'}
            link={'/membership/club/parking'}
            bgtxtcolor={'brown'}
        />
        <ClubList
            type={"list"}
            title={'뷰티 클럽'}
            subtext={'아름다움을 꿈꾸는 당신께!<br/>이마트 뷰티 클럽에 가입하고<br/>스마트하게 제품도 구매하세요.'}
            src={'/images/logo_beauty.png'}
            link={'/membership/club/beauty'}
            bgtxtcolor={'pink'}
        />
        <ClubList
            type={"list"}
            title={'비즈 클럽'}
            subtext={'개인 사업자도 편리하게!<br/>세금계산서 발행 서비스,<br/>이제 모바일로 관리하세요.'}
            src={'/images/logo_biz.png'}
            link={'/membership/club/biz'}
            bgtxtcolor={'purple'}
        />
      </ul>
    </div>
  );
}
