import Button from "@/components/atoms/Button/Button";
import ListForConvert from "@/components/atoms/ListForConvert";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import NoticeBox from "@/components/modules/NoticeBox";
import Link from "next/link";

export default function ConvertPntList() {
  const pinkArrowBefore =
    "before:content-[''] before:absolute before:top-[39px] before:left-[calc(20px+25%)] before:ml-[-9px] before:w-[18px] before:h-[14px] before:bg-[url('/images/arrow_right_pink.png')] before:bg-no-repeat before:bg-[100%_auto]";
  const pinkArrowAfter =
    "after:content-[''] after:absolute after:top-[39px] after:right-[calc(20px+25%)] after:mr-[-9px] after:w-[18px] after:h-[14px] after:bg-[url('/images/arrow_right_pink.png')] after:bg-no-repeat after:bg-[100%_auto]";
  const pointList =
    "relative inline-block box-border w-[80px] h-[103px] before:content-[''] before:block before:w-[80px] before:h-[80px] before:mb-2 before:bg-[url('/images/cnvrt_pntList.png')] before:bg-no-repeat before:bg-[258px_auto] before:bg-[]";
  const pointSpan = "block text-[11px] leading-[19px]";
  return (
    <>
      <div className="pb-10">
        <div
          className={`relative mt-6 max-w-[320px] mx-auto ${pinkArrowBefore} ${pinkArrowAfter}`}
        >
          <ol className="text-center space-x-10">
            <li
              className={`${pointList} before:left-[calc(10px-12%)] before:bg-left-bottom`}
            >
              <span className={`${pointSpan}`}>포인트 선택</span>
            </li>
            <li className={`${pointList} before:bg-top`}>
              <span className={`${pointSpan}`}>포인트 입력</span>
            </li>
            <li className={`${pointList} before:bg-right-top`}>
              <span className={`${pointSpan}`}>포인트 전환</span>
            </li>
          </ol>
        </div>

        <div className="pt-10 px-5">
          <Button className="h-12" backgroundColor="pink">
            한 번에 조회하기
          </Button>
        </div>
      </div>

      <div className="pb-10">
        <ul className="first:border-t last::border-b border-[#e8e8e8]">
          <ListForConvert
            id="convertPntSamsung"
            name="convertPntList"
            title="삼성카드 포인트"
            src="/images/samsung_pnt.png"
            miniLink={{ href: "", name: "조회하기" }}
          />

          <ListForConvert
            id="convertPntOk"
            name="convertPntList"
            title="OK캐쉬백 포인트"
            src="/images/ok_pnt.png"
            miniLink={{ href: "", name: "조회하기" }}
          />

          <ListForConvert
            aTag="https://open.standardchartered.co.kr/bc/bc_common?menuid=OBC04020000000000&langCode=KR"
            id="convertPnt360"
            name="convertPntList"
            title="360 리워드 포인트"
            src="/images/360_pnt.png"
            miniLink={{ href: "", name: "" }}
          />
        </ul>
      </div>

      <div className="px-5">
        <Button className="h-12" backgroundColor="primary">
          전환하기
        </Button>
        <Link
          href={""}
          className="relative float-right top-2 text-sm leading-[18px] text-[#767676] pr-[10px]
                after:content-[''] after:absolute after:h-[10px] after:w-[6px] after:top-1/2 after:right-0 after:mt-[-4.5px] after:bg-[url('/images/arrow_right_gray.png')] after:bg-no-repeat after:bg-[100%_auto]"
        >
          포인트 한번에 조회하기 동의 철회
        </Link>
      </div>

      {/* 유의사항 */}
      <NoticeBox
        type="info"
        className="mt-[80px] bg-[#fbfbfb]"
        title="유의사항"
      >
        <ListForNoticeBox level={5}>
          각 포인트는 신세계포인트와 1:1로 전환되며 포인트 전환 후 취소할 수
          없습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          매일 23:30 ~ 01:30 (2시간)은 포인트 전환 시스템 점검으로 서비스 이용이
          일시 중단됩니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          해당 제휴사 시스템 점검 시 서비스 이용이 일시 중단되며 자세한 사항은
          해당 제휴사 공지사항을 확인해 주세요.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          제휴사 사정에 따라 포인트 전환 정책은 변경될 수 있으며 자세한 사항은
          해당 제휴사에 문의해 주세요.
        </ListForNoticeBox>

        <ListForNoticeBox level={2} isBullet={false} className="pt-3">
          삼성카드
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          5천 포인트 이상 보유 시, 5천 포인트 단위로 전환 가능합니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          신세계-삼성카드 소지자에 한해 전환 서비스를 이용할 수 있습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          월간 10만 포인트, 연간 100만 포인트까지 전환할 수 있습니다.
        </ListForNoticeBox>

        <ListForNoticeBox level={2} isBullet={false} className="pt-3">
          OK캐쉬백
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          10포인트 이상 보유 시, 10포인트 단위로 전환 가능합니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          월간 5만 포인트, 연간 50만 포인트까지 전환할 수 있습니다. (1일 최대
          10회)
        </ListForNoticeBox>

        <ListForNoticeBox level={2} isBullet={false} className="pt-3">
          SC360 리워드
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          1포인트 이상 보유 시, 1포인트 단위로 전환 가능합니다.
        </ListForNoticeBox>
      </NoticeBox>
    </>
  );
}
