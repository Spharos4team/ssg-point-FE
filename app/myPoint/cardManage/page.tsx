import Button from "@/components/atom/Button";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import PointCard from "@/components/module/PointCard";
import Image from "next/image";
import Link from "next/link";

export default function CardManagePage() {
  return (
    <>
      <div className="mt-[36px]">
        <PointCard type="cardNumber" />
      </div>

      <div className="px-5">
        <div className="pb-12">
          <ListHeader className="text-base font-medium" border>
            온라인 카드
          </ListHeader>

          <table className="basic_table">
            <thead className="center">
              <tr className=" border-b text-[13px]">
                <th className="w-[40%]">카드번호</th>
                <th className="">발급처</th>
                <th className="w-[81px]">발급일자</th>
              </tr>
            </thead>
            <tbody className="center text-gray-500">
              <tr>
                <td className="text-xs"> 9350-****-****-5220 </td>
                <td>신세계포인트닷컴</td>
                <td>2023-08-01</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pb-12">
          <ListHeader className="text-base font-medium" border>
            온라인 카드
          </ListHeader>

          <table className="basic_table">
            <thead className="center">
              <tr className=" border-b text-[13px]">
                <th className="w-[40%]">카드번호</th>
                <th className="">발급처</th>
                <th className="w-[81px]">발급일자</th>
              </tr>
            </thead>
            <tbody className="center text-gray-500">
              <tr>
                <td className="text-xs"> 9350-****-****-5220 </td>
                <td>신세계포인트닷컴</td>
                <td>2023-08-01</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pb-12">
          <ListHeader className="text-base font-medium" border>
            온라인 카드
          </ListHeader>

          <table className="basic_table">
            <thead className="center">
              <tr className=" border-b text-[13px]">
                <th className="w-[40%]">카드번호</th>
                <th className="">발급처</th>
                <th className="w-[81px]">발급일자</th>
              </tr>
            </thead>
            <tbody className="center text-gray-500">
              <tr>
                <td className="text-xs"> 9350-****-****-5220 </td>
                <td>신세계포인트닷컴</td>
                <td>2023-08-01</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-y-4 pb-10">
          <Link href={"/myPoint/regPntCard"}>
            <Button>신규 포인트 카드 등록하기</Button>
          </Link>
          <Button>임시 발급 카드 인증하기</Button>
          <Button bgColor="primary">포인트 비밀번호 변경하기</Button>
        </div>
      </div>

      <div className="relative px-5 pb-20">
        <div className="relative h-[80vw] ">
          <Image
            src={
              "https://storage.googleapis.com/ssg-images/myPoint/cardManage_banner.jpg"
            }
            fill
            alt=""
          />
        </div>
      </div>
    </>
  );
}
