<<<<<<< HEAD
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
=======
import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";

export default function PntTipPages() {
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          <span className="text-benefits font-medium">포인트 적립</span>
          스마트하게!
        </ContentTitle>
        <Subtitle className="!pt-2">
          보기만 해도 쌓이는 초간단 꿀팁을
          <br />
          지금 바로 확인하세요.
        </Subtitle>
      </ContentHeader>
      <div className="px-5 pb-10">
        <Button bgColor="primary">확인하기</Button>
      </div>
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
    </>
  );
}
