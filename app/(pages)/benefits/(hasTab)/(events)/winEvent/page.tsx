import Image from 'next/image'

export default function Home() {
    return (
        <div className="event_list_box02 finish pt-[16px] mb-[60px] mx-5">
            <h3 className="hidden inline-block z-[-1] w-[1px] h-[1px] ">당첨 이벤트</h3>
            <div className="no_result_box bd_type4 mt-15 py-10 border-[1px] border-dashed border-[#bababa]">
                <p className="relative pt-16 text-[13px] text-center text-[#767676] after:content-[''] after:absolute after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[100%_auto] after:translate-x-[-50%]">
                    당첨 이벤트가 없습니다.
                </p>
            </div>
        </div>
    )
}
