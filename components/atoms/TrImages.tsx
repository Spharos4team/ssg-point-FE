import Image from "next/image";

export default function TrImages({
    src1,
    width1,
    height1,
    content1,
    src2,
    width2,
    height2,
    content2,
    rowSpan,
    colSpan,
    point,
}:{
    src1: string;
    width1: number;
    height1: number;
    content1: string;
    src2: string;
    width2: number;
    height2: number;
    content2: string;
    rowSpan: number;
    colSpan: number;
    point: number;
}){
    return(
        <tr>
            <th scope={'row'} colSpan={colSpan ?? 1}
                className="border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-[1px] border-br-solid border-b-[#e8e8e8] font-normal break-all px-2 py-[15px] text-left text-xs leading-5 align-middle">
                <Image
                    className=" w-[60px] h-auto block mx-auto my-0"
                    src={src1}
                    width={width1}
                    height={height1}/>
                <span className="font-normal block text-[11px] leading-[14px] pt-2 text-center" dangerouslySetInnerHTML={{ __html: content1 }}></span>
            </th>
            <th scope={'row'} colSpan={colSpan ?? 1}
                className="border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-[1px] border-br-solid border-b-[#e8e8e8] font-normal break-all px-2 py-[15px] text-left text-xs leading-5 align-middle">
                <Image
                    className=" w-[60px] h-auto block mx-auto my-0"
                    src={src2}
                    width={width2}
                    height={height2}/>
                <span className="font-normal block text-[11px] leading-[14px] pt-2 text-center" dangerouslySetInnerHTML={{ __html: content2 }}></span>
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