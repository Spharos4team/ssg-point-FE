'use client';
import SpecialTitle from '@/components/atoms/SpecialTitle';
import ContentHeader from '@/components/atoms/ContentHeader';
import Image from 'next/image';
import RegularList from '@/components/atoms/RegularList';
import RoundedButton from '@/components/atoms/Button/RoundedButton';
import Link from 'next/link';
import Button from '@/components/atoms/Button/Button';
import Modal from '@/components/atoms/Modal';
import modal from '@/components/atoms/Modal';
import { useState } from 'react';

const regularstore = () => {
  const [modal, setModal] = useState<boolean>(true);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <ContentHeader className="font-medium" main={'나의 단골 매장'} />
      <div className="px-5 pb-20">
        <ul className="pb-10 -mx-5 list-none">
          <RegularList />
        </ul>
        <Button type="context" className="font-medium h-12" backgroundColor={'primary'}>
          <Link href={'/mylounge/findstore'}>단골 매장 등록하기</Link>
        </Button>
      </div>
      <Modal modal={modal}>
        <p className="text-sm leading-6 break-normal text-left -tracking-[.3px]">
          단골 매장은 10개까지 설정할 수 있어요.
        </p>
        <Button
          type={'context'}
          className={'h-12 mt-6 font-normal text-xs'}
          backgroundColor={'black'}
          onClick={handleModal}
        >
          확인
        </Button>
      </Modal>
    </>
  );
};

export default regularstore;
