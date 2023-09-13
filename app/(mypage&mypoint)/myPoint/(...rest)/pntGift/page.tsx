'use client';
import ContentTitle from '@/components/atoms/ContentTitle';
import ContentHeader from '@/components/atoms/ContentHeader';
import { InputText } from '@/components/atoms/InputText';
import Button from '@/components/atoms/Button/Button';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import NoticeBox from '@/components/modules/NoticeBox';
import Modal from '@/components/atoms/Modal';
import { useState } from 'react';

export default function pntGift() {
  const [modal, setModal] = useState(false);
  return (
    <div className="px-5 -mt-10">
      <h2 className="font-medium text-2xl">선물하기</h2>
      <p className="text-sm leading-6 text-[#767676] pt-2 font-normal">
        신세계포인트를 선물 받으실 분의
        <br />
        정보를 정확하게 입력해 주세요.
      </p>
      <div className="py-10">
        <div className="flex pb-2">
          <InputText
            className="rounded-lg w-full break-all"
            id={'number'}
            inputType={'phone'}
            title={'number'}
            placeholder={'-없이 휴대폰 번호를 입력해 주세요.'}
          />
          <Button
            backgroundColor={'white'}
            className={'h-12 text-sm font-normal ml-[5px] block !w-auto break-keep p-3'}
          >
            주소록
          </Button>
        </div>
        <InputText
          className="rounded-lg w-full"
          id={'name'}
          inputType={'phone'}
          title={'name'}
          placeholder={'실명을 정확하게 입력해 주세요.'}
        />
      </div>
      <Modal modal={modal} center>
        <p className="text-sm text-center font-medium py-5">
          선물하려는 분이 맞는지 확인해 주세요.
        </p>
        <div className="text-xs border-x-0 border-t-black border-[2px] border-t-solid px-2 py-3 text-[#767676] font-medium">
          <ul className="flex w-full">
            <li className="py-2 w-1/5">이름</li>
            <li className="py-2 text-black font-medium ">조*일</li>
          </ul>
          <ul className="flex w-full">
            <li className="py-2 w-1/5">아이디</li>
            <li className="py-2 text-black font-medium">cr**********</li>
          </ul>
        </div>
        <div className="flex border-none pt-5">
          <Button onClick={() => setModal(!modal)} className="mr-1 h-12 font-normal text-gray-500">
            아니요
          </Button>
          {/*선물하고 리다이렉션 어딘지는 모름 임시로 선물하기 메인*/}
          <Button className="h-12 font-normal" backgroundColor={'black'} type={"link"} href={'/myPoint/pntGiftMain'}>
            네
          </Button>
        </div>
      </Modal>

      <Button
        backgroundColor={'black'}
        className={'h-12 font-medium'}
        onClick={() => setModal(!modal)}
      >
        조회하기
      </Button>
      <NoticeBox type="info" className="mt-[80px] bg-[#fbfbfb]" title="유의사항">
        <ListForNoticeBox level={5} isBullet>
          신세계포인트 본인인증을 완료한 회원에게만 선물하기가 가능합니다. (본인 인증을 하지않은
          회원, 휴먼회원, 법인회원은 불가합니다.)
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          주소록 서비스는 모바일앱에서만 사용하실 수 있어요.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          ID당 1회 최대 10만 포인트, 연간 200만 포인트까지 선물하실 수 있어요.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          포인트를 선물하시면 즉시 포인트가 차감되며 받으시는 분이 거정하거나 15일 이내에 수락하지
          않을 경우 차감된 포인트를 자동으로 반환됩니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          포인트 선물하기 시 포인트 비밀번호(숫자 4자리) 입력이 필요합니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          포인트 선물하기 완료 후 선물을 취소할 수 없어요.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          신세계포인트 앱이 설치되어 있어야 선물을 수락할 수 있어요.
        </ListForNoticeBox>
      </NoticeBox>
    </div>
  );
}
