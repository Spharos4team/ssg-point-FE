'use client';
import Button from '@/components/atoms/Button/Button';
import { Checkbox } from '@/components/atoms/Checkbox';
import ContentHeader from '@/components/atoms/ContentHeader';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import Modal from '@/components/atoms/Modal';
import Underline from '@/components/atoms/Underline';
import NoticeBox from '@/components/modules/NoticeBox';
import Link from 'next/link';
import { useState } from 'react';

export default function LeaveOnofflinePage() {
  const [miniModal, setMiniModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);
  const handleLeave = () => {
    setMiniModal(false);
    setLargeModal(true);
  };
  return (
    <>
      <ContentHeader
        main={
          <>
            <strong className="relative font-normal">
              신세계포인트 온/오프라인 완전 탈퇴 시,
              <br />
              아래 가입하신 모든 사이트를
              <br />
              <span className={`font-medium text-[#ea035c]`}>더 이상 이용하실 수 없게 </span>
              됩니다.
            </strong>
          </>
        }
        sub="탈퇴 유의사항을 꼭 확인해 주세요."
      />

      <div className="flex flex-col px-5">
        <h3 className="text-base leading-[26px] font-medium my-5 pb-3 border-black border-b">
          회원 탈퇴 사이트
        </h3>
        <div>
          <div>
            <Checkbox className="text-sm" id="all" name="신세계포인트 통합ID 서비스" />
          </div>
          <div>
            <ul>
              <li>
                <div className="relative flex gap-x-2 mt-2 ml-[11px] py-2 pl-5 border-l border-black">
                  <Checkbox className="text-sm" id="emart" name="이마트" />
                  <span className="relative block text-xs leading-[18px] text-[#767676] whitespace-nowrap align-middle">
                    (가입일자: 2023-08-24)
                  </span>
                  <Link
                    className="absolute top-0 right-0 w-[60px] h-[22px] align-middle"
                    href={
                      'https://member.shinsegaepoint.com/emart/emartApp/myinfo/withdrawalPassword'
                    }
                    target="_blank"
                  >
                    <span className="relative block text-[#767676] w-full text-xs text-left indent-0 pt-1 after:absolute after:inline-block after:w-[10px] after:h-6 after:box-border after:top-[5.5px] after:right-0 after:bg-[url('/images/arrow_right_gray.png')] after:bg-[8.5px_auto] after:bg-no-repeat">
                      탈퇴하기
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <NoticeBox type="simple" className="!pb-0 !pt-5">
            <ListForNoticeBox level={2} isBullet>
              일부 사이트만 탈퇴를 원하시는 경우 해당 사이트에서 개별적으로 탈퇴하실 수 있습니다.
            </ListForNoticeBox>
            <ListForNoticeBox level={2} isBullet>
              탈퇴 시 오프라인(플라스틱) 포인트 카드는 더 이상 사용하실 수 없습니다.
            </ListForNoticeBox>
          </NoticeBox>
        </div>
      </div>

      <div className="px-5 pt-10 pb-5">
        <Checkbox className="text-sm" id="all" name="오프라인 포인트카드" />
        <NoticeBox type="simple" className="!pb-0 !pt-2.5">
          <ListForNoticeBox level={2} isBullet>
            {'탈퇴 시 소지하신 오프라인(플라스틱) 포인트 카드는<br/> 더 이상 사용이 불가합니다.'}
          </ListForNoticeBox>
        </NoticeBox>
      </div>

      <div className="px-5">
        <NoticeBox type="info" title="유의사항">
          <ListForNoticeBox level={5}>
            회원 탈퇴 시 현재 이용 중인 모든 신세계포인트 통합ID 서비스 및 사이트를 더 이상 이용하실 수 없어요!
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            신세계포인트 정책에 따라 회원탈퇴 후 5일 동안 다시 가입할 수 없습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            회원 탈퇴 시 보유하고 계신 포인트, 쿠폰, 각종 적립금 등 모든 혜택은 자동 소멸되며 복구되지 않습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            트레이더스 유료 멤버십(TRADERS CLUB) 회원인 경우, 클럽(멤버십)을 먼저 탈회하신 뒤에 회원탈퇴가 가능합니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            회원 탈퇴 시 신세계 아카데미 및 이마트 문화센터 수강 신청 및 변경이 불가할 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            회원 탈퇴 후 다시 가입하시는 경우 신규 회원으로 가입되며, 이전의 회원정보 및 혜택은 복원되지 않습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            회원 탈퇴 전 예약 발송된 광고 메시지가 있는 경우 약 1-2일 동안 발송될 수 있습니다.
          </ListForNoticeBox>
        </NoticeBox>
      </div>

      <div className="px-5 pb-20">
        <Checkbox
          className="text-sm leading-[18px]"
          id="agree"
          name="탈퇴 유의사항을 모두 확인하였으며,<br/>신세계포인트 서비스 탈퇴에 동의합니다."
        />
        <div>
          <Button className="mt-10 h-12" backgroundColor="white" onClick={() => setMiniModal(true)}>
            신세계포인트 탈퇴하기
          </Button>
        </div>
      </div>

      <Modal modal={miniModal} title="" center>
        <p className="text-sm leading-6 text-center pt-2 pb-6">
          조영일님께서는 온라인 ID를 탈퇴 시<br />
          신세계포인트 서비스에서 완전히 탈퇴되어
          <br />
          더 이상 다양한 혜택 및 서비스를
          <br />
          이용하실 수 없습니다.
        </p>
        <p className="text-sm leading-6 font-semibold text-center text-[#ea035c] pt-2 pb-6 tracking-[-.3px]">
          ※신세계그룹의 각 사별 적립금/마일리지/포인트 등도 모두 함께 소멸됩니다.
        </p>
        <ListForNoticeBox level={2} isBullet>
          멤버십 서비스 : TRADERS CLUB, 사이먼 VIP, 시코르, 쓱고우, 에브리데이, 면세점, 까사미아,
          이마트앱, 백화점앱, 이마트 문화센터, 백화점아카데미, 스타필드 클래스콕 등
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          적립금/마일리지/포인트 : e머니, TR CASH, SSG머니, 썸머니 등
        </ListForNoticeBox>
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-sm font-semibold text-center pt-2 pb-6">정말로 탈퇴하시겠습니까?</p>
          <Button type="link" className="!h-10" backgroundColor="pink" href="/cscenter/faq">
            고객센터
          </Button>
          <div className="flex gap-2">
            <Button
              className="h-10"
              backgroundColor="white"
              onClick={() => {
                setMiniModal(false);
              }}
            >
              다시 생각해보기
            </Button>
            <Button className="h-10" backgroundColor="black" onClick={handleLeave}>
              그래도 탈퇴하기
            </Button>
          </div>
        </div>
      </Modal>

      <Modal modal={largeModal} title="회원탈퇴" fill>
        <p className="text-xl leading-[30px] pb-[30px]">
          안녕하세요. <Underline underlineColor="pink">조영일</Underline>님
        </p>
        <ul>
          <ListForNoticeBox level={5}>
            회원 탈퇴 시 현재 이용 중인 모든 신세계포인트 통합ID 서비스 및 사이트를 더 이상 이용하실
            수 없습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            신세계포인트 정책에 따라 회원탈퇴 후 5일 동안 재가입이 불가합니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            회원 탈퇴 시 보유하고 계신 포인트, 쿠폰, 각종 적립금 등 모든 혜택은 자동 소멸되며 복구
            불가합니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            트레이더스 유료 멤버십(TRADERS CLUB) 회원인 경우, 클럽(멤버십)을 먼저 탈회하신 뒤에
            회원탈퇴가 가능합니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            회원 탈퇴 후 재가입 시 신규 회원으로 가입되며, 탈퇴 전의 회원정보 및 혜택은 복원되지
            않습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            회원 탈퇴 전 예약 발송된 광고 메시지가 있는 경우 약 1-2일 동안 발송될 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            회원 탈퇴 시 신세계포인트 온라인 통합ID 회원 탈퇴가 되며, 신세계포인트 오프라인 서비스는
            계속 이용 가능합니다. (단, 오프라인 카드 미보유 회원은 신세계포인트 회원 탈퇴되며,
            신세계포인트의 모든 서비스를 더 이상 이용하실 수 없습니다.)
          </ListForNoticeBox>
        </ul>
        <div className="flex gap-x-2 py-10">
          <Button className="h-12" backgroundColor="white" onClick={() => setLargeModal(false)}>
            취소하기
          </Button>
          <Button className="h-12" backgroundColor="black">
            회원 탈퇴하기
          </Button>
        </div>
        <button
          className="absolute right-[2px] top-[6px] w-[50px] h-[50px] indent-[-999em] bg-[url('/images/icon_close.png')] bg-center bg-no-repeat bg-[length:14px_14px]"
          onClick={() => setLargeModal(false)}
        >
          닫기
        </button>
      </Modal>
    </>
  );
}
