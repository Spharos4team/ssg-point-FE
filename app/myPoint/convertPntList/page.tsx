"use client";
import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import ListBody from "@/components/atom/ListBody";
import Subtitle from "@/components/atom/Subtitle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ListHeader from "@/components/atom/ListHeader";
import ListItem from "@/components/atom/ListItem";

export default function ConvertPntList() {
  const router = useRouter();

  const beforeArrow =
    "before:absolute before:block before:w-[15px] before:h-2 before:top-8 before:left-1/3 before:ml-[-4%] before:bg-[url('/images/mypoint_arrow.png')] before:bg-[100%_auto]";
  const afterArrow =
    "after:absolute after:block after:w-[15px] after:h-2 after:top-8 after:right-1/3 after:mr-[-4%] after:bg-[url('/images/mypoint_arrow.png')] after:bg-[100%_auto]";

  const linkRightArrow =
    "after:absolute after:right-0 after:top-1/2 after:w-[6px] after:h-[10px] after:mt-[-4.5px] after:bg-[url('/images/arrow_left.png')] after:bg-[100%_auto] after:rotate-180 after:opacity-40";

  const handleClick = () => {
    router.push("/myPoint/convertIndAgree");
  };

  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          여기저기 흩어져 있는 포인트를
          <br />
          신세계포인트로{" "}
          <span className="text-benefits font-medium">한 곳에 모아보세요.</span>
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          알뜰하게 적립한 포인트를 모두 모아
          <br />
          자주 사용하는 포인트로 전환해 보세요.
        </Subtitle>
      </ContentHeader>

      {/* 3 Steps */}

      <div className="max-w-[320px] mx-auto">
        <ul
          className={`pb-10 relative flex justify-between ${beforeArrow} ${afterArrow}`}
        >
          <li className="flex flex-col before:w-20 before:h-20 before:block before:bg-[url('/images/resources/myPoint/switch_step_icon.png')] before:bg-[258px_auto] before:bg-[left_bottom]">
            <div className="pt-2 text-center text-mypoint">
              <span className="block text-[11px]">포인트 선택</span>
            </div>
          </li>

          <li className="flex flex-col before:w-20 before:h-20 before:block before:bg-[url('/images/resources/myPoint/switch_step_icon.png')] before:bg-[258px_auto] before:bg-top">
            <div className="pt-2 text-center text-mypoint">
              <span className="block text-[11px]">포인트 입력</span>
            </div>
          </li>

          <li className="flex flex-col before:w-20 before:h-20 before:block before:bg-[url('/images/resources/myPoint/switch_step_icon.png')] before:bg-[258px_auto] before:bg-right-top">
            <div className="pt-2 text-center text-mypoint">
              <span className="block text-[11px]">포인트 전환</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="px-5 py-10">
        <Button bgColor="pink">한 번에 조회하기</Button>
      </div>

      <ListBody className="divide-y gap-y-0 border-t border-b">
        <li className="flex justify-between items-center w-full h-[75px] px-5 hover:bg-gray-100 duration-200">
          <div className="flex items-center align-middle h-[75px] w-[75px]">
            <Image
              src={"/images/resources/mypoint/samsung.png"}
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div className="w-4/6 font-medium">삼성카드 포인트</div>
          <div className="relative w-2/6">
            <span className="absolute right-[30px] top-1/2 mt-[-7px] z-[2]">
              <Button
                type="simple"
                className={`relative text-xs leading-[18px] text-[#767676] pr-[10px] !bg-transparent ${linkRightArrow}`}
                onClick={handleClick}
              >
                조회하기
              </Button>
            </span>
          </div>
        </li>

        <li className="flex justify-between items-center w-full h-[75px] px-5 hover:bg-gray-100 duration-200">
          <div className="flex items-center align-middle h-[75px] w-[75px]">
            <Image
              src={"/images/resources/mypoint/okcashbag.png"}
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div className="w-4/6 font-medium">OK캐쉬백 포인트</div>
          <div className="relative w-2/6">
            <span className="absolute right-[30px] top-1/2 mt-[-7px] z-[2]">
              <Button
                type="simple"
                className={`relative text-xs leading-[18px] text-[#767676] pr-[10px] !bg-transparent ${linkRightArrow}`}
                onClick={handleClick}
              >
                조회하기
              </Button>
            </span>
          </div>
        </li>

        <li className="flex justify-between items-center w-full h-[75px] px-5 hover:bg-gray-100 duration-200">
          <div className="flex items-center align-middle h-[75px] w-[75px]">
            <Image
              src={"/images/resources/mypoint/standard.png"}
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div className="w-4/6 font-medium">360 리워드 포인트</div>
          <div className="relative w-2/6">
            <span className="absolute right-[30px] top-1/2 mt-[-7px] z-[2]">
              <Link
                href={
                  "https://open.standardchartered.co.kr/bc/bc_common?menuid=OBC04020000000000&langCode=KR"
                }
                className={`relative text-xs leading-[18px] text-[#767676] pr-[10px] ${linkRightArrow}`}
              ></Link>
            </span>
          </div>
        </li>
      </ListBody>
      <div className="px-5 py-10">
        <Button bgColor="primary">전환하기</Button>
        <Link href={""}>
          <Subtitle
            className={`relative text-right text-xs pr-3 pt-2 ${linkRightArrow} after:mt-[6px]`}
          >
            포인트 한번에 조회하기 동의 철회
          </Subtitle>
        </Link>
      </div>

      <ListBody className="px-5 pb-10">
        <ListHeader className="text-sm h-auto leading-7 font-medium bg-[#fbfbfb]">
          [유의사항]
        </ListHeader>
        <ListItem bullet className="text-xs text-[#eb0000]">
            각 포인트는 신세계포인트와 1:1로 전환되며 포인트 전환 후 취소할 수 없습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            매일 23:30 ~ 01:30 (2시간)은 포인트 전환 시스템 점검으로 서비스 이용이 일시 중단됩니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            해당 제휴사 시스템 점검 시 서비스 이용이 일시 중단되며 자세한 사항은 해당 제휴사
            공지사항을 확인해 주세요.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            제휴사 사정에 따라 포인트 전환 정책은 변경될 수 있으며 자세한 사항은 해당 제휴사에 문의해
            주세요.
        </ListItem>
        <ListItem className="text-xs text-[#767676] pt-3">
            삼성카드 포인트
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            5천 포인트 이상 보유 시, 5천 포인트 단위로 전환 가능합니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            신세계-삼성카드 소지자에 한해 전환 서비스를 이용할 수 있습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            월간 10만 포인트, 연간 100만 포인트까지 전환할 수 있습니다.
        </ListItem>
        <ListItem className="text-xs text-[#767676] pt-3">
            OK캐쉬백 포인트
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            10포인트 이상 보유 시, 10포인트 단위로 전환 가능합니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            월간 5만 포인트, 연간 50만 포인트까지 전환할 수 있습니다. (1일 최대 10회)
        </ListItem>
        <ListItem className="text-xs text-[#767676] pt-3">
            SC360 리워드 포인트
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
            1포인트 이상 보유 시, 1포인트 단위로 전환 가능합니다.
        </ListItem>
      </ListBody>
    </>
  );
}
