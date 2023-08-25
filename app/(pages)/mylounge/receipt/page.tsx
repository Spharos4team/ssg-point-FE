import ContentStrong from "@/components/atoms/ContentStrong";
import ContentHeader from "@/components/atoms/ContentHeader";
import {Checkbox} from "@/components/atoms/Checkbox";
import RoundedButton from "@/components/atoms/Button/RoundedButton";
import ListForNoticeBox from "@/components/atoms/ListForNoticeBox";
import NoticeBox from "@/components/modules/NoticeBox";
import HistoryList from "@/components/modules/HistoryList";
import ListForHistory, {PointListType} from "@/components/atoms/ListForHistory";

const receipt = () => {
    const dropdownForHistory = {
        dropdownTitle: "pntHistory",
        dropdownOptions: ["1주일", "1개월", "3개월", "6개월", "직접입력"],
        dropdownInitial: 2,
    };
    const pointExample: PointListType[] = [
        {
            historyTag: "결제적립",
            pntValue: 1,
            pntInfo: {
                title: "이마트24",
            },
            pntDate: "2023-08-02",
        }];

    return (
        <>
        <ContentHeader
            main={
                <>
                    <span className="text-[#ea035c]">가맹점 영수증</span> 모두 모여라!
                </>
            }
            sub="신세계포인트를 적립했다면?
            <br/> 가맹점에서 쇼핑한 영수증을
            <br/> 한 곳에 모아 스마트하게 확인하세요."
        />
        <div className="px-5 pb-10">
            <ul className="mb-[18px] list-none">
                <li className="relative">
                    <Checkbox id={'01'} name={'[선택] 전자영수증 조회를 위한 제 3자 제공동의'}/>
                    <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                        <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                          내용보기
                        </span>
                    </button>
                </li>
            </ul>
            <div className="relative inline-block align-top text-0">
                <Checkbox id={'02'} name={'전체 선택'}>
                    <div>
                        <ul className="text-0 box-border border-t-[1px] border-b-[1px] border-t-solid border-b-solid border-t-[#e8e8e8] border-b-[#e8e8e8] text-left mt-4 mb-10 list-none">
                            <li className="relative inline-block align-top w-[33.3%] h-[50px] box-border border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-solid border-b-[1px] border-b-[#e8e8e8]">
                                <input
                                    id="receipt0"
                                    className="absolute left-0 top-0 w-full h-full z-[2] border-none appearance-none"
                                    type="checkbox"
                                    value="(주)신세계푸드"/>
                                <label
                                    className="bg-white table absolute left-0 top-0 w-full h-full z-[2] align-middle">
                                    <span className="text-[11px] text-[#767676] table-cell align-middle text-center break-keep">
                                        (주)신세계푸드
                                    </span>
                                </label>
                            </li>
                        </ul>
                        <RoundedButton
                            className="w-full h-[48px] mb-10"
                            backgroundColor={'primary'}>저장하기</RoundedButton>
                    </div>
                </Checkbox>
            </div>
        </div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
        <HistoryList dropdown={dropdownForHistory}>
            {pointExample.map((point, index) => (
                <ListForHistory key={index} point={point}/>
            ))}
        </HistoryList>
        <NoticeBox className={'px-5 bg-[#fbfbfb]'} title={'유의사항'} type={"info"}>
            <ListForNoticeBox className={"text-[12px] leading-[20px] -tracking-[.5px]"} level={2} isBullet={true}>신세계포인트 제휴사 중 '전자 영수증 정보 제공 가능 제휴사'에 한해 제공됩니다.</ListForNoticeBox>
            <ListForNoticeBox className={"text-[12px] leading-[20px] -tracking-[.5px]"} level={2} isBullet={true}>서비스 이용 동의 시 선택하신 제휴사에 한해 영수증 조회가 가능하며 서비스 해제 및 제휴사 선택을 변경하실 수 있습니다.</ListForNoticeBox>
            <ListForNoticeBox className={"text-[12px] leading-[20px] -tracking-[.5px]"} level={2} isBullet={true}>스마트 영수증은 신세계포인트 적립 또는 사용한 구매 내역만 조회되며 포인트 선물 및 전환, 상품권 구매 내역은 제공되지 않습니다.</ListForNoticeBox>
        </NoticeBox>
        </>
    );
};

export default receipt;


