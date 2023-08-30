"use client";
import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import RightArrowButton from "@/components/atoms/Button/RightArrowButton";
import ContentHeader from "@/components/atoms/ContentHeader";
import ButtonListSpan from "@/components/atoms/ButtonListSpan";
import {useState} from "react";
import SpointButton from "@/components/atoms/Button/SpointButton";
import Tab from "@/components/atoms/Tab";
import {RadioProvider} from "@/components/hooks/RadioProvider";
import TabContent from "@/components/atoms/TabContent";
import LinkImageWithFallback from "@/components/ui/LinkImageWithFallback";
import DefListSimple from "@/components/atoms/DefListSimple";
import PointServiceTable from "@/components/atoms/PointServiceTable";
import ColValue from "@/components/atoms/ColValue";
import TrValue from "@/components/TrValue";
import Image from "next/image";

export default function PointService() {
    const [isClicked, setIsClicked] = useState<number>(1);
    const emarttable = [
        {id: "emart", content: "현금, 상품권, 일반 신용카드", point: 1, colSpan: 2, rowSpan: 10},
        {id: "emart", content: "[이마트] 삼성카드/e카드/SC카드/KB국민카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "[신세계/트레이더스] 삼성카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "[SSG.COM] SSG.COM카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "[SSGPAY] SSG카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "일반 직불카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "현금 IC카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "우리제휴직불카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "신한제휴직불카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart", content: "[이마트] 우리체크카드", point: 6, colSpan: 2, rowSpan: 1},
        {id: "emart", content: "[이마트] 신한카드", point: 7, colSpan: 2, rowSpan: 1}
    ];
    const shinsegaetable = [
        {id: "shinsegae", content: "현금, 상품권, 일반 신용카드, 현금 IC카드", point: 1, colSpan: 2, rowSpan: 4},
        {id: "shinsegae", content: "[이마트] 삼성카드/e카드/SC카드/신한카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "shinsegae", content: "[SSG.COM] SSG.COM카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "shinsegae", content: "[SSGPAY] SSG카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "shinsegae", content: "[신세계/트레이더스] 삼성카드", point: 2, colSpan: 2, rowSpan: 2},
        {id: "shinsegae", content: "[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드", point: 2, colSpan: 2, rowSpan: 0},
        {id: "shinsegae", content: "[이마트] 우리체크카드", point: 6, colSpan: 2, rowSpan: 1},
        {id: "shinsegae", content: "직불카드 (일반/우리제휴카드)", point: 10, colSpan: 2, rowSpan: 1},
        {id: "shinsegae", content: "직불카드 (신한제휴카드)", point: 15, colSpan: 2, rowSpan: 1}
    ];
    const SSGtable = [
        {id: "SSG", content: "현금, 상품권, 일반 신용카드", point: 1, colSpan: 2, rowSpan: 5},
        {id: "SSG", content: "[이마트] SC카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "SSG", content: "[신세계] SC체크카드/하나카드/신한카드/BC바로카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "SSG", content: "[SSG.COM] SSG.COM카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "SSG", content: "[SSGPAY] SSG카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "SSG", content: "[신세계] 씨티(체크,신용)카드", point: 2, colSpan: 2, rowSpan: 1},
        {id: "SSG", content: "[이마트] 우리체크카드", point: 6, colSpan: 2, rowSpan: 1},
        {id: "SSG", content: "[신세계/트레이더스] 삼성카드", point: 7, colSpan: 2, rowSpan: 2},
        {id: "SSG", content: "[이마트] 신한카드/삼성카드/e카드", point: 7, colSpan: 2, rowSpan: 0},
    ];
    const emart_everydaytable = [
        {id: "emart_everyday", content: "현금, 상품권, 일반 신용카드", point: 1, colSpan: 2, rowSpan: 7},
        {id: "emart_everyday", content: "[이마트] 삼성카드/e카드/SC카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart_everyday", content: "[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart_everyday", content: "[신세계/트레이더스] 삼성카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart_everyday", content: "[SSG.COM] SSG.COM카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart_everyday", content: "[SSGPAY] SSG카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart_everyday", content: "현금 IC카드", point: 1, colSpan: 2, rowSpan: 0},
        {id: "emart_everyday", content: "직불카드 (일반/우리제휴카드)", point: 5, colSpan: 2, rowSpan: 1},
        {id: "emart_everyday", content: "[이마트] 우리체크카드", point: 6, colSpan: 2, rowSpan: 1},
        {id: "emart_everyday", content: "[이마트] 신한카드", point: 7, colSpan: 2, rowSpan: 1},
        {id: "emart_everyday", content: "직불카드 (신한제휴카드)", point: 10, colSpan: 2, rowSpan: 1},
    ];
    const etctable = [
        {id: "etc", content: ["스타벅스", "프리미엄 아울렛"], url:["/images/logo_starbucks.png", "/images/logo_premiumoutlets.png"], point: 1, colSpan: 1, rowSpan: 7},
        {id: "etc", content: ["신세계면세점<br/>(신세계온라인면세점)", "신세계팩토리스토어"], url:["/images/logo_ssgdfs.png", "/images/logo_factorystore.png"], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["스타필드", "신세계TV쇼핑"], url:["/images/logo_starfield.png", "/images/logo_tvshopping.png"], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["조선호텔", "신세계 영랑호리조트"], url:["/images/logo_josunhotel.png", "/images/logo_ssgresort.png"], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["신세계푸드", "CASAMIA"], url:["/images/logo_ssgfood.png", "/images/logo_casamia.png"], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["스무디킹", "시코르"], url:["/images/logo_smoothieking.png", "/images/logo_chicor.png"], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["G마켓", "옥션"], url:["/images/logo_gmarket.png", "/images/logo_auction.png"], point: 1, colSpan: 1, rowSpan: 0},
    ]

    return (
        <>
            <div className="px-5 pb-4 flex justify-between">
                <strong className="font-normal not-italic">포인트 적립/사용/소멸</strong>
                <button className="relative pr-2.5 text-xs text-[#767676] leading-[18px] font-medium
            after:content-[''] after:absolute after:right-0 after:top-1/2 after:-mt-[4.5px] after:w-1.5 after:h-2.5 after:bg-[url('/images/arrow_right_re.png')] after:bg-no-repeat after:bg-[100%_auto]">
                    유의사항 보기
                </button>
            </div>
            <div className="bg-[#fbfbfb] px-5 pt-6 pb-10 relative">
                <strong className="font-medium mb-1 -ml-2.5 text-base leading-[26px]">적립 안내</strong>
                <p className="-tracking-[.4px] text-[13px] leadint-[21px] text-[#767676] -mx-2.5 mb-4">결제수단별 결제금액에 따라
                    1천원당 기본 포인트가 적립되며, 결제 제휴 브랜드 또는 결제수단에 따라 적립 포인트가 달라 집니다.</p>
            </div>
                <RadioProvider defaultValue={'emart'}>
                    <div className="flex">
                        <Tab
                            className="h-[60px]"
                            type="context"
                            id="emart"
                            color="brown"
                        >
                            <span
                                className="bg-[url('/images/logo_emart.png')] bg-center block w-full h-full bg-[length:62px_58px] bg-no-repeat text-0">
                            </span>
                        </Tab>
                        <Tab
                            className="h-[60px]"
                            type="context"
                            id="shinsegae"
                            color="brown"
                        >
                            <span
                                className="bg-[url('/images/logo_shinsegae.png')] bg-center block w-full h-full bg-[length:62px_58px] bg-no-repeat text-0">
                            </span>
                        </Tab>
                        <Tab
                            className="h-[60px]"
                            type="context"
                            id="SSG"
                            color="brown"
                        >
                            <span
                                className="bg-[url('/images/logo_ssg.png')] bg-center block w-full h-full bg-[length:62px_58px] bg-no-repeat text-0">
                            </span>
                        </Tab>
                        <Tab
                            className="h-[60px]"
                            type="context"
                            id="emart_everyday"
                            color="brown"
                        >
                            <span
                                className="bg-[url('/images/logo_emart_everyday.png')] bg-center block w-full h-full bg-[length:62px_58px] bg-no-repeat text-0">
                            </span>
                        </Tab>
                        <Tab
                            className="h-[60px]"
                            type="context"
                            id="emart24"
                            color="brown"
                        >
                            <span
                                className="bg-[url('/images/logo_emart24.png')] bg-center block w-full h-full bg-[length:62px_58px] bg-no-repeat text-0">
                            </span>
                        </Tab>
                        <Tab
                            className="h-[60px]"
                            type="context"
                            id="etc"
                            color="brown"
                        >
                            <span className="text-[10px]">
                            기타 제휴사
                            </span>
                        </Tab>
                    </div>

                    <TabContent className="pt-8 font-medium" id="emart" name="이마트/이마트 트레이더스">
                        <PointServiceTable>
                            <colgroup>
                                <ColValue width={"auto"}/>
                                <ColValue width={"auto"}/>
                                <ColValue width={"25%"}  classname="min-w-[70px]"/>
                            </colgroup>
                            {emarttable.map((item)=>
                            <TrValue rowSpan={item.rowSpan} colSpan={item.colSpan} point={item.point}>{item.content}</TrValue>
                            )}
                        </PointServiceTable>
                    </TabContent>
                    <TabContent id="shinsegae" name="신세계백화점">
                        <PointServiceTable>
                            <colgroup>
                                <ColValue width={"auto"}/>
                                <ColValue width={"auto"}/>
                                <ColValue width={"25%"}  classname="min-w-[70px]"/>
                            </colgroup>
                            {shinsegaetable.map((item)=>
                                <TrValue rowSpan={item.rowSpan} colSpan={item.colSpan} point={item.point}>{item.content}</TrValue>
                            )}
                        </PointServiceTable>
                    </TabContent>
                    <TabContent id="SSG" name="SSG.COM">
                        <PointServiceTable>
                            <colgroup>
                                <ColValue width={"auto"}/>
                                <ColValue width={"auto"}/>
                                <ColValue width={"25%"}  classname="min-w-[70px]"/>
                            </colgroup>
                            {SSGtable.map((item)=>
                                <TrValue rowSpan={item.rowSpan} colSpan={item.colSpan} point={item.point}>{item.content}</TrValue>
                            )}
                        </PointServiceTable>
                    </TabContent>
                    <TabContent id="emart_everyday" name="이마트 에브리데이">
                        <PointServiceTable>
                            <colgroup>
                                <ColValue width={"auto"}/>
                                <ColValue width={"auto"}/>
                                <ColValue width={"25%"}  classname="min-w-[70px]"/>
                            </colgroup>
                            {SSGtable.map((item)=>
                                <TrValue rowSpan={item.rowSpan} colSpan={item.colSpan} point={item.point}>{item.content}</TrValue>
                            )}
                        </PointServiceTable>
                    </TabContent>
                    <TabContent id="emart24" name="이마트24">
                        <PointServiceTable>
                            <colgroup>
                                <ColValue width={"auto"}/>
                                <ColValue width={"auto"}/>
                                <ColValue width={"25%"}  classname="min-w-[70px]"/>
                            </colgroup>
                                <TrValue rowSpan={1} colSpan={2} point={5}>
                                    <Image
                                        className=" w-[60px] h-auto block mx-auto my-0"
                                        src={"/images/logo_emart24_2.png"}
                                        width={130}
                                        height={90}
                                        alt="이마트24"/>
                                    <span className="font-normal block text-[11px] leading-[14px] pt-2 text-center">이마트24</span>
                                </TrValue>

                        </PointServiceTable>
                    </TabContent>

                    </RadioProvider>



        </>
    );
};
