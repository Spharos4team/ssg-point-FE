import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import ClubList from "@/components/atoms/ClubList";
import Button from "@/components/atoms/Button/Button";

export default function parking() {
  return (
      <div className='-mt-20'>
          <ClubList
              type={"detail"}
              title={'차량 서비스'}
              subtext={'주차를 빠르고 편리하게!<br/>이마트·신세계백화점에서<br/>자동으로 주차 정산 받으세요.'}
              src={'/images/logo_parking.png'}
              link={'/membership/club/parking'}
              bgtxtcolor={'brown'}
          />
          <div className="pt-6 px-5 pb-[60px]">
              <p className="text-sm leading-6 break-keep text-black">
                  미리 차량 정보를 입력하면 번거로운 과정 없이
                  <br/>자동으로 주차 정산을 하실 수 있어요.
              </p>
              <Button
                  className="mt-10 h-12"
                  backgroundColor={'primary'}
              >
                  <Link href={'/membership/club/parking/detail'}>
                      가입하기
                  </Link>
              </Button>
          </div>
      </div>
  );
}
