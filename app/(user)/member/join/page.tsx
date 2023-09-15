import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import Image from "next/image";
import Link from "next/link";
import { JoinStep, joinSteps } from "@/data/joinSteps"

export default function JoinPage() {
  return (
    <>
      <ContentHeader>
        <ContentTitle>
          신세계포인트
          <br />
          <span className="font-bold">통합ID 회원가입</span>으로
          <br />
          다양한 혜택을 누리세요!
        </ContentTitle>
      </ContentHeader>

      <div className="px-5 pb-10">
        <ol className="divide-y">
          {joinSteps.map((step:JoinStep) => (
            <li
              key={step.id}
              className={`relative flex justify-start gap-x-5 h-[92px] items-center box-border `}
            >
              <div className="block w-[60] h-[62px] overflow-hidden">
                <Image
                  className={step.positionY}
                  width={60}
                  height={269}
                  src={step.icon}
                  alt={step.name}
                />
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="inline-block text-xs leading-5 pr-2">
                  STEP. {step.id}
                </span>
                <span className="inline-block font-medium text-base leading-[26px]">
                  {step.name}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 mb-20">
          <Link href={"/member/join/cert"}>
            <Button bgColor="primary">회원가입</Button>
          </Link>
          <Subtitle>만 14세 미만 아동은 회원가입할 수 없습니다.</Subtitle>
        </div>
      </div>
    </>
  );
}
