import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="coupon_lists_wrap benefits px-5 pt-2.5 pb-[60px] relative">
      <h3 className="inline-block hidden absolute z-[-1] w-[1px] h-[1px] text-0">
        사용완료/기간만료 쿠폰
      </h3>
      <div className="coupon_serch h-[46px] flex items-center justify-between border-b-[1px] border-solid border-black">
        <div
          className="select_box relative inline-block align-top text-[0] bg-white
                after:w-3 after:h-2 top-5.5  after:bg-[url('/images/arrow_down.png') after:bg-no-repeat bg-[100%_auto]"
        >
          <select
            className="h-[38px] pr-[30px] pl-[10] block w-full box-border text-[14px] relative z-[1] text-black"
            title="쿠폰타입 선택"
          >
            <option
              className="font-normal block whitespace-nowrap min-h-[1.2em]"
              value="NOT_AVAILABLE"
            >
              {' '}
              전체{' '}
            </option>
            <option className="font-normal block whitespace-nowrap min-h-[1.2em]" value="USED">
              {' '}
              사용완료{' '}
            </option>
            <option className="font-normal block whitespace-nowrap min-h-[1.2em]" value="EXPIRED">
              {' '}
              기간만료{' '}
            </option>
          </select>
        </div>
        <div className="all_btn_wrap pr-[5px]">
          <Link
            className="text-[12px] text-[#767676] pr-2.5 block relative no-underline
                        before:bg-[url('/images/arrow_right_pink.png')] before:bg-no-repeat before:w-1.5 before:h-2.5 before:right-0 before:left-[unset] before:bottom-[1px] before:opacity-70 before:content-'' before:inline-block"
            href={''}
          >
            더 많은 쿠폰 보기
          </Link>
        </div>
      </div>
      <ul className="hidden"></ul>
      <div className="pt-10 ">
        <p className="relative pt-16 text-[13px] text-center text-[#767676] after:content-[''] after:absolute after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[100%_auto] after:translate-x-[-50%]">
          사용 완료/만료된 쿠폰이 없습니다.
        </p>
      </div>
    </div>
  );
}
