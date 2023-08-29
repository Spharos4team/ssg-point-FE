"use client";
import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import RightArrowButton from "@/components/atoms/Button/RightArrowButton";
import ContentHeader from "@/components/atoms/ContentHeader";
import ButtonListSpan from "@/components/atoms/ButtonListSpan";
import {useState} from "react";
import SpointButton from "@/components/atoms/Button/SpointButton";

export default function PointService() {
    const [isClicked, setIsClicked] = useState<number>(1);
    const data1 = {
        columns: [
            { width: 'auto' },
            { width: '25%', className: 'min-w-[70px]' }
        ],
        rows: [
            { th: ['현금, 상품권, 일반 신용카드'], td: '1', rowSpan: 10 },
            { th: ['[이마트] 삼성카드/e카드/SC카드/KB국민카드'] },
            { th: ['[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드'] },
            { th: ['[신세계/트레이더스] 삼성카드'] },
            { th: ['[SSG.COM] SSG.COM카드'] },
            { th: ['[SSGPAY] SSG카드'] },
            { th: ['일반 직불카드'] },
            { th: ['현금 IC카드'] },
            { th: ['우리제휴직불카드'] },
            { th: ['신한제휴직불카드'] },
            { th: ['[이마트] 우리체크카드'], td: '6', rowSpan: 1 },
            { th: ['[이마트] 신한카드'], td: '7', rowSpan: 1 },
        ],
        };

    return (
        <>
            <div className="px-5 pb-4 flex justify-between">
                <strong className="font-normal not-italic">포인트 적립/사용/소멸</strong>
                <button className="relative pr-2.5 text-xs text-[#767676] leading-[18px] font-medium
            after:content-[''] after:absolute after:right-0 after:top-1/2 after:-mt-[4.5px] after:w-1.5 after:h-2.5 after:bg-[url('/images/arrow_right_re.png')] after:bg-no-repeat after:bg-[100%_auto]">
                    유의사항 보기
                </button>
            </div>
            <div className="bg-[#fbfbfb] px-[30px] pt-6 pb-10 relative">
                <strong className="font-medium mb-1 -ml-2.5 text-base leading-[26px]">적립 안내</strong>
                <p className="-tracking-[.4px] text-[13px] leadint-[21px] text-[#767676] -mx-2.5 mb-4">결제수단별 결제금액에 따라
                    1천원당 기본 포인트가 적립되며, 결제 제휴 브랜드 또는 결제수단에 따라 적립 포인트가 달라 집니다.</p>
                <ul className="relative box-border w-[calc(100%+60px)] min-w-[320px] h-[60px] -left-[30px] text-0 border-t-[1px] border-t-solid overflow-hidden text-[0]">
                    <SpointButton
                        isClicked={isClicked}
                        onclick={()=>setIsClicked(1)}
                        logourl="bg-[url('/images/logo_emart.png')]"
                        brandName={'이마트'}
                        value={1}/>
                    <SpointButton
                        isClicked={isClicked}
                        onclick={()=>setIsClicked(2)}
                        logourl="bg-[url('/images/logo_shinsegae.png')]"
                        brandName={'신세계백화점'}
                        value={2}/>
                    <SpointButton
                        isClicked={isClicked}
                        onclick={()=>setIsClicked(3)}
                        logourl="bg-[url('/images/logo_ssg.png')]"
                        brandName={'SSG.COM'}
                        value={3}/>
                    <SpointButton
                        isClicked={isClicked}
                        onclick={()=>setIsClicked(4)}
                        logourl="bg-[url('/images/logo_emart_everyday.png')]"
                        brandName={'이마트 에브리데이'}
                        value={4}/>
                    <SpointButton
                        isClicked={isClicked}
                        onclick={()=>setIsClicked(5)}
                        logourl="bg-[url('/images/logo_emart24.png')]"
                        brandName={'이마트24'}
                        value={5}/>
                    <SpointButton
                        isClicked={isClicked}
                        onclick={()=>setIsClicked(6)}
                        brandName={'기타 제휴사'}
                        value={6}/>
                </ul>
                <div className="">
                    <div className="pt-8 -mx-2.5">
                        <h4 className="text-sm font-medium leading-6 pb-2">이마트/이마트 트레이더스</h4>
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
                    </div>
                </div>
            </div>

        </>
    );
};
