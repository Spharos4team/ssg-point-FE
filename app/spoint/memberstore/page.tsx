import NavBoxForMainBody from '@/components/templates/NavBoxForMainBody';
import BodyNavTop from '@/components/BodyNavTop';
import MainBanner from '@/components/templates/MainBanner';
import BannerListForMain from '@/components/templates/BannerListForMain';
import SpecialTitle from '@/components/atoms/SpecialTitle';
import ContentStrong from '@/components/atoms/ContentStrong';
import Image from 'next/image';
import PointInfoList from '@/components/atoms/PointInfoList';

export default function MemberStore() {
  return (
    <>
      <div></div> {/*notice_top_banner sub_banner yl 하나 더 있음*/}
      <div className="notice_top_banner sub_banner yl mt-4 mx-5">
        <div
          className="txt_box push bg-[#f8b404] rounded-lg py-3 pl-[52px] w-full h-[88px] box-border relative
          before:bg-[url('/images/icon_ring.png')] before:bg-no-repeat before:bg-[100%_auto] before:left-4 before:content-[''] before:block before:w-8 before:h-8 before:absolute top-3"
        >
          <strong className="text-[14px] leading-[24px] font-normal not-italic">
            앗! 알림 설정 잊지마세요!
          </strong>
          <p className="-tracking-[.7px] pt-0 text-[12px] leading-[20px] break-keep font-normal">
            PUSH 알림 설정하시고
            <br />
            나의 포인트 소식과 혜택을 놓치지 마세요
          </p>
          <button className="right-[7px] bg-[url('/imgaes/ctn_like.png')] bg-[position:0px_0px] bg-no-repeat bg-[100%_auto] absolute top-1/2 z-[1] w-[75px] h-[48px] -translate-y-1/2 text-[0] leading-0 cursor-pointer border-none align-middle p-0 m-0 outline-0">
            좋아요
          </button>
        </div>
      </div>
      {/*<div className="top_cnt0 mx-5 my-10">*/}
      {/*</div>*/}
      <div className="point_info_box relative first:p-0">
        <h3 className="text-[18px] leading-[28px] font-normal px-5 pb-4">
          신세계포인트 가맹점 안내
        </h3>
        <div className="point_info_list bg-[#fbfbfb] px-[30px] pt-6 relative pb-[60px!important] m-0">
          <ul className="text-[0] -mb-[30px] list-none block">
            <PointInfoList
              li_mr={'50%-120px'}
              src={'/images/logo_emart.png'}
              name={'이마트'}
            ></PointInfoList>
            <PointInfoList
              li_mr={'50%-120px'}
              src={'/images/logo_emart.png'}
              name={'신세계백화점'}
            ></PointInfoList>
          </ul>
          <p className="text-[12px] leading-[20px] text-[#767676] pt-10 -mx-2.5">
            · 가맹점 로고 클릭 시 해당 가맹점 홈페이지로 연결됩니다.
          </p>
        </div>
      </div>
    </>
  );
}
