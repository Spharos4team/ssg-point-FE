
export default function CardTable(
    name: string,
    trMap: any,

){

    return (
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
    );
};

