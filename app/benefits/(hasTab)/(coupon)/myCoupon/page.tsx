import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="coupon_lists_wrap benefits px-5 pt-2.5 pb-15 relative">
      <h3 className="inline-block hidden absolute z-[-1] w-[1px] h-[1px] text-0">사용가능 쿠폰</h3>
      <div className="coupon_serch h-[46px] flex items-center justify-between border-b-[1px] border-solid border-black">
        <div
          className="select_box w-[95px] h-[38px] relative inline-block align-top text-[0] bg-white
                after:w-[12px] after:h-[8px] after:top-[22px] after:bg-[url('/images/arrow_down.png') after:bg-no-repeat after:bg-[100%_auto]
                after:conent-[''] after:absolute after:z-[1] after:right-[14px] after:-translate-y-[50%]"
        >
          <select
            className="h-[38px] pr-[30px] pl-[10px] block w-full box-border text-[14px] relative z-[1] text-black"
            title="쿠폰 정렬순서"
          >
            <option className="font-normal block whitespace-nowrap min-h-[1.2em]" value="deadline">
              마감임박
            </option>
            <option className="font-normal block whitespace-nowrap min-h-[1.2em]" value="latest">
              최신순
            </option>
          </select>
        </div>
        <div className="all_btn_wrap pr-[5px]">
          <Link
            className="text-[12px] text-[#767676] pr-2.5 block relative no-underline
                        before:bg-[url('/images/arrow_right_pink.png')] before:bg-no-repeat before:w-1.5 before:h-2.5 before:right-0 before:left-[unset] before:bottom-[1px] before:opacity-70 before:content-[''] before:inline-block"
            href={''}
          >
            더 많은 쿠폰 보기
          </Link>
        </div>
      </div>
      <ul className="list-none">
        <li className="border-b-[1px] border-solid border-[#e8e8e8] pt-4 box-border">
          <div className="coupon_headline inline-block align-top">
            <div className="coupon_point_box relative">
              <span className="deadline hidden bg-[#ea035c] absolute text-[9px] text-white text-center px-1 py-0.5 h-[13px] rounded-br-[4px]">
                마감임박
              </span>
              <Image
                className="w-[80px] h-[80px] block rounded-[8px]"
                src={'/images/megabox_coupon.png'}
                alt={'[메가박스] 영화 1만원 관람 쿠폰'}
                width={890}
                height={569}
              />
            </div>
            <Image
              className="brand_img w-[79px] h-[40px] block"
              src={'/images/megabox_logo.png'}
              alt={'메가박스'}
              width={158}
              height={80}
            />
          </div>
          <div className="coupon_content pl-[18px] inline-block w-[calc(100%-80px)] align-top box-border">
            <p className="cnt_desc text-[11px] text-[#767676] leading-[19px] break-keep whitespace-nowrap text-ellipsis">
              메가박스 영화 1만원 관람 쿠폰
            </p>
            <p className="cnt_tit text-[16px] text-black font-[500] pt-0.5 pb-3 leading-[26px]">
              [메가박스] 영화 1만원 관람 쿠폰
            </p>
            <p className="cnt_term font-serif text-[#767676] text-[11px] leading-[19px] font-[500]">
              2023-08-01~2023-08-31
              <span
                className="cnt_remaining text-[#c85208] pl-[7px] break-keep
                            before:content-[''] before:clear-both before:inline-block before:w-0.25 before:h-2.5 before:bg-[#cbcbcb] before:mr-2 before:align-middle befoe:mb-0.25"
              >
                <span className="wp inline-block whitespace-nowrap">9일 남음</span>
              </span>
            </p>
            <div className="franchisee barcode flex justify-between items-center w-full border-t-[1px] border-solid border-[#e8e8e8] relative pt-3 pb-4 box-border">
              <div className="coupon_btn_wrap flex justify-between items-center w-full">
                <div className="point_img pt-1">
                  <Image
                    className="mr-[5px] w-[20px] h-[20px]"
                    src={'/images/megabox_logo2.png'}
                    alt={'메가박스'}
                    width={40}
                    height={40}
                  />
                </div>
                <button className="coupon_use_btn indent-0 bg-[url('/images/barcode.png')] bg-no-repeat w-[85px] h-[15px] text-[11px] text-[#222222] bg-[39px_15PX] basis-[85px] pr-[45px] leading-[11px] cursor-pointer align-middle">
                  사용하기
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="no_result_box bd_type5 hidden pt-10 border-t-[1px] border-solid border-[#222222]"></div>
    </div>
  );
}
