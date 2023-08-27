import Image from "next/image";

export default function RegularList({
    src,
    title,
    txt,
}:{
    src: string,
    title: string,
    txt: string,
}) {
    return (
        <li className="border-t-[1px] border-t-solid border-t-[#e8e8e8] relative min-h-[82px] box-border table w-full py-2
        last:border-b-[1px] last:border-b-solid last:border-b-[#e5e5e5]">
            <div className="pl-[90px] relative table-cell align-middle pr-[65px]">
                <Image
                    className="w-[50px] h-[50px] rounded-[50%] absolute top-1/2 left-[20px] -mt-[26px] border-[1px] border-solid border-[#d5d5d5]"
                    src={src}
                    alt={"로고 이미지"}
                    width={100}
                    height={100}></Image>
                <p className="text-[14px] font-medium leading-[24px] break-keep">{title}</p>
                <p className="text-[13px] text-[#767676] font-normal leading-[21px] break-keep">{txt}</p>
                <button className="bg-[url('/images/regular_mark.png')] bg-no-repeat bg-[100%_auto] w-5 h-[26px] absolute right-[30px] top-1/2 -mt-[13px] indent-[-999em] text-[1px] overflow-hidden">단골매장 삭제</button>
            </div>
        </li>
    );
}