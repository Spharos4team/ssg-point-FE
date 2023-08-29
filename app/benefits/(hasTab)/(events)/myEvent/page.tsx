import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <div className="event_list_box02 finish pt-4 pb-15">
            <h3 className="hidden inline-block absolute z-[-1] w-[1px] h-[1px]">참여한 이벤트</h3>
            <ul className="list-none">
                <li className="text-center box-border relative text-0">
                    <Link href={''} title={'상세페이지로 이동'}>
                        <Image
                            className="w-full"
                            src={'/images/megabox_event.jpg'}
                            alt={'신세계포인트 X 메가박스 더블 쿠폰 이벤트'}
                            width={750}
                            height={450}
                        />
                        <div className="end_date w-[82px] h-[56px] flex justify-center absolute top-2.5 right-[5px] bg-[url('/images/event_end_date.png')] bg-no-repeat bg-[100%_auto]">
                            <p className="text-[14px] font-bold pt-[17px] bg-gradient-primary-line2 bg-clip-text text-transparent">
                                <span className="ff_lato font-serif">8</span>
                                일 남음
                            </p>
                        </div>
                    </Link>
                    <div className="event_desc pt-5 pb-[35px] px-5">
                        <p className="event_tit text-[16px] font-medium leading-[26px] text-left whitespace-nowrap overflow-hidden text-ellipsis">신세계포인트 X 메가박스 더블 쿠폰 이벤트</p>
                        <p className="event_term text-[13px] font-normal leading-[21px] text-left pt-1">
                            <span className="ff_lato font-serif">2023-08-01 ~ 08-31</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
