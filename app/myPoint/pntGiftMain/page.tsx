import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Dropdown from "@/components/atom/Dropdown";
import IndexStat from "@/components/atom/IndexStat";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import Subtitle from "@/components/atom/Subtitle";
import Link from "next/link";

export default function PntGiftMain() {
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          마음을 담아
          <br />
          <span className="text-benefits font-medium">신세계포인트를 선물</span>
          하세요.
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6 mb-5">
          신세계포인트 회원끼리 주고받는 <br />
          가장 실속있는 마음의 선물!
          <br />
          친구나 가족, 소중한 사람에게 선물해 보세요.
        </Subtitle>
        <Link href={"/myPoint/pntGift"}>
          <Button bgColor="primary">선물하기</Button>
        </Link>
      </ContentHeader>

      <div className="px-5 pb-10">
        <ListHeader className="text-[14px] font-medium" border>
          포인트 선물 내역을 확인하세요.
        </ListHeader>
        <ListHeader className="h-[50px] border-gray-300" border>
          <Dropdown id={""} options={["전체", "받은선물", "보낸선물"]} />
          <div className="flex gap-x-2">
            <IndexStat type="accumulate" />
            <IndexStat type="consumption" />
          </div>
        </ListHeader>
        <ListBody className="!my-0 divide-y border-b">
          <li className="flex justify-start py-4">
            <div className="min-w-[90px]">
              <IndexStat type="consumption" textHidden />
            </div>
            <div className="flex flex-col w-full items-center px-2">
              <p className="w-full text-xs text-gray-400">보낸 선물: 수락</p>
              <p className="w-full">권*(ID: ks********)</p>
            </div>
            <div>
              <p className="text-[11px] min-w-[62px] text-gray-400">
                2023-08-29
              </p>
            </div>
          </li>
        </ListBody>
      </div>
    </>
  );
}
