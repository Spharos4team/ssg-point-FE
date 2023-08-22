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
      <div className="">
        <div className="relative">
          <Image
            className="block"
            src={"/images/attend_img_aug.jpg"}
            width={750}
            height={860}
            alt="8월 출석 체크"
          />
        </div>
      </div>
    </div>
  );
}
