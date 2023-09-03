import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import ClubList from "@/components/atoms/ClubList";
import Button from "@/components/atoms/Button/Button";
import Underline from "@/components/atoms/Underline";
import TabContent from "@/components/atoms/TabContent";
import PointServiceTable from "@/components/atoms/PointServiceTable";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";

export default function beauty() {
    const brandlist = [
        "아모레퍼시픽",
        "이자녹스",
        "더샘",
        "수려한",
        "토니모리",
        "더페이스샵",
        "이니스프리",
        "비욘드",
        "미샤",
        "엔프라니",
        "네이처리퍼블릭",
    ];
  return (
      <div className='-mt-20'>
          <ClubList
              type={"detail"}
              title={'뷰티 클럽'}
              subtext={'아름다움을 꿈꾸는 당신께!<br/>이마트 뷰티 클럽에 가입하고<br/>스마트하게 제품도 구매하세요.'}
              src={'/images/logo_beauty.png'}
              link={'/membership/club/beauty'}
              bgtxtcolor={'pink'}
          />
          <div className="pt-6 px-5 pb-[60px]">
              <p className="text-sm leading-6 break-keep text-black">
                  이마트 매장에서 브랜드 화장품 구매 시
                  <br/>신세계포인트 2~5% 추가 적립 혜택을 받으실 수 있습니다.
              </p>
              <div className="pt-10">
                  <p className="text-base leading-[26px] font-medium">
                      해당 브랜드
                  </p>
                  <PointServiceTable
                    className="px-[5px] pt-4 pb-2 border-b-[1px] border-b-solid border-b-[#e8e8e8]"
                  >

                      {brandlist.map((item) =>
                          <ListForNoticeBox
                          className="inline-block !text-[13px] w-1/3 mt-2"
                          level={6} isBullet>
                              {item}
                      </ListForNoticeBox>
                      )}
                  </PointServiceTable>
              </div>

              <Button
                  className="mt-10 h-12"
                  backgroundColor={'primary'}
                  onClick={''}
              >
                  가입하기
              </Button>
          </div>
      </div>
  );
}
