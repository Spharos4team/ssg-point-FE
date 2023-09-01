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
import TrValue from "@/components/atoms/TrValue";
import Image from "next/image";
import TrImages from "@/components/atoms/TrImages";
import {it} from "node:test";
import StrongUnderline from "@/components/atoms/StrongUnderline";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import Button from "@/components/atoms/Button/Button";

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
        {id: "etc", content: ["스타벅스", "프리미엄 아울렛"], url:["/images/logo_starbucks.png", "/images/logo_premiumoutlets.png"], width: [130, 131], height: [91, 90], point: 1, colSpan: 1, rowSpan: 7},
        {id: "etc", content: ["신세계면세점<br/> (신세계온라인면세점)", "신세계팩토리스토어"], url:["/images/logo_ssgdfs.png", "/images/logo_factorystore.png"], width: [130, 130], height: [90, 90], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["스타필드", "신세계TV쇼핑"], url:["/images/logo_starfield.png", "/images/logo_tvshopping.png"], width: [132, 130], height: [90, 90], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["조선호텔", "신세계 영랑호리조트"], url:["/images/logo_josunhotel.png", "/images/logo_ssgresort.png"], width: [130, 131], height: [90, 90], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["신세계푸드", "CASAMIA"], url:["/images/logo_ssgfood.png", "/images/logo_casamia.png"], width: [130, 130], height: [90, 90], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["스무디킹", "시코르"], url:["/images/logo_smoothieking.png", "/images/logo_chicor.png"], width: [130, 130], height: [90, 90], point: 1, colSpan: 1, rowSpan: 0},
        {id: "etc", content: ["G마켓", "옥션"], url:["/images/logo_gmarket.png", "/images/logo_auction.png"], width: [130, 130], height: [82, 82], point: 1, colSpan: 1, rowSpan: 0},
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

                    <TabContent className="pt-8 font-medium" id="emart" name="이마트/이마트 트레이더스" h4={true}>
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
                    <TabContent className="pt-8 font-medium" id="shinsegae" name="신세계백화점" h4={true}>
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
                    <TabContent className="pt-8 font-medium" id="SSG" name="SSG.COM" h4={true}>
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
                    <TabContent className="pt-8 font-medium" id="emart_everyday" name="이마트 에브리데이" h4={true}>
                        <PointServiceTable>
                            <colgroup>
                                <ColValue width={"auto"}/>
                                <ColValue width={"auto"}/>
                                <ColValue width={"25%"}  classname="min-w-[70px]"/>
                            </colgroup>
                            {emart_everydaytable.map((item)=>
                                <TrValue rowSpan={item.rowSpan} colSpan={item.colSpan} point={item.point}>{item.content}</TrValue>
                            )}
                        </PointServiceTable>
                    </TabContent>
                    <TabContent className="pt-8 font-medium" id="emart24" name="이마트24" h4={true}>
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
                    <TabContent className="pt-8 font-medium" id="etc" name="기타 제휴사" h4={true}>
                        <PointServiceTable>
                            <colgroup>
                                <ColValue width={"auto"}/>
                                <ColValue width={"auto"}/>
                                <ColValue width={"25%"}  classname="min-w-[70px]"/>
                            </colgroup>
                            {etctable.map((item)=>
                                <TrImages src1={item.url[0]} width1={item.width[0]} height1={item.height[0]} content1={item.content[0]} src2={item.url[1]} width2={item.width[1]} height2={item.height[1]} content2={item.content[1]} point={item.point} colSpan={item.colSpan} rowSpan={item.rowSpan}/>
                            )}
                        </PointServiceTable>
                    </TabContent>
                    </RadioProvider>
            <div className="bg-[#fbfbfb] px-[30px] pb-10 relative pt-5">
                <h4 className="font-medium mb-1 -ml-2.5 text-base leading-[26px]">사용 안내</h4>
                <p className="-tracking-[.4px] text-[13px] leadint-[21px] text-[#767676] -mx-2.5 mb-4">포인트 결제에서 신세계상품권까지, 편리하게 사용하실 수 있습니다.</p>
                <ul className="-mx-2.5">
                    <li>
                        <StrongUnderline>
                            구매 시 포인트로 결제
                        </StrongUnderline>
                        <ul className="list-none">
                            <ListForNoticeBox level={6} isBullet>결제 시 보유하신 사용가능 포인트를 사용하실 수 있습니다.</ListForNoticeBox>
                            <ListForNoticeBox className="pl-[14px] before:pl-[7px]" level={2} isHyphen>오프라인 가맹점 : 10포인트 이상 보유 시 10포인트 단위</ListForNoticeBox>
                            <ListForNoticeBox className="pl-[14px] before:pl-[7px]" level={2} isHyphen>온라인 가맹점 : 1포인트 이상 보유 시 1포인트 단위(※ G마켓/옥션 제외)</ListForNoticeBox>
                        </ul>
                        <ListForNoticeBox level={6} isBullet>포인트 사용 시에는 포인트 비밀번호를 확인하니 미리 등록해 주세요.</ListForNoticeBox>
                    </li>
                    <Button
                        className="h-10 text-xs leading-5 font-medium mt-2"
                        backgroundColor={'yellow'}
                        onClick={''}
                    >
                        포인트 사용 비밀번호 등록/수정하기
                    </Button>
                    <ul className="list-none mt-[15px]">
                        <ListForNoticeBox className="text-[13px]" level={6} isBullet>
                            각 가맹점별로 포인트 사용 제한 품목이 있을 수 있으니 결제 전 계산대에 문의 하시기 바랍니다.
                        </ListForNoticeBox>
                        <ListForNoticeBox className="text-[13px] pl-[7px]" level={6}>
                            Ex. 주류, 담배, 종량제봉투, 대여용 장바구니, 리유저블 컵, 의약외품 등
                        </ListForNoticeBox>
                    </ul>
                    <li className='mt-6'>
                        <StrongUnderline>
                            신세계상품권으로 교환
                        </StrongUnderline>
                        <ListForNoticeBox className="text-[13px]" level={6} isBullet>
                            가까운 이마트/트레이더스/신세계백화점 상품권샵 또는 키오스크에서 5,000포인트 단위로 교환 가능 합니다.
                        </ListForNoticeBox>
                    </li>
                    <li className='mt-6'>
                        <StrongUnderline>
                            소중한 사람에게 포인트 선물
                        </StrongUnderline>
                        <ListForNoticeBox className="text-[13px]" level={6} isBullet>
                            신세계포인트 회원끼리 선물이 가능합니다.
                        </ListForNoticeBox>
                        <Button
                            className="h-10 text-xs leading-5 font-medium mt-2"
                            backgroundColor={'yellow'}
                            onClick={''}
                        >
                            포인트 선물하기
                        </Button>
                    </li>
                    <li className='mt-6'>
                        <StrongUnderline>
                            다양한 포인트/마일리지 전환
                        </StrongUnderline>
                        <ListForNoticeBox className="text-[13px]" level={6} isBullet>
                            제휴되어 있는 다른 포인트/마일리지로 전환하거나 신세계포인트로 전환하실 수 있습니다.
                        </ListForNoticeBox>
                        <Button
                            className="h-10 text-xs leading-5 font-medium mt-2"
                            backgroundColor={'yellow'}
                            onClick={''}
                        >
                            포인트 전환하기
                        </Button>
                    </li>
                </ul>

            </div>
            <div className="bg-[#fbfbfb] px-[30px] pb-10 relative">
                <h4 className="font-medium mb-1 -ml-2.5 text-base leading-[26px]">소멸 안내</h4>
                <p className="-tracking-[.4px] text-[13px] leadint-[21px] text-[#767676] -mx-2.5 mb-4">신세계포인트의 유효기간은, 적립일로부터 2년(24개월)이며, 유효기간이 경과된 신세계포인트는 월 단위 선입선출방식에 의하여 자동 소멸됩니다.</p>
                <ul className="-mx-2.5">
                    <li>
                        <StrongUnderline>
                            소멸포인트 확인
                        </StrongUnderline>
                        <ul className="list-none">
                            <ListForNoticeBox level={6} isBullet>소멸포인트는 신세계포인트APP에서 조회 가능합니다.</ListForNoticeBox>
                        </ul>
                    </li>
                    <li className='mt-6'>
                        <StrongUnderline>
                            소멸포인트 안내
                        </StrongUnderline>
                        <ListForNoticeBox className="text-[13px]" level={6} isBullet>
                            익월 소멸예정포인트가 있을 경우, 이메일로 사전 안내 드리고 있습니다.
                        </ListForNoticeBox>
                        <ListForNoticeBox className="text-[13px]" level={6} isBullet>
                            익월 소멸예정포인트가 5,000점 이상인 경우, 문자(LMS)로 추가 안내 드립니다.
                        </ListForNoticeBox>
                    </li>

                </ul>
            </div>
        </>
    );
};
