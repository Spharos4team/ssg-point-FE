import Button from "@/components/atom/Button";
import Checkbox from "@/components/atom/Checkbox";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Dropdown from "@/components/atom/Dropdown";
import Input from "@/components/atom/Input";
import Subtitle from "@/components/atom/Subtitle";
import Tab from "@/components/atom/Tab";
import TabPannel from "@/components/atom/TabPannel";
import Tabs from "@/components/atom/Tabs";
import InputCard from "@/components/module/InputCard";
import Image from "next/image";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import ListItem from "@/components/atom/ListItem";

export default function RegAffiliatePntCardPage() {
  const afilliTab = "affiliTab";
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          신세계포인트에{" "}
          <span className="text-benefits font-medium">제휴사 포인트 </span>{" "}
          더하기!
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          이마트 제휴 멤버십 포인트 카드를 등록하면
          <br />
          신세계포인트와 제휴사 포인트를
          <br />
          모두 적립할 수 있어요.
        </Subtitle>
      </ContentHeader>

      <Tabs>
        <Tab
          className={`relative p-3`}
          id={afilliTab}
          label="samsungMembership"
          activeColor="benefits"
          initValue
        >
          삼성전자
          <br />
          멤버십
        </Tab>
        <Tab
          className="relative p-3"
          id={afilliTab}
          label="koreanAir"
          activeColor="benefits"
        >
          대한항공
        </Tab>
        <Tab
          className="relative p-3"
          id={afilliTab}
          label="asiana"
          activeColor="benefits"
        >
          아시아나항공
        </Tab>
      </Tabs>

      <TabPannel id={afilliTab} label="samsungMembership">
        <p className="pb-4">
          <Image
            src={"/images/resources/myPoint/samsung_membership.png"}
            width={120}
            height={32}
            alt=""
          />
        </p>
        <dl className="flex text-[13px] leading-[21px]">
          <dt className="min-w-[64px] font-medium">적용상품</dt>
          <dd>
            삼성전자가 공급한 제품
            <br />
            (이마트 내 삼성전자 매장)
          </dd>
        </dl>
        <dl className="flex text-[13px] leading-[21px]">
          <dt className="min-w-[64px] font-medium">적립</dt>
          <dd>구매 금액의 0.2% 신세계포인트와 동시적립</dd>
        </dl>
      </TabPannel>
      <TabPannel id={afilliTab} label="koreanAir">
        <p className="pb-4">
          <Image
            src={"/images/resources/myPoint/korean_air.png"}
            width={120}
            height={32}
            alt=""
          />
        </p>
        <dl className="flex text-[13px] leading-[21px]">
          <dt className="min-w-[64px] font-medium">적립</dt>
          <dd>
            최종 7만원 이상 결제 시 3,000원당
            <br />
            1마일 신세계포인트와 동시 적립
            <p className="text-[11px] text-gray-500">
              ※ 항공사 마일리지간 선택 적립/월 1,000마일 한도
            </p>
          </dd>
        </dl>
      </TabPannel>
      <TabPannel id={afilliTab} label="asiana">
        <p className="pb-4">
          <Image
            src={"/images/resources/myPoint/asiana.png"}
            width={120}
            height={32}
            alt=""
          />
        </p>
        <dl className="flex text-[13px] leading-[21px]">
          <dt className="min-w-[64px] font-medium">적립</dt>
          <dd>
            최종 7만원 이상 결제 시 3,000원당
            <br />
            1마일 신세계포인트와 동시 적립
            <p className="text-[11px] text-gray-500">
              ※ 항공사 마일리지간 선택 적립/월 1,000마일 한도
            </p>
          </dd>
        </dl>
      </TabPannel>

      <div className="mb-10 p-5 space-y-2 border-b">
        <div className="flex items-center justify-between">
          <p className="text-sm">
            [필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의
          </p>
          <span className="block text-xs indent-[-99em] w-6 h-full opacity-50 bg-[url('/images/arrow_left.png')] bg-[7px_auto] bg-center rotate-180 bg-no-repeat">
            내용보기
          </span>
        </div>
        <Checkbox
          className="text-sm"
          id={"samsungmembership_chk"}
          name={`동의합니다.`}
        />
      </div>

      <div className="px-5 pb-10">
        <div className="pb-4">
          <p className="text-[13px] pb-2 leading-[21px]">제휴 멤버십 선택</p>
          <Dropdown
            className="w-full h-12 border rounded-lg"
            id=""
            options={[]}
          />
        </div>

        <InputCard id="regAffiliCard" />

        <div className="pt-10">
          <Button bgColor="primary">등록하기</Button>
        </div>
      </div>

      <div className="px-5 pb-20">
      <ListBody>
        <ListHeader className="text-sm leading-7 font-medium" border>
          유의사항
        </ListHeader>
        <ListItem bullet className="text-xs text-[#eb0000]">
          제휴 멤버십 동시 적립 서비스는 이마트에서만 제공되는 서비스입니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          해당 제휴사에서 승인된 멤버십 카드 번호만 등록하실 수 있습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          제휴사당 최대 1개의 카드만 등록하실 수 있습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          잘못된 제휴 멤버십 카드번호 등록 시 제휴 포인트는 적립되지 않으며 잘못된 정보 등록에 대한 책임은 등록한 회원에게 있습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          제휴 멤버십의 상태가 정상일 경우에만 포인트가 적립됩니다. (휴면/탈퇴 시 적립불가)
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          이미 등록된 제휴 멤버십 카드는 다른 ID로 중복 등록할 수 없습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          동시 적립 서비스만 제공되며, 제휴 포인트 사용을 원할 경우에는 해당 제휴사 카드를 제시해야 합니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          제휴 종료 시 사전 공지드리며, 기존에 등록된 제휴 멤버십 카드번호는 종료일 기준으로 일괄 삭제됩니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          자세한 제휴 포인트의 적립/사용 정책은 해당 제휴사에 문의해 주세요.
        </ListItem>
      </ListBody>
      </div>
    </>
  );
}
