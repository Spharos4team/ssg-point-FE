import ContentStrong from '@/components/atoms/ContentStrong';
import PointBar from '@/components/atoms/PointBar/PointBar';
import PointIcon from '@/components/atoms/PointIcon';
import PointWrap from '@/components/atoms/PointWrap';
import SpecialTitle from '@/components/atoms/SpecialTitle';
import BrandUseList from '@/components/atoms/BrandUseList';
import RoundedButton from '@/components/atoms/Button/RoundedButton';
import NoticeBox from '@/components/modules/NoticeBox';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';

const history = () => {
  return (
    <>
      <h3 className="hidden">쇼핑 히스토리</h3>
      <div className="shopping_his_wrap01 px-5 py-10">
        <SpecialTitle
          ptag={
            'sp_tit1 mb-2 text-[14px] font-normal leading-[1.71] -tracking-[.25px] text-left text-[#767676]'
          }
          name={'권선'}
          color={'pink'}
        >
          님과 신세계포인트는
          <br /> 올해 이렇게 함께했어요.
        </SpecialTitle>
        <p className="sp_txt8 mb-2 text-[14px] font-normal leading-[1.71] -tracking-[.25px] text-left text-[#767676]">
          {' '}
          2023-01-01 ~ 2023-08-23{' '}
        </p>
      </div>
      <div className="shopping_his_wrap02 px-5 pb-[50px]">
        <div className="point_lists ">
          <div className="point_wrap border-t-[1px] border-solid border-black flex justify-between items-center h-[74px]">
            <div className="point_head pl-4">
              <p className="point_tit text-[13px] leading-[21px]">신세계포인트</p>
              <p className="point_txt text-[13px] leading-[21px] font-medium">(사용 가능)</p>
            </div>
            <PointIcon point={361} />
          </div>
          <div
            className="point_use_view flex w-full h-[200px] rounded-2xl overflow-hidden relative bg-gradient-primary mb-0 mx-auto
                    before:content-[''] before:block before:w-[calc(100%-4px)] before:h-[196px] before:bg-white before:rounded-[14px] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-0"
          >
            <div className="point_use_cont relative grow-[1] shrink-[1] basis-0 h-full box-border p-4">
              <p className="p_use text-[13px] leading-[21px] break-keep">
                신세계포인트
                <br />
                <span>이용</span>
              </p>
              <p className="p_year text-[13px] absolute left-4 bottom-[18px] break-keep text-black">
                {' '}
                2023년{' '}
              </p>
            </div>
            <div className="point_bar_wrap grow-[1] shrink-[1] basis-0 flex relative z-[1] items-center">
              <ul className="bar_accumulate mr-[55px] h-full list-none">
                <li className="h-full box-border pt-[45px] pb-4 flex flex-col items-end">
                  <div
                    className="bar_graph h-full w-6 rounded-[30px] bg-[#ea035c] mt-auto relative
                                after:content-[''] after:absolute after:z-[1] after:left-1/2 after:-top-[10px] after:-ml-1.5 after:w-0 after:h-0 after:border-t-[6px] after:border-[#ea035c] after:border-x-[6px] after:border-x-solid after:border-x-transparent"
                  >
                    <span>
                      <span className="point_count ff_lato text-[11px] text-white absolute -top-[30px] -left-[30%] right-[unset] -translate-[49%] block bg-[#ea035c] h-[22px] z-[1] rounded-[4px] leading-[21px] px-[7px] w-auto font-bold min-w-[39px] bottom-[unset]">
                        107P
                      </span>
                    </span>
                  </div>
                  <p className="accumulate_txt text-[13px] leading-[21px] font-medium">적립</p>
                </li>
              </ul>
              <PointBar type={'use'} point={30} color={'purple'} height={100}></PointBar>
            </div>
          </div>
          <PointWrap txt={'방문 일수'} count={'5'} unit={'일'} />
          <PointWrap txt={'구매 금액'} count={'8,300'} unit={'원'} />
        </div>
      </div>
      <div className="brand_use_wrap01 px-5 pb-5">
        <SpecialTitle
          color={'pink'}
          name={'권선'}
          ptag={'text-[20px] leading-[30px] font-normal break-keep -tracking-[.5px]'}
        >
          고객님이 <br />
          자주 방문하는 브랜드
        </SpecialTitle>
      </div>
      <div className="brand_use_wrap02 px-5 pb-10">
        <BrandUseList brand_no={1} brand_name={'(주)이마트24'} count={'5'} unit={'회'} />
      </div>
      <div className="brand_use_wrap01 px-5 pb-5">
        <SpecialTitle
          name={'권선'}
          color={'pink'}
          ptag={'text-[20px] leading-[30px] font-normal break-keep -tracking-[.5px]'}
        >
          고객님이 <br />
          많이 쇼핑하는 브랜드
        </SpecialTitle>
      </div>
      <div className="brand_use_wrap02 px-5 pb-10">
        <BrandUseList brand_no={1} brand_name={'(주)이마트24'} count={'8,300'} unit={'원'} />
      </div>
      <div className="btn_box space1 px-5 pb-10">
        <RoundedButton backgroundColor={'primary'}>
          고객님을 위한 추천 서비스를 만나보세요!
        </RoundedButton>
      </div>
      <NoticeBox className={'px-5 bg-[#fbfbfb]'} title={'유의사항'} type={'info'}>
        <ListForNoticeBox
          className={'text-[12px] leading-[20px] -tracking-[.5px]'}
          level={2}
          isBullet={true}
        >
          매년 1월 1일 ~ 전일까지의 신세계포인트 적립/사용한 결제 건을 기준으로 집계되며 환불, 취소
          등으로 인한 실제 결제 금액과 일부 차이가 있을 수 있습니다.
        </ListForNoticeBox>
        <ListForNoticeBox
          className={'text-[12px] leading-[20px] -tracking-[.5px]'}
          level={2}
          isBullet={true}
        >
          결제 데이터는 결제한 다음 날 반영됩니다.{' '}
        </ListForNoticeBox>
        <ListForNoticeBox
          className={'text-[12px] leading-[20px] -tracking-[.5px]'}
          level={2}
          isBullet={true}
        >
          '자주 방문하는 브랜드'는 구매 횟수가 많은 기준입니다.'
        </ListForNoticeBox>
        <ListForNoticeBox
          className={'text-[12px] leading-[20px] -tracking-[.5px]'}
          level={2}
          isBullet={true}
        >
          '많이 쇼핑하는 브랜드'는 구매 금액이 많은 기준입니다.'
        </ListForNoticeBox>
      </NoticeBox>
    </>
  );
};

export default history;
