export default function TrValue ({
    children,
    rowSpan,
    colSpan,
    point,
}:{
    children: React.ReactNode;
    rowSpan?: number;
    colSpan?: number;
    point?: number;
}){
    return (
        <tr>
        <th scope={'row'} colSpan={colSpan ?? 1}
            className="border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-[1px] border-br-solid border-b-[#e8e8e8] font-normal break-all px-2 py-[15px] text-left text-xs leading-5 align-middle">
            {children}
        </th>
            {rowSpan === 0 ? <></> :
        <td rowSpan={rowSpan ?? 1}
            className="border-b-[1px] border-br-solid border-b-[#e8e8e8] text-center font-medium break-all text-[13px] leading-[21px] align-middle">
            <strong>{point}</strong>
            포인트
        </td>
            }
        </tr>
    );
};