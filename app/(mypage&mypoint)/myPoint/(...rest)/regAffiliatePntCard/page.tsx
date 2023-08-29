import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import { Checkbox } from "@/components/atoms/Checkbox";
import DefListSimple from "@/components/atoms/DefListSimple";
import Dropdown from "@/components/atoms/Dropdown";
import FallbackImage from "@/components/atoms/FallbackImage";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import TabForTabBox from "@/components/atoms/TabForTabBox";
import TextBox from "@/components/atoms/TextBox";
import NoticeBox from "@/components/modules/NoticeBox";
import TabBoxSimple from "@/components/modules/TabBoxSimple";
import LinkImageWithFallback from "@/components/ui/LinkImageWithFallback";
import { ImageProp } from "@/types/LinkProps";
import Image from "next/image";
import { Suspense } from "react";

export default function regAffiliatePntCard() {
  const image: ImageProp = {
    _src: "",
    type: "image",
    size: { h: 32, w: 112 },
  };

  const 제휴멤버십 = [
    "제휴사를 선택하세요.",
    "삼성전자 포인트",
    "대한항공 마일리지",
    "아시아나마일리지",
  ];
  return (
    <>
      <div>
        <TabBoxSimple>
          {/* TODO: map 사용 */}
          <TabForTabBox href="">삼성전자 멤버십</TabForTabBox>
          <TabForTabBox href="">대한항공</TabForTabBox>
          <TabForTabBox href="">아시아나항공</TabForTabBox>
        </TabBoxSimple>

        <div className="p-5">
          <h3 className="hidden">삼성전자 멤버십</h3>
          <p className="pb-4">
            <LinkImageWithFallback _href="" image={image} name="test" />
          </p>
          <DefListSimple
            dt="적용상품"
            dd={"삼성전자가 공급한 제품<br />(이마트 내 삼성전자 매장)"}
          />
          <DefListSimple
            dt="적립"
            dd={"구매 금액의 0.2% 신세계포인트와 동시적립"}
          />
        </div>

        <div className="bg-[#fbfbfb] p-5 border-b border-[#e8e8e8] mb-10 text-[14px]">
          <div className="relative pb-2">
            <p className="">
              [필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의
            </p>
          </div>
          <Checkbox
            id="all_checker"
            name="동의합니다."
            nameClass="text-[14px]"
          />
        </div>

        <div className="px-5 pb-10">
          <div className="pb-4 box-border">
            <p className="pb-2 text-xs">이름을 입력해 주세요.</p>
            <Dropdown
              id="membership"
              title="제휴멤버십선택"
              options={제휴멤버십}
            ></Dropdown>
          </div>
          <div className="pb-4 box-border">
            <p className="pb-2 text-xs">카드번호</p>
            <TextBox id="name" type="text">
              이름 입력
            </TextBox>
          </div>
          <ButtonPrimary className="pt-10" round="rounded-lg">
            등록하기
          </ButtonPrimary>
        </div>

        {/* TODO: NoticeBox theme 설정 */}
        <NoticeBox
          type="info"
          className="mx-5 mt-[32px] mb-[80px]"
          title="유의사항"
        >
          <ListForNoticeBox level={2}>
            제휴 멤버십 동시 적립 서비스는 이마트에서만 제공되는 서비스입니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            해당 제휴사에서 승인된 멤버십 카드 번호만 등록하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            제휴사당 최대 1개의 카드만 등록하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            잘못된 제휴 멤버십 카드번호 등록 시 제휴 포인트는 적립되지 않으며
            잘못된 정보 등록에 대한 책임은 등록한 회원에게 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            제휴 멤버십의 상태가 정상일 경우에만 포인트가 적립됩니다. (휴면/탈퇴
            시 적립불가)
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            이미 등록된 제휴 멤버십 카드는 다른 ID로 중복 등록할 수 없습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            동시 적립 서비스만 제공되며, 제휴 포인트 사용을 원할 경우에는 해당
            제휴사 카드를 제시해야 합니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            제휴 종료 시 사전 공지드리며, 기존에 등록된 제휴 멤버십 카드번호는
            종료일 기준으로 일괄 삭제됩니다.
          </ListForNoticeBox>
        </NoticeBox>
      </div>
    </>
  );
}
