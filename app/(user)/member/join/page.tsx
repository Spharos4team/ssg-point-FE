<<<<<<< HEAD
import Button from "@/components/atoms/Button/Button";
import ContentHeader from "@/components/atoms/ContentHeader";
import Link from "next/link";

export default function JoinPage() {
  const joinIcon =
    "before:content-[''] before:absolute before:top-1/2 before:left-[10px] before:translate-y-[-50%] before:w-[60px] before:h-[62px] before:bg-[url('/images/icon_join_steps.png')] before:bg-no-repeat before:bg-[100%_auto]";

  return (
    <>
      <ContentHeader
        main={
          <p className="text-2xl left-[34px] font-normal">
            신세계포인트
            <br />
            <span className="font-bold">통합ID 회원가입</span>
            으로
            <br />
            다양한 혜택을 누리세요!
          </p>
        }
      />
      <div className="px-5 pb-10">
        <ol className="divide-y">
          <li className={`relative h-[92px] box-border pl-[90px] ${joinIcon} `}>
            <span className="inline-block text-xs leading-5 pr-2 pt-9">
              STEP. 1
            </span>
            <span className="inline-block font-medium text-base leading-[26px] pt-9">
              본인인증
            </span>
          </li>

          <li
            className={`relative h-[92px] box-border pl-[90px] ${joinIcon} before:bg-[center_top_-70px]`}
          >
            <span className="inline-block text-xs leading-5 pr-2 pt-9">
              STEP. 2
            </span>
            <span className="inline-block font-medium text-base leading-[26px] pt-9">
              약관동의
            </span>
          </li>

          <li
            className={`relative h-[92px] box-border pl-[90px] ${joinIcon} before:bg-[center_top_-140px]`}
          >
            <span className="inline-block text-xs leading-5 pr-2 pt-9">
              STEP. 3
            </span>
            <span className="inline-block font-medium text-base leading-[26px] pt-9">
              정보입력
            </span>
          </li>

          <li
            className={`relative h-[92px] box-border pl-[90px] ${joinIcon} before:bg-[center_top_-210px]`}
          >
            <span className="inline-block text-xs leading-5 pr-2 pt-9">
              STEP. 4
            </span>
            <span className="inline-block font-medium text-base leading-[26px] pt-9">
              가입완료
            </span>
          </li>
        </ol>

        <div className="mt-6 mb-20">
          <Button className="h-12" backgroundColor="primary">
            <Link href={"/member/join/cert"}>회원가입</Link>
          </Button>
          <p className="mt-6 text-center text-xs text-[#767676]">
            만 14세 미만 아동은 회원가입할 수 없습니다.
          </p>
=======
import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import Image from "next/image";
import Link from "next/link";

export const joinSteps = [
  {
    id: 1,
    name: "본인인증",
    icon: "/images/resources/join/join_steps.png",
    positionY: "",
    url: "/member/join/cert",
  },
  {
    id: 2,
    name: "약관동의",
    icon: "/images/resources/join/join_steps.png",
    positionY: "translate-y-[-70px]",
    url: "/member/join/agree",
  },
  {
    id: 3,
    name: "정보입력",
    icon: "/images/resources/join/join_steps.png",
    positionY: "translate-y-[-140px]",
    url: "/member/join/form",
  },
  {
    id: 4,
    name: "가입완료",
    icon: "/images/resources/join/join_steps.png",
    positionY: "translate-y-[-210px]",
    url: "/member/join/success",
  },
];
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
          {joinSteps.map((step) => (
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
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
        </div>
      </div>
    </>
  );
}
