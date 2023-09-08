import { Checkbox } from '@/components/atoms/Checkbox';
import ContentHeader from '@/components/atoms/ContentHeader';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import NoticeBox from '@/components/modules/NoticeBox';
import RoundCard from '@/components/modules/RoundCard';
import { ValueProvider } from '@/components/hooks/ValueProvider';
import Button from '@/components/atoms/Button/Button';

export default function InfoRcvAgreePage() {
  return (
    <>
      <ContentHeader
        main={
          <strong className="font-medium">
            <span className="text-[#ea035c]">나에게 딱 알맞는 정보</span>를 원한다면-
          </strong>
        }
        sub="광고정보 수신동의를 하시면 신세계포인트의<br />다양한 혜택과 소식을 받으실 수 있습니다."
      />

      {/* component ? module */}
      <div className="box-border pb-10 px-5">
        <p className="border-b-[1px] border-black text-base leading-[26px] font-medium pb-3">
          {' '}
          등록된 연락처 정보를 확인하세요.{' '}
        </p>
        <div className="pt-4 space-y-4">
          {/* TODO: map 활용할 것 */}
          <dl className="">
            <dt className="text-[13px] leading-[21px]">휴대폰 번호</dt>
            <dd className="text-[#767676]">010-49**-89**</dd>
          </dl>
          <dl className="">
            <dt className="text-[13px] leading-[21px]">이메일</dt>
            <dd className="text-[13px] leading-[21px] text-[#767676]">creativehorn@naver.com</dd>
          </dl>
          <dl className="">
            <dt className="text-[13px] leading-[21px]">주소</dt>
            <dd className="text-[13px] leading-[21px] text-[#767676]">
              부산 해운대구 양운로, *****
            </dd>
          </dl>
        </div>
      </div>

      <RoundCard
        className="mx-6 text-[13px] rounded-lg"
        title={
          <strong className="text-black text-[14px] font-normal">
            연락처 정보 변경이 필요하시나요?
          </strong>
        }
        subtitle="회원정보 수정 메뉴에서 변경하실 수 있습니다."
        linkName="회원정보 수정"
        link="/myInfo/cert"
      />

      {/* component ? module */}
      <div className="py-10 px-5">
        <div>
          <ul className="space-y-4">
            <li className="relative flex justify-between">
              <div className="relative inline-block align-top">
                <Checkbox
                  id="00"
                  type="basic-single"
                  name="[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의"
                />
              </div>
              <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                  내용보기
                </span>
              </button>
            </li>

            <li className="relative flex justify-between">
              <div className="relative inline-block align-top">
                <Checkbox
                  id="01"
                  name="[선택] 이마트/신세계 공동 개인정보 수집 및 이용동의"
                  type={'basic-single'}
                />
              </div>
              <button className="ablsolute right-0 top-0 w-6 h-[22px]">
                <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
                  내용보기
                </span>
              </button>
            </li>
          </ul>
          <div className="mt-[8px] ml-[11px] py-2 pl-5 border-l border-black">
            <p className="text-[14px] leading-6 mb-4">신세계포인트 광고정보 수신동의</p>
            <ValueProvider>
              <Checkbox className="!block pb-4" id="allCheck" name="전체동의" type={'basic-multi'}>
                <div className="flex gap-x-4">
                  <Checkbox id="email" name="이메일" type={'basic-multi'} />
                  <Checkbox id="message" name="문자" type={'basic-multi'} />
                  <Checkbox id="DM" name="DM" type={'basic-multi'} />
                  <Checkbox id="TM" name="TM" type={'basic-multi'} />
                </div>
              </Checkbox>
            </ValueProvider>
          </div>
        </div>
      </div>

      {/* component && organism */}
      <div className="px-5">
        <ListForNoticeBox level={2} isBullet={false}>
          {
            '당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함), 제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트 고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.<br />※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다.'
          }
        </ListForNoticeBox>

        <Button className="my-10 h-12" backgroundColor="primary">
          확인
        </Button>
      </div>
      <NoticeBox type="info" title="유의사항">
        <ListForNoticeBox level={2}>
          광고정보 수신거부와 관계없이 회원 및 서비스 정책 변경, 주문/배송 안내, 법적 의무사항 등
          안내성 고지 사항은 정상발송됩니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          광고정보 수신거부 전 예약 발송된 광고 메시지가 있는 경우 약 1-2일 동안 발송될 수 있습니다.
        </ListForNoticeBox>
      </NoticeBox>
    </>
  );
}
