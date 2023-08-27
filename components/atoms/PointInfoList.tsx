import Image from "next/image";

export default function PointInfoList({
    src,
    name,
    li_mr,
}:{
    src: string;
    name: string;
    li_mr: string;
}){
  return (
      <li className={`inline-block align-top w-20 mr-[calc(${li_mr})] mb-5`}>
          <a className="block relative w-[calc(100%+34px)] -left-[17px] no-underline">
                            <span className="w-[78px] border-[1px] border-solid border-[#e8e8e8] bg-white rounded-lg block my-[0px] mx-auto">
                                <Image
                                    className="block w-full border-0"
                                    src={src}
                                    alt={`${name} logo`}
                                    width={156}
                                    height={156}
                                ></Image>
                            </span>
              <span className="block text-center text-[12px] leading-[20px] break-keep pt-2 my-[0px] mx-auto">{name}</span>
          </a>
      </li>
  );
};