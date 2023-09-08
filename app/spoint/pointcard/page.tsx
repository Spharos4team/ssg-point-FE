import NavBoxForMainBody from '@/components/templates/NavBoxForMainBody';
import BodyNavTop from '@/components/BodyNavTop';
import MainBanner from '@/components/templates/MainBanner';
import BannerListForMain from '@/components/templates/BannerListForMain';
import PointInfoList from '@/components/atoms/PointInfoList';
import Image from 'next/image';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import NoticeBox from '@/components/modules/NoticeBox';

export default function PointCard() {
  return (
    <div className="point_info_box">
      <div className="point_info_cnt relative">
        <h3 className="text-[18px] leading-[28px] font-normal px-5 pb-4">온라인 카드</h3>
        <div className="bg-[#fbfbfb] px-[30px] pt-6 pb-10 relative">
          <p className="sub_txt -tracking-[.4px] text-[13px] leading-[21px] text-[#767676] -mx-2.5 pb-4">
            통합ID로 로그인하는 모바일 앱과 홈페이지에서 신세계포인트
            <br />
            회원가입이 가능하며, 신세계포인트 카드와 다양한 혜택을 만날 수 있어요.
          </p>
          <ul className="text-0 -mb-[30px] list-none">
            <PointInfoList
              li_mr={'50%-120px'}
              src={'/images/logo_ssgpoint.png'}
              name={'신세계포인트'}
            ></PointInfoList>
            <PointInfoList
              li_mr={'50%-120px'}
              src={'/images/logo_ssgpoint.png'}
              name={'신세계포인트'}
            ></PointInfoList>
            <PointInfoList
              li_mr={'50%-120px'}
              src={'/images/logo_ssgpoint.png'}
              name={'신세계포인트'}
            ></PointInfoList>
          </ul>
        </div>
        <div className="bg-[#fbfbfb] px-[30px] pt-6 pb-10 relative">
          <p className="sub_txt -tracking-[.4px] text-[13px] leading-[21px] text-[#767676] -mx-2.5 pb-4">
            신세계 유니버스 클럽에 가입하시면 신세계포인트 모바일 카드가 발급됩니다.
          </p>
          <ul className="text-0 -mb-[30px] list-none">
            <PointInfoList
              li_mr={'50%-120px'}
              src={'/images/logo_ssgpoint.png'}
              name={'신세계포인트'}
            ></PointInfoList>
          </ul>
        </div>
        <div className="bg-[#fbfbfb] px-[30px] pt-6 pb-10 relative">
          <p className="sub_txt -tracking-[.4px] text-[13px] leading-[21px] text-[#767676] -mx-2.5 pb-4">
            신세계 유니버스 클럽에 가입하시면 신세계포인트 모바일 카드가 발급됩니다.
          </p>
          <ul className="text-0 -mb-[30px] list-none">
            <PointInfoList
              li_mr={'50%-120px'}
              src={'/images/logo_ssgpoint.png'}
              name={'신세계포인트'}
            ></PointInfoList>
          </ul>
          <p className="text-[12px] leading-[20px] text-[#767676] -mx-2.5 pt-10">
            · 앱 이미지 클릭 시 해당 앱 다운로드 페이지로 연결됩니다.
          </p>
        </div>
      </div>
      <div className="point_info_box relative first:p-0">
        <h3 className="text-[18px] leading-[28px] font-normal px-5 pb-4">제휴 신용카드</h3>
        <div className="point_info_list bg-[#fbfbfb] px-[30px] pt-6 relative pb-[60px!important] m-0">
          <p className="sub_txt -tracking-[.4px] text-[13px] leading-[21px] text-[#767676] -mx-2.5 pb-4">
            다양한 신세계포인트 제휴 신용카드를 확인하시고,&nbsp;
            <span className="inline-block"> 고객님의 라이프스타일에 따라</span> 풍성한 혜택을
            누리세요.
          </p>
          <ul className="text-[0] -mb-[30px] list-none block">
            <li className="odd:mr-[15px] text-center inline-block align-bottom w-[calc(50%-7.5px)] mb-[27px]">
              <a className="block relative no-underline">
                <span className="px-[33px] block ">
                  <Image
                    className="block w-full border-0 my-0 mx-auto"
                    src="/imges/card_emart.png"
                    alt="이마트 e카드 image"
                    width={150}
                    height={237}
                  ></Image>
                </span>
                <span className="block text-center text-[14px] leading-[24px] break-keep pt-2 my-[0px] font-medium">
                  이마트 e카드
                </span>
                <span
                  className="block text-center text-[12px] leading-[20px] text-[#505050]
                    after:content-[''] after:inline-block after:w-1 after:h-[9px] after:bg-[url('/images/arrow_right_re.png')] after:bg-no-repeat after:bg-[position:0px_0px] after:bg-[100%_auto] after:align-top after:relative after:top-[5px] after:ml-[7px]"
                >
                  바로가기
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white px-5 pt-8 pb-10">
        <NoticeBox type="info" className="text-sm pb-2 leading-6 font-medium" title="유의사항">
          <ListForNoticeBox isBullet={true} level={2}>
            온라인 카드는 가상카드로서 실물(플라스틱) 카드가 제공되지 않습니다.
          </ListForNoticeBox>
          <ListForNoticeBox isBullet={true} level={2}>
            신세계포인트 통합ID 서비스를 통해 발급된 온라인 카드는 해당 사이트를 탈퇴하실 경우
            소멸됩니다.
          </ListForNoticeBox>
          <ListForNoticeBox isBullet={true} level={2}>
            제휴 신용카드 발급 및 이용 등 자세한 사항은 해당 카드사에 문의해 주세요.
          </ListForNoticeBox>
        </NoticeBox>
      </div>
    </div>
  );
}
