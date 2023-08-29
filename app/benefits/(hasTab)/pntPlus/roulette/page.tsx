import Image from 'next/image'

export default function Home() {
    return (
        <div className="ruckyRoulette relative">
            <h3 className="hidden">럭키룰렛</h3>
            <button
                className="share_btn black absolute right-5 top-[27px] h-[25px] text-[15px] pb-[1px] pl-[24px] box-border z-[1]
      before:content-[''] before:absolute before:left-0 before:top-[3px] before:w-[18px] before:h-[19px] before:bg-[url('/images/icon_share.png')] before:bg-[100%_auto]"
            >
                <span className="hidden">럭키룰렛</span>공유
            </button>
            <div className="roulette_event_box relative">
                <Image
                    className="block w-full"
                    src={"/images/roulette_event_box.jpg"}
                    width={750}
                    height={642}
                    alt="럭키룰렛! 푸시 알림 설정 ON 하시고 행운의 룰렛을 돌리면 최대 1000포인트 획득! 잊지마세요 매일 100% 당첨인 럭키 룰렛~ 기간: 8월 1일 ~ 8월 31일 "
                />
                <div className="roulette_board renewal relative">
                    <Image
                        className="block w-full"
                        src="/images/roulette_board.jpg"
                        alt="img0"
                        width="750"
                        height="650"/>
                    <div className="roulette_img top-[10px] left-[50%] w-[78%] -translate-x-1/2 absolute">
                        <Image
                            className="rotate-0 block w-full"
                            src="/images/roulette_img.png"
                            alt="img1"
                            width="590"
                            height="590"/>
                    </div>
                    <div className="roulette_btn w-1/5 top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-[2] pb-[24.6%]">
                        <button className="btn bg-[url('/images/roulette_btn.png')] bg-[90%_auto] absolute w-full h-full indent-[-999em] cursor-pointer align-middle text-[100%] bg-no-repeat">
                            <span>START</span>
                        </button>
                    </div>
                </div>
            </div>
            <Image className="notice_img block w-full" src="/images/roulette_notice_img.jpg" alt="START 를 눌러 룰렛 돌리기 잠깐! 푸시 알림 동의하는 방법을 안내드립니다. (단 앱에서만 가능합니다.) 하나, 앱 설정에서 버튼을 ON으로! - 상단의 메뉴바 클릭 - 설정 아이콘 클릭 - 푸시 알림 동의 버튼 클릭 둘, 광고정보 수신관리에서 체크! - 하단 메뉴의 마이회원정보 클릭 - 광고정보 수신관리 클릭 - 푸시알림 동의 체크 클릭   유의사항) 앱 푸시 알림 동의 회원에 한해 1일 1회 참여가 가능합니다. 지급된 포인트는 당일 사용이 가능합니다. " width={750} height={2034}/>
        </div>
    )
}
