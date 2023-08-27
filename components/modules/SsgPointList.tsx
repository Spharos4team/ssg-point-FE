import PointInfoList from "@/components/atoms/PointInfoList";

export default function SsgPointList({
    title,
    subTitle,
    tailtxt
}:{

}){
  return (
      <div className="point_info_cnt relative">
          <h3 className="text-[18px] leading-[28px] font-normal px-5 pb-4">온라인 카드</h3>
          <div className="bg-[#fbfbfb] px-[30px] pt-6 pb-10 relative">
              <p className="sub_txt -tracking-[.4px] text-[13px] leading-[21px] text-[#767676] -mx-2.5 pb-4">
                  통합ID로 로그인하는 모바일 앱과 홈페이지에서 신세계포인트<br/>
                  회원가입이 가능하며, 신세계포인트 카드와 다양한 혜택을 만날 수 있어요.
              </p>
              <ul className="text-0 -mb-[30px] list-none">
                  <PointInfoList src={'/images/logo_ssgpoint.png'} name={'신세계포인트'}></PointInfoList>
                  <PointInfoList src={'/images/logo_ssgpoint.png'} name={'신세계포인트'}></PointInfoList>
                  <PointInfoList src={'/images/logo_ssgpoint.png'} name={'신세계포인트'}></PointInfoList>
              </ul>
          </div>
      </div>
  );
};