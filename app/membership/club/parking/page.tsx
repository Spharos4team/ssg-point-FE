import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import ClubList from "@/components/atoms/ClubList";

export default function parking() {
  return (
      <ClubList
          type={"detail"}
          title={'차량 서비스'}
          subtext={'주차를 빠르고 편리하게!<br/>이마트·신세계백화점에서<br/>자동으로 주차 정산 받으세요.'}
          src={'/images/logo_parking.png'}
          link={'/membership/club/parking'}
          bgtxtcolor={'brown'}
      />
  );
}
