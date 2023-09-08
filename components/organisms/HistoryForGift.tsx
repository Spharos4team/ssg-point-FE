'use client';
import { useState } from 'react';
import Button from '../atoms/Button/Button';
import ListForHistory, { PointListType } from '../atoms/ListForHistory';
import Modal from '../atoms/Modal';
import HistoryList from '../modules/HistoryList';
import Link from 'next/link';

const HistoryForGift = () => {
  const [modal, setModal] = useState(false);
  const dropdownForHistory = {
    dropdownTitle: 'pntHistory',
    dropdownOptions: ['1주일', '1개월', '3개월', '6개월', '직접입력'],
    dropdownInitial: 2,
  };

  const pointExample: PointListType[] = [
    {
      historyTag: '선물적립',
      pntValue: 10,
      pntInfo: {
        title: '권*(ID:ks*******)',
        sub: '받은 선물: 수락',
      },
      pntDate: '2023-08-02',
    },
  ];
  return (
    <>
      <div className="px-5 pb-5">
        <Button className="h-12" backgroundColor="primary" onClick={() => setModal(!modal)}>
          선물하기
        </Button>
      </div>

      <div className="px-5 pb-10">
        {/* TODO: 스타일 설정 */}
        <HistoryList dropdown={dropdownForHistory}>
          {pointExample.map((point, index) => (
            <ListForHistory key={index} point={point} />
          ))}
        </HistoryList>
      </div>

      <Modal modal={modal} center>
        <>
          <p className="text-sm leading-6">
            본 서비스는 신세계포인트 앱에서만 이용하실 수 있습니다.
            <br />앱 설치 후 이용해 주세요.
          </p>
          <p className="text-xs leading-5 text-[#767676]">
            ※ 이미 다운로드한 경우, 앱이 바로 실행됩니다.
          </p>
          <div className="flex gap-x-1 pt-6">
            <Button
              className="h-10 text-[#767676]"
              backgroundColor="white"
              onClick={() => setModal(!modal)}
            >
              다음에 하기
            </Button>
            <Button className="h-10" backgroundColor="black">
              <Link href={'/'}>앱 다운로드</Link>
            </Button>
          </div>
        </>
      </Modal>
    </>
  );
};

export default HistoryForGift;
