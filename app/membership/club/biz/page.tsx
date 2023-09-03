import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import ClubList from "@/components/atoms/ClubList";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import Button from "@/components/atoms/Button/Button";

export default function biz() {
  return (
      <div className='-mt-20'>
          <ClubList
              type={"detail"}
              title={'비즈 클럽'}
              subtext={'개인 사업자도 편리하게!<br/>세금계산서 발행 서비스,<br/>이제 모바일로 관리하세요.'}
              src={'/images/logo_biz.png'}
              link={'/membership/club/biz'}
              bgtxtcolor={'purple'}
          />
            <div className="pt-6 px-5 pb-[60px]">
                <p className="text-sm leading-6 break-keep text-black">
                    개인 사업자 고객님들을 위한
                    <br/>편리한 세금계산서 발행 서비스입니다.
                </p>
                <ul className="!pt-[15px] list-none ">
                    <ListForNoticeBox level={2} isBullet>
                        가입 시 비즈 클럽 모바일 카드가 발급되며, 사업자등록증 지참 후 이마트 매장 내 고객만족센터에 방문해서 세금계산서 발행을 위한 등록 절차를 진행해 주세요.
                    </ListForNoticeBox>
                    <ListForNoticeBox level={2} isBullet>
                        비즈 클럽 카드를 추가 발급하는 경우에도 사업자등록증 지참 후 이마트 매장 내 고객만족센터에 방문해서 세금계산서 발행을 위한 등록 절차를 진행해 주세요.
                    </ListForNoticeBox>
                    <ListForNoticeBox level={2} isBullet>
                        비즈 클럽 가입 시 등록하신 이메일 주소로 세금계산서가 발송되며, 약 1~2주 정도 소요됩니다.
                    </ListForNoticeBox>
                    <ListForNoticeBox level={2} isBullet>
                        세금계산서 발행 거래의 포인트 적립 건은 개인 포인트 적립내역에 합산됩니다.
                    </ListForNoticeBox>
                    <ListForNoticeBox level={2} isBullet>
                        혜택은 이마트 매장에서만 적용됩니다.
                    </ListForNoticeBox>
                </ul>
                <div className="pt-10">
                    <Button
                        className="h-12 text-[14px] font-medium !block mb-2"
                        type={'basic'}
                        onClick={''}
                    >
                        비즈 클럽 이용 방법
                    </Button>
                    <Button
                        className="h-12 text-[14px] font-medium !block "
                        backgroundColor={'primary'}
                        type={'link'}
                        href={'/membership/club/biz/mod'}
                    >
                        가입하기
                    </Button>
                </div>
            </div>
      </div>
  );
}
