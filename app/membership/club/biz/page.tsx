import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import ClubList from "@/components/atoms/ClubList";

export default function biz() {
  return (
      <ClubList
          type={"detail"}
          title={'비즈 클럽'}
          subtext={'개인 사업자도 편리하게!<br/>세금계산서 발행 서비스,<br/>이제 모바일로 관리하세요.'}
          src={'/images/logo_biz.png'}
          link={'/membership/club/biz'}
          bgtxtcolor={'purple'}
      />
  );
}
