export default function PointServiceTable({
    data,
}:{
    data: {};
}{
    return(
        <>
            <h4 className="text-sm font-medium leading-6 pb-2">{brandname}</h4>
            <div className="border-t-[1px] border-t-solid border-t-[#222222]">
                <table className="w-full table-fixed break-all border-0 border-spacing-0">
                    <caption className="overflow-hidden border-0 absolute z-[-1] w-[1px] h-[1px] ">이마트/이마트 트레이더스 기본 적립 포인트</caption>
                    <colgroup>
                        <col width={"auto"}/>
                        <col width={"25%"} className="min-w-[70px]"/>
                    </colgroup>
                    <tr className="border-0">
                        <th scope={'row'}
                            className="border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-[1px] border-br-solid border-b-[#e8e8e8] font-normal break-all px-2 py-[15px] text-left text-xs leading-5 align-middle">
                            현금, 상품권, 일반 신용카드
                        </th>
                        <td rowSpan={10}
                            className="border-b-[1px] border-br-solid border-b-[#e8e8e8] text-center font-medium break-all text-[13px] leading-[21px] align-middle">
                            <strong>1</strong>
                            포인트
                        </td>
                    </tr>
                    <tr className="border-0">
                        <th scope={'row'}
                            className="border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-[1px] border-br-solid border-b-[#e8e8e8] font-normal break-all px-2 py-[15px] text-left text-xs leading-5 align-middle">
                            [이마트] 삼성카드/e카드/SC카드/KB국민카드
                        </th>
                    </tr>
                </table>
            </div>
        </>
    );
};