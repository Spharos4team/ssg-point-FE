import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import ClubList from "@/components/atoms/ClubList";

export default function beauty() {
  return (
      <ClubList
          type={"detail"}
          title={'뷰티 클럽'}
          subtext={'아름다움을 꿈꾸는 당신께!<br/>이마트 뷰티 클럽에 가입하고<br/>스마트하게 제품도 구매하세요.'}
          src={'/images/logo_beauty.png'}
          link={'/membership/club/beauty'}
          bgtxtcolor={'pink'}
      />
  );
}
