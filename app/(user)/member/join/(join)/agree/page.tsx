"use client";
import ContentTitle from "@/components/atoms/ContentTitle";
import CertNavigation from "@/components/atoms/CertNavigation";
import Button from "@/components/atoms/Button/Button";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import ListBody from "@/components/atoms/ListBody";
import {Checkbox} from "@/components/atoms/Checkbox";
import Modal from "@/components/atoms/Modal";
import NoticeBox from "@/components/modules/NoticeBox";

type checkType = {
    id: number;
    name: string;
    required: boolean;
    content_url: string;
    isCheck: boolean;
}
export default function AgreePage() {
    const checkList = [
        {
            id: 1,
            name: "신세계포인트 회원 이용약관",
            required: true,
            content_url: "",
        },
        {
            id: 2,
            name: "개인정보 수집 및 이용동의",
            required: true,
            content_url: "",
        },
        {
            id: 3,
            name: "이마트/신세계 공동 개인정보 수집 및 이용 동의",
            required: true,
            content_url: "",
        },
        {
            id: 4,
            name: "통합회원 서비스 제공 개인정보 제3자 제공 동의",
            required: true,
            content_url: "",
        },
        {
            id: 5,
            name: "혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의",
            required: false,
            content_url: "",
        },
        {
            id: 6,
            name: "이마트/신세계 공동 개인정보 수집 및 이용 동의",
            required: false,
            content_url: "",
        },
    ];

  return (
    <>
        <div className="px-5 py-10">
            <CertNavigation/>
            <ContentTitle
                className="font-medium"
            >
                약관동의
            </ContentTitle>
        </div>
        <div className="px-5">
            <Button
                backgroundColor={"gray"}
                className="h-12 mb-3 border-0 font-medium"
            >
                모두 동의합니다.
            </Button>
            <ListForNoticeBox level={2} isReference>
                전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며, 개별적인 동의 선택도 가능합니다. 선택항목에 대한 동의를 거부하시더라도 필수 서비스 이용은 가능합니다.
            </ListForNoticeBox>
        </div>
        <div className="pt-10 px-5 ">
            <h3 className="font-medium pb-4 leading-7 text-lg">
                신세계포인트 통합회원
            </h3>
            <p className="text-[11px] leading-5 font-medium">
                ㈜이마트, ㈜신세계, ㈜광주신세계, ㈜신세계동대구복합환승센터 귀중
            </p>
        </div>
        <div>
            <ListBody className="py-4 space-y-4 px-5">
                {checkList.map((term) => (
                    <li className="flex items-center justify-between">
                        <Checkbox
                            className="text-sm"
                            id={term.id + "_chk"}
                            name={`${term.required ? "[필수]" : "[선택]"} ${term.name}`}
                        />
                        <Button
                            id="termsbtn_1"
                            className="absolute right-0 top-0 w-[24px] h-[22px]"
                            type="basic"
                            // onClick={() => handleAppRecord(term.id, true)}
                        >
                    <span className="block w-[24px] h-[100%] text-[0] indent-[-9999em] relative bg-[url('/images/arrow_down.png')] bg-[position:right_8px_bottom] bg-no-repeat bg-[9px_auto] opacity-[.5] rotate-[-90deg] box-border">
                      내용보기
                    </span>
                        </Button>
                        {/* --- Terms Content Modal --- */}
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Modal id={term.id} center>
                            {term.content_url}test
                        </Modal>
                        {/* --- Validate Modal --- */}
                        <Modal id={`${term.id}_valid`} center>
                            <p className="text-sm tracking-[-.3px]">
                                {term.required ? "[필수]" : "[선택]"} {term.name}에
                                동의해주세요.
                            </p>
                            <Button
                                className="mt-5 !h-10"
                                bgColor="black"
                                // onClick={() => handleAppRecord(`${term.id}_valid`, false)}
                            >
                                확인
                            </Button>
                        </Modal>
                    </li>
                ))}
            </ListBody>
        </div>
        <div className="!px-5 py-5">
            <Button
                type={"link"}
                className="h-12 !font-medium leading-6 text-sm "
                href={'/member/join/form'}
                backgroundColor={'white'}
            >
                다음
            </Button>
        </div>
        <NoticeBox
            type={"info"}
            title={"유의사항"}
            className="px-5"
        >
            <ListForNoticeBox level={2} isBullet>
                선택항목 수집 및 이용동의를 거부하시더라도 기본 서비스는 이용하실 수 있습니다.
            </ListForNoticeBox>
            <ListForNoticeBox level={2} isBullet>
                이미 신세계포인트 회원이신 경우 신세계포인트 온라인 통합ID 가입 시 입력한 정보로 회원정보가 변경됩니다.
            </ListForNoticeBox>
        </NoticeBox>
      {/*<ContentHeader>*/}
      {/*  /!* TODO: page navigation component *!/*/}
      {/*  <ContentTitle>약관동의</ContentTitle>*/}
      {/*</ContentHeader>*/}
    </>
  );
}
