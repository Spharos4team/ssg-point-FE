import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import ClubList from "@/components/atoms/ClubList";
import Button from "@/components/atoms/Button/Button";
import {Checkbox} from "@/components/atoms/Checkbox";
import {RadioProvider} from "@/components/hooks/RadioProvider";
import RadioCardGroup2 from "@/components/modules/RadioCardGroup2";
import RadioCard2 from "@/components/atoms/RadioCard2";
import {InputText} from "@/components/atoms/InputText";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import Image from "next/image";
import CollapseForCarInClub from "@/components/organisms/CollapseForCarInClub";
import Dropdown from "@/components/atoms/Dropdown";
import TextBox from "@/components/atoms/TextBox";
import {Category} from "@/types/CategoryProps";

export default function parkingdetail() {
    const LocNumber: Category[] = [
        { id: 2, parent_id: "", slug: "seoul", name: "서울" },
        { id: 3, parent_id: "", slug: "busan", name: "부산" },
        { id: 4, parent_id: "", slug: "gyeonggi", name: "경기" },
        { id: 5, parent_id: "", slug: "gangwon", name: "강원" },
        { id: 6, parent_id: "", slug: "chungbuk", name: "충북" },
        { id: 7, parent_id: "", slug: "chungnam", name: "충남" },
        { id: 8, parent_id: "", slug: "jeonbuk", name: "전북" },
        { id: 9, parent_id: "", slug: "jeonnam", name: "전남" },
        { id: 10, parent_id: "", slug: "gyeongbuk", name: "경북" },
        { id: 11, parent_id: "", slug: "gyeongnam", name: "경남" },
        { id: 12, parent_id: "", slug: "gyeongnam", name: "제주" },
        { id: 13, parent_id: "", slug: "jeju", name: "제주" },
        { id: 14, parent_id: "", slug: "daegu", name: "대구" },
        { id: 15, parent_id: "", slug: "incheon", name: "인천" },
        { id: 16, parent_id: "", slug: "incheon", name: "광주" },
        { id: 17, parent_id: "", slug: "daejeon", name: "대전" },
    ];
    return (
      <div className="-mt-20">
          <div className="bg-[#f6f1e7] pt-6 pr-[118px] pb-5 pl-[30px] min-h-[130px] relative box-border">
              <h2 className="text-[#623f00] text-[13px] leading-[21px] block font-bold ">
                  차량 서비스
              </h2>
              <p className="text-[#623f00] text-lg leading-[28px] font-medium pt-0.5">
                  편리한 주차비 자동 정산
              </p>
              <span className="block text-[11px] leading-[19px] mt-2 text-[#623f00] before:content-['*'] before:inline-block ">
                  구매 내역에 따라 자동 정산됩니다.
              </span>
              <Image
                  className="w-[90px] absolute right-5 -translate-y-1/2 top-1/2"
                  src={'/images/logo_parking.png'}
                  width={180}
                  height={180}
              ></Image>
          </div>
          <div className="pt-[17px] px-5 pb-[60px]">
              <ul className="list-none -mx-5 px-5 pb-2.5 border-b-[1px] border-b-solid border-b-[#e8e8e8]">
                  <li className="relative flex justify-between">
                      <Checkbox
                          className="text-[11px] align-top relative inline-block mb-2.5"
                          id="checker"
                          name="[선택] 차량 서비스 제공을 위한 부가 정보 수집 및 이용동의"
                      />
                      <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                        <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                          내용보기
                        </span>
                      </button>
                  </li>
                  <li className="relative flex justify-between">
                      <Checkbox
                          className="text-[11px] align-top relative inline-block mb-2.5"
                          id="checker2"
                          name="[선택] 차량서비스 제공을 위한 이마트, 신세계 공동 부가 정보 수집 및 이용 동의"
                      />
                      <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                        <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                          내용보기
                        </span>
                      </button>
                  </li>
              </ul>
              <div className="mt-6">
                  <Dropdown
                      type="category"
                      id="locCarNo"
                      options={LocNumber}
                      mainTitle='지역번호 없음'
                  />
                  <div className="flex mt-2 space-x-1">
                      <TextBox
                          className="flex-1 whitespace-nowrap tracking-[-.1em]"
                          id="carNoPre"
                          type="number"
                      >
                          차량 앞자리 번호
                      </TextBox>
                      <TextBox
                          className="flex-1 whitespace-nowrap tracking-[-.1em]"
                          id="carTextCen"
                          type="text"
                      >
                          차량 중간 글자
                      </TextBox>
                      <TextBox
                          className="flex-1 whitespace-nowrap tracking-[-.1em]"
                          id="carNoPost"
                          type="number"
                      >
                          차량 마지막 번호
                      </TextBox>
                  </div>
                  </div>
              </div>
              <ul className="list-none px-5">
                  <ListForNoticeBox level={2} isBullet>
                      이마트, 신세계백화점 방문 시 구매 내역에 따라 등록하신 차량의 주차비가 자동으로 정산됩니다.
                  </ListForNoticeBox>
                  <ListForNoticeBox level={2} isHyphen className="!pl-[14px] before:pl-[7px]">
                      이마트 : 일부 점포 제외 (이마트앱 > 주차 > 무료주차 가능점포)
                  </ListForNoticeBox>
                  <ListForNoticeBox level={2} isHyphen className="!pl-[14px] before:pl-[7px]">
                      백화점 : 경기점, 타임스퀘어점 제외
                  </ListForNoticeBox>
                  <ListForNoticeBox level={6} isBullet className="mt-1 font-medium">
                      차량번호는 최대 1대까지 입력이 가능하며, 임시번호 및 외교차량 등 일부 차량번호는 등록되지 않습니다.
                  </ListForNoticeBox>
              </ul>
              <div className="px-5">
                  <Button
                      className="mt-10 w-full h-[48px] rounded-lg"
                      backgroundColor="primary"
                  >
                      저장하기
                  </Button>
              </div>
          </div>
  );
}
