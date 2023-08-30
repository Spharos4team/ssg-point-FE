import RoundedButton from "@/components/atoms/Button/RoundedButton";
import ContentHeader from "@/components/atoms/ContentHeader";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";

export default function pntTip() {
  return (
    <>
      <div className="py-10 px-5">
        <ContentHeader
          main={
            <>
              <span className="text-[#ea035c]">포인트 적립도</span> 스마트하게!
            </>
          }
          sub="보기만 해도 쌓이는 초간단 꿀팁을<br />지금 바로 확인하세요."
        />
      </div>
        <div className="px-5 pb-10">
            <Button className="h-12" backgroundColor={'primary'}>확인하기</Button>
        </div>
    </>
  );
}
