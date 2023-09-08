import Button from "@/components/atom/Button";
import Image from "next/image";

export default function BenefitMyLuckPage() {
  return (
    <>
      <div className="mt-[36px]">
        <div className="px-5 pt-10 pb-14 text-center">
          <div className="relative w-full min-h-[85vw]">
            <Image
              src={
                "https://storage.googleapis.com/ssg-images/pntPlus/myLuck_banner.png"
              }
              objectFit="contain"
              fill
              alt=""
            />
          </div>
          <p className="text-[6vw] font-bold pb-2">
            신세계포인트{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              운세서비스
            </span>
          </p>
          <p className="text-[5vw] pb-2">2023년 무료 신토정비결</p>
          <p className="text-[4vw] text-gray-500">
            오늘의 운세, 오늘의 띠별운세
            <br /> 오늘의 타로, 신년타로 제공
          </p>
        </div>
      </div>
      <div className="px-5 pb-10">
        <Button bgColor="primary">나의 운세 보러가기</Button>
      </div>
      <div className="px-5">유의사항...</div>
    </>
  );
}
