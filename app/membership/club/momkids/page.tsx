import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import ClubList from "@/components/atoms/ClubList";

export default function momkids() {
  return (
      <div>
      <ClubList
          type={"detail"}
          title={'맘키즈 클럽'}
          subtext={'아이와 엄마가 모두 행복한 라이프!<br/>매월 다양한 이마트 맘키즈 클럽<br/>혜택을 받아보세요.'}
          src={'/images/logo_momkids.png'}
          link={'/membership/club/momkids'}
          bgtxtcolor={'bluegreen'}
      />
      </div>
  );
}
