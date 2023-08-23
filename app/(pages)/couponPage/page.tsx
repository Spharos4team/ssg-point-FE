import BodyNavTop from "@/components/BodyNavTop";
import Link from "next/link";
import RoundedButton from "@/components/atoms/Button/RoundedButton";
import Image from "next/image";

//TODO: 쿠폰 리스트 표시
export default function couponPage() {
  return (
  <>
    <BodyNavTop />
    <h3 className="hidden inline-block absolute z-[-1] w-[1px] h-[1px]">쿠폰</h3>
    <div className="coupon_intro_box mt-9">
        <div className="coupon_top pt-[7%] bg-[url('/images/coupon_top.png')] bg-no-repeat bg-[100%_auto] border-b-2 border-solid border-[#ffffff]">
            <div className="coupon_tit bg-[#ff811d] px-[10px] py-[30px] text-center relative
            after:content-[''] after:w-[calc(100%-20px)] after:h-[calc(100%-15px)] after:block after:border-[2px] after:border-solid after:border-white after:border-b-0 after:absolute after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:rounded-t-[20px] after:bg-no-repeat after:text-center"
            >
                <strong className="sp_tit2 font-medium block mt-[15px] mb-[8px] text-[24px] leading-[34px] break-keep">
                    쇼핑 할인에서 제휴 우대까지
                    <br/>신세계포인트 회원만
                    <br/>누릴 수 있는 혜택!
                </strong>
                <p className="sp_txt5 text-[13px] leading-[21px] text-black">
                    원하는 쿠폰을 다운로드하고
                    <br/>마이 쿠폰함에 쓱- 담아 사용해 보세요.
                </p>
            </div>
        </div>
        <div className="coupon_bot pb-[7%] bg-[url('/images/coupon_bot.png')] bg-bottom bg-no-repeat bg-[100%_auto]">
            <div className="coupon_banner bg-[#ffc191] relative px-[10px] pb-[30px] pt-[10px]
            after:content-[''] after:w-[calc(100%-20px)] after:h-[calc(100%-20px)] after:block after:border-[2px] after:border-solid after:border-white after:border-t-0 after:absolute after:top-0 after:left-[50%] after:-translate-x-[50%] after:rounded-b-[20px] after:bg-no-repeat after:z-[0] after:text-center"
            ></div>
            <div className="coupon_button bg-[#ffc191] relative px-[20px] pb-[10px] pt-[6px]
                after:content-[''] after:w-[1px] after:h-[69px] after:block after:bg-white after:absolute after:top-[6px] after:left-[50%] after:-translate-x-[50%]"
            >
                <ul className="flex justify-center list-none">
                    <li className="my_coupon mr-[50px] pt-[8px] text-[13px] leading-[21px] w-[167px] text-center">
                        <Link
                            className="block box-border pt-[36px] h-[60px] bg-[url('/images/my_coupon.png')] bg-top bg-no-repeat bg-[48px_auto]"
                            href={""}>마이쿠폰함으로 이동</Link>
                    </li>
                    <li className="register_coupon pt-[8px] text-[13px] leading-[21px] w-[167px] text-center">
                        <button className="inline-block box-border pt-[33px] h-[60px] bg-[url('/images/register_coupon.png')] bg-top bg-no-repeat bg-[48px_auto] align-middle cursor-pointer">쿠폰 등록</button>
                    </li>
                </ul>
                <div className="register_coupon_box hidden bg-white rounded-[8px] px-[20px] py-[24px] mt-[16px]">
                    <p className="sp_txt1 text-[16px] leading-[26px]">
                        신세계포인트 쿠폰 등록을 위해
                        <br/>
                        <span className="text-[#c85208]">쿠폰 번호를 입력</span>
                        해 주세요.
                    </p>
                    <div className="input_box coupon_num mt-[16px] flex relative box-border w-full align-top">
                        <input
                            className="box-border block w-full border-[1px] border-solid border-[#e8e8e8] text-[14px] rounded-lg h-[48px] px-[16px] bg-white z-[2]"
                            type="text"
                            id="couponNum"
                        />
                        <label className="pr-[28px] absolute table left-0 right-0 box-border w-full h-[48px] pl-16px leading-[24px] text-[14px] text-[#767676] align-middle">
                            <span className="table-cell align-middle text-left break-keep text-[#767676]">
                                대소문자 구분하여 정확히 입력해 주세요.
                            </span>
                        </label>
                        <button className="del hidden absolute top-[19px] right-[10px] w-[10px] h-[10px] bg-[url('/images/del.png')] bg-center bg-no-repeat bg-[100%_auto] z-[1] indent-[-999em] text-transparent"></button>
                    </div>
                    <div className="btn_box flex mt-[8px]">
                        <RoundedButton className="w-full">다음에 하기</RoundedButton>
                        <RoundedButton className="w-full" backgroundColor="primary">등록하기</RoundedButton>
                    </div>
                </div>
            </div>
            </div>
            <div className="coupon_lists_wrap px-5 pt-2.5 pb-15 relative">
                <h3 className="inline-block hidden absolute z-[-1] w-[1px] h-[1px] text-0">사용가능 쿠폰</h3>
                <div className="coupon_serch h-[46px] flex items-center justify-between border-b-[1px] border-solid border-black">
                    <div className="select_box w-[95px] h-[38px] relative inline-block align-top text-[0] bg-white
                        after:w-3 after:h-2 after:top-5.5  after:bg-[url('/images/arrow_down.png') after:bg-no-repeat after:bg-[100%_auto]">
                        <select className="h-[38px] pr-[30px] pl-[10px] block w-full box-border text-[14px] relative z-[1] text-black" title="정렬순서">
                            <option
                                className="font-normal block whitespace-nowrap min-h-[1.2em]"
                                value="deadline">마감임박</option>
                            <option
                                className="font-normal block whitespace-nowrap min-h-[1.2em]"
                                value="latest">최신순</option>
                        </select>
                    </div>
                    <div className="all_btn_wrap pr-[5px] ">
                        {/**bottom이 안 들어감**/}
                        <button className="coupon_all_btn text-[14px] relative pr-[26px] border-none bg-none bg-transparent cursor-pointer align-middle
                        before:bg-[url('/images/coupon_all_btn.png')] before:bg-[position:left_0px] before:bg-no-repeat before:bg-[length:19px_19px] before:content-[''] before:inline-block before:w-[19px] before:h-[19px] before:absolute before:right-0 before:bottom-[-2px]"
                        >
                            전체다운
                        </button>
                    </div>
                </div>
                <ul className="list-none">
                    <li className="border-b-[1px] border-solid border-[#e8e8e8] pt-4 box-border">
                        <div className="coupon_headline inline-block align-top">
                            <div className="coupon_point_box relative">
                                <span className="deadline hidden bg-[#ea035c] absolute text-[9px] text-white text-center px-1 py-0.5 h-[13px] rounded-br-[4px]">마감임박</span>
                                <Image
                                    className="w-[80px] h-[80px] block rounded-[8px]"
                                    src={'/images/megabox_coupon.png'}
                                    alt={'[메가박스] 영화 1만원 관람 쿠폰'}
                                    width={890}
                                    height={569}/>
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
                            <p className="cnt_desc text-[11px] text-[#767676] leading-[19px] break-keep whitespace-nowrap text-ellipsis">메가박스 영화 1만원 관람 쿠폰</p>
                            <p className="cnt_tit text-[16px] text-black font-[500] pt-0.5 pb-3 leading-[26px]">[메가박스] 영화 1만원 관람 쿠폰</p>
                            <p className="cnt_term font-serif text-[#767676] text-[11px] leading-[19px] font-[500]">
                                2023-08-01~2023-08-31
                                <span className="cnt_remaining text-[#c85208] pl-[7px] break-keep
                            before:content-[''] before:clear-both before:inline-block before:w-0.25 before:h-2.5 before:bg-[#cbcbcb] before:mr-2 before:align-middle befoe:mb-0.25">
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
                                    <button className="coupon_use_btn indent-0 bg-[url('/images/barcode.png')] bg-[position:100%_0px] bg-no-repeat w-[85px] h-[15px] text-[11px] text-[#222222] bg-[length:39px_15PX] basis-[85px] pr-[45px] leading-[11px] border-none cursor-pointer align-middle">
                                        사용하기</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="no_result_box bd_type5 hidden pt-10 border-t-[1px] border-solid border-[#222222]"></div>
            </div>
        </div>
  </>
  );
}
