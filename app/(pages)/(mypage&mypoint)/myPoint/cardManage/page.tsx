import RoundedButton from "@/components/atoms/Button/RoundedButton";
import ButtonBasic from "@/components/atoms/Button/RoundedButton";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import PointBox from "@/components/atoms/PointBox";
import Link from "next/link";
import Image from "next/image";

export default function cardManage() {
  // @ts-ignore
  return (
    <section className="content depth2 mypoint">
      <h3 className="hidden">포인트 카드 관리</h3>
      <PointBox type="simpleCard" />

      {/* 카드 테이블 */}
      <div className="table_cnt0 px-[20px] py-[40px]">

        <p className="font-medium text-[16px] leading-[26px] pb-[16px]">온라인 카드</p>
        {/* 온라인 카드 테이블 */}
        <div className="pb-10">
          <table className="table-fixed w-full border-t-[1px] border-solid border-black">
            <caption className="hidden absolute z-[-1] w-[1px] h-[1px] ">온라인/모바일 카드</caption>
            <colgroup>
              <col width={"40%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">카드번호</th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">발급처</th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">발급일자</th>
              </tr>
            </thead>
            <tbody>
              {/* tr map */}
              <tr>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">3591-****-****-5278</td>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">카카오페이</td>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]"> 2021-03-27</td>
              </tr>
              <tr>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">9350-****-****-4246</td>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">신세계포인트닷컴</td>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]"> 2023-07-27</td>
              </tr>
              <tr>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">9350-****-****-8602</td>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">신세계포인트XSSG.COM</td>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]"> 2021-06-28</td>
              </tr>
              <tr>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">9350-****-****-4387</td>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">에브리데이(ON)</td>
                <td className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]"> 2023-08-03</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="hidden font-medium text-[16px] leading-[26px] pb-[16px]">비즈 클럽 카드</p>
          {/*링크 alt 에러*/}
          {/*<Link className="absolute right-2.5 top-[-37px] text-3 leading-5 font-[400]" href={""} alt={"카드 관리로 이동"}>카드 관리</Link>*/}
          <table className="hidden table-fixed w-full border-t-[1px] border-solid border-black">
            <caption className="w-full table-fixed border-solid border-1 border-black">비즈 클럽 카드</caption>
            <colgroup>
              <col width={"40%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
            <tr>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">카드번호</th>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">회사명</th>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">발급일자</th>
            </tr>
            </thead>
            <tbody></tbody>
          </table>

          <p className="font-medium text-[16px] leading-[26px] pb-[16px]">제휴 신용카드</p>
          <div className="relative pb-[40px]">
          <table className="table-fixed w-full border-t-[1px] border-solid border-black">
            <caption className="hidden absolute z-[-1] w-[1px] h-[1px]">제휴 신용카드</caption>
            <colgroup>
              <col width={"56%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">카드명</th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">발급처</th>
                <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">발급일자</th>
              </tr>
            </thead>
            <tbody>
              {/* tr map */}
              <tr>
                <td className="text-[#767676] font-[400] align-middle text-center border-b-[1px] border-solid border-#e8e8e8 py-3 box-border text-[13px] leading-[21px] break-keep" colSpan={3}>
                  <div className="py-[28px] ">
                    <p className="relative pt-16 text-[13px] text-center text-[#767676] after:content-[''] after:absolute after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[100%_auto] after:translate-x-[-50%]">
                      보유하신 제휴 신용카드가 없습니다.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>



          <p className="font-medium text-[16px] leading-[26px] pb-[16px]">오프라인 카드</p>
          <div className="relative">
          <table className="table-fixed w-full border-t-[1px] border-solid border-black">
            <caption className="hidden absolute z-[-1] w-[1px] h-[1px]">온라인/모바일 카드</caption>
            <colgroup>
              <col width={"40%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
            <tr>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">카드번호</th>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">발급처</th>
              <th className="font-[400] align-middle text-center border-b-[1px] border-solid border-[#e8e8e8] py-3 box-border text-[13px] break-keep leading-[21px]">발급일자</th>
            </tr>
            </thead>
            <tbody>
            {/* tr map */}
            <tr>
              <td className="text-[#767676] font-[400] align-middle text-center border-b-[1px] border-solid border-#e8e8e8 py-3 box-border text-[13px] leading-[21px] break-keep" colSpan={3}>
                <div className="py-[28px]">
                  <p className="relative pt-16 text-[13px] text-center text-[#767676] after:content-[''] after:absolute after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[100%_auto] after:translate-x-[-50%]">
                    보유하신 오프라인 카드가 없습니다.
                  </p>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>


      </div>
      {/* 버튼 모음 */}
      <div className="btn_box space1 px-[20px] pb-[40px]">
        <RoundedButton className="mb-[15px]">신규 포인트카드 등록하기</RoundedButton>
        <RoundedButton className="mb-[15px]">임시 발급 카드 인증하기</RoundedButton>
        <RoundedButton className="" backgroundColor="primary">
          포인트 비밀번호 변경하기
        </RoundedButton>
      </div>

      {/* bottom banner */}
      <div className="pt-10 pb-20 px-5 bg-[#f5f5f5]">
        <p className="text-[18px] leading-[26px] mb-5">
          다양한 신세계포인트
          <br />
          <strong className="font-[500] text-[#ea035c]">제휴 신용카드의 혜택</strong>을 확인하세요!
        </p>
        <ul className="list-none">
          <li className="rounded-lg overflow-hidden">
            {/* LinkImageWithFallback */}
            {/*<Link href={""} title={"이벤트 페이지 이동"}/>*/}
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Image
                src={"/images/ad_pointCard.jpg"}
                alt={"SHINSEGAE POINT 다양한 카드로 즐기는 포인트 우대&middot;쇼핑 혜택, 신세계포인트 제휴신용카드 보기 &rarr;"}
                width={750}
                height={660}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
          </li>
        </ul>
      </div>
    </section>
  );
}
