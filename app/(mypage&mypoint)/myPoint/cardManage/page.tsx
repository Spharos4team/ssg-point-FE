import Button from "@/components/atoms/Button/Button";
import PointBox from "@/components/modules/PointBox";
import Image from "next/image";

import Cards from "@/datas/card.data.json";

export default function cardManage() {
  const onlineCard = Cards.filter((item) => item.type === "online");
  return (
    <>
      <h3 className="hidden">포인트 카드 관리</h3>
      <PointBox type="simpleCard" />

      {/* 카드 테이블 */}
      <div className="px-5 py-10">
        <p className="font-medium text-[16px] leading-[26px] pb-[16px]">
          온라인 카드
        </p>
        {/* 온라인 카드 테이블 */}
        <div className="pb-10">
          <table className="table-fixed w-full border-t-[1px] border-solid border-black">
            <caption className="hidden absolute z-[-1] w-[1px] h-[1px] ">
              온라인/모바일 카드
            </caption>
            <colgroup>
              <col width={"40%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  카드번호
                </th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  발급처
                </th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  발급일자
                </th>
              </tr>
            </thead>
            <tbody>
              {/* tr map */}
              {onlineCard ? (
                onlineCard.map((item) => (
                  <ValueInCardTable
                    key={item.id}
                    cardNumber={item.number}
                    agency={item.agency}
                    date={item.reg_date}
                  />
                ))
              ) : (
                <NoValuesInTable
                  message="보유하신 온라인 카드가 없습니다."
                  colSpan={3}
                />
              )}
            </tbody>
          </table>
        </div>
        <p className="hidden font-medium text-[16px] leading-[26px] pb-[16px]">
          비즈 클럽 카드
        </p>
        {/*링크 alt 에러*/}
        {/*<Link className="absolute right-2.5 top-[-37px] text-3 leading-5 font-[400]" href={""} alt={"카드 관리로 이동"}>카드 관리</Link>*/}
        <table className="hidden table-fixed w-full border-t-[1px] border-solid border-black">
          <caption className="w-full table-fixed border-solid border-1 border-black">
            비즈 클럽 카드
          </caption>
          <colgroup>
            <col width={"40%"} />
            <col width={"auto"} />
            <col width={"81px"} />
          </colgroup>
          <thead>
            <tr>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                카드번호
              </th>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                회사명
              </th>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                발급일자
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        <p className="font-medium text-[16px] leading-[26px] pb-[16px]">
          제휴 신용카드
        </p>
        <div className="relative pb-[40px]">
          <table className="table-fixed w-full border-t-[1px] border-solid border-black">
            <caption className="hidden absolute z-[-1] w-[1px] h-[1px]">
              제휴 신용카드
            </caption>
            <colgroup>
              <col width={"56%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  카드번호
                </th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  발급처
                </th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  발급일자
                </th>
              </tr>
            </thead>
            <tbody>
              {/* tr map */}
              <NoValuesInTable
                message="보유하신 제휴 신용카드가 없습니다."
                colSpan={3}
              />
            </tbody>
          </table>
        </div>

        <p className="font-medium text-[16px] leading-[26px] pb-[16px]">
          오프라인 카드
        </p>
        <div className="relative">
          <table className="table-fixed w-full border-t-[1px] border-solid border-black">
            <caption className="hidden absolute z-[-1] w-[1px] h-[1px]">
              온라인/모바일 카드
            </caption>
            <colgroup>
              <col width={"40%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  카드번호
                </th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  발급처
                </th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
                  발급일자
                </th>
              </tr>
            </thead>
            {/* tr map */}
            <tbody>
              <NoValuesInTable
                message="보유하신 오프라인 카드가 없습니다."
                colSpan={3}
              />
            </tbody>
          </table>
        </div>
      </div>
      {/* 버튼 모음 */}
      <div className="flex flex-col gap-y-4 px-5">
        <Button type="link" href="/myPoint/regPntCard" className="h-12">
          신규 포인트카드 등록하기
        </Button>
        <Button type="link" href="/sPoint/tempCardCert" className="h-12">
          임시 발급 카드 인증하기
        </Button>
        <Button
          type="link"
          href="/myPoint/chgPntPwdCert"
          className="!h-12"
          backgroundColor="primary"
        >
          포인트 비밀번호 변경하기
        </Button>
      </div>

      {/* bottom banner */}
      <div className="pt-10 pb-20 px-5 bg-[#f5f5f5]">
        <p className="text-[18px] leading-[26px] mb-5">
          다양한 신세계포인트
          <br />
          <strong className="font-[500] text-[#ea035c]">
            제휴 신용카드의 혜택
          </strong>
          을 확인하세요!
        </p>
        <ul className="list-none">
          <li className="rounded-lg overflow-hidden">
            {/* LinkImageWithFallback */}
            {/*<Link href={""} title={"이벤트 페이지 이동"}/>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Image
              src={"/images/ad_pointCard.jpg"}
              alt={
                "SHINSEGAE POINT 다양한 카드로 즐기는 포인트 우대&middot;쇼핑 혜택, 신세계포인트 제휴신용카드 보기 &rarr;"
              }
              width={750}
              height={660}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

const NoValuesInTable = ({
  message,
  colSpan,
}: {
  message: string;
  colSpan: number;
}) => {
  return (
    <tr>
      <td
        className="text-[#767676] font-[400] align-middle text-center border-b-[1px] border-solid border-#e8e8e8 py-3 box-border text-[13px] leading-[21px] break-keep"
        colSpan={colSpan}
      >
        <div className="py-[28px]">
          <p className="relative pt-16 text-[13px] text-center text-[#767676] after:content-[''] after:absolute after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[100%_auto] after:translate-x-[-50%]">
            {message}
          </p>
        </div>
      </td>
    </tr>
  );
};

const ValueInCardTable = ({
  cardNumber,
  agency,
  date,
}: {
  cardNumber: string;
  agency: string;
  date: string;
}) => {
  const converNumber = () => {
    const matchNumber = cardNumber.match(/.{1,4}/g);
    const fistConvert = matchNumber![1].replace(/./g, "*");
    const secondConvert = matchNumber![2].replace(/./g, "*");
    return [matchNumber![0], fistConvert, secondConvert, matchNumber![3]].join(
      "-"
    );
  };
  const convertDate = date.split("/").join("-");
  return (
    <tr>
      <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
        {converNumber()}
      </td>
      <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
        {agency}
      </td>
      <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">
        {convertDate}
      </td>
    </tr>
  );
};
