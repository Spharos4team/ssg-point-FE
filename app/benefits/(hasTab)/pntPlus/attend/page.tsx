import Image from "next/image";

export default function AttendPage() {
  return (
    <div className="relative">
      <button
        className="absolute right-5 top-[27px] h-[25px] text-[15px] pl-[24px] box-border z-[1] text-white
      before:content-[''] before:absolute before:left-0 before:top-[3px] before:w-[18px] before:h-[19px] before:bg-[url('/images/icon_share.png')] before:bg-[100%_auto]"
      >
        <span className="hidden">출석체크</span>공유
      </button>
      <div className="chcheck_event_box">
        <div className="chcheck_img relative">
          <Image
            className="block w-full"
            src={"/images/attend_img_aug.jpg"}
            width={750}
            height={860}
            alt="8월 출석 체크"
          />
        </div>
        <div className="chcheck_calendar_box renewal bg-white box-border px-[4.5%] py-[5.35%] w-full min-w-[320px]">
            <ul className="chcheck_calendar space2 box-border w-full text-left mx-auto mb-[-1.25%]">
                <li className="ml-[28.9%] relative w-[13.2%] pb-[13.2%] inline-block align-top mr-1/80 mb-1/80">
                    <div className="chcheck complete">
                        <span className="chcheck_in table table-fixed w-full h-full">
                            <Image className="" src={"/images/attend_stamp.png"} alt={"1일 출석 완료"} width="108" height="108"/>
                        </span>
                    </div>
                </li>
                <li className="relative w-[13.2%] pb-[13.2%] inline-block align-top mr-1/80 mb-1/80">
                    <div className="chcheck complete">
                        <span className="chcheck_in table table-fixed w-full h-full">
                            <Image className="" src={"/images/attend_stamp.png"} alt={"1일 출석 완료"} width="108" height="108"/>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <Image className="block w-full" src="/images/attend_img_bottom.jpg" alt="출석체크 참여방법 : 신세계포인트에 로그인하기 - 캘린더에서 오늘의 날짜 선택하여 출석체크 하기 - 출석 횟수에 따라서 포인트 받기   (유의사항) 1일 1회 참여 가능합니다. 지급된 포인트는 당일 사용이 가능합니다. " width="750" height="815" />
        </div>
      </div>
    </div>
  );
}
