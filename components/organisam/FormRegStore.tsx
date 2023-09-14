'use client';
import Button from '@/components/atom/Button';
import Link from 'next/link';
import Modal from '@/components/atom/Modal';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Box from '@/components/atom/Box';
import NoTxt from '@/components/atom/NoTxt';
import Paper from "@/components/atom/Paper";

type RegularStoreType = {
  id: number;
  name: string;
  brand: string;
  address: string;
};

export default function FormRegStore() {
  const [modal, setModal] = useState<boolean>(true);
  const handleModal = () => {
    setModal(!modal);
  };
  {
    /* 마운트 시 표시 */
  }
  const RegularStoreFetch = async () => {
    const res = await fetch('http://localhost:3030/regularstore');
    try {
      if (res.ok) {
        const data = res.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [regularStore, setRegularStore] = useState<RegularStoreType[]>([]);
  useEffect(() => {
    RegularStoreFetch().then((v) => {
      setRegularStore(v);
      console.log('here', v);
    });
  }, []);

  {
    /* 브랜드명과 아이콘 경로 매칭 */
  }
  const srcList: { [key: string]: string } = {
    starbucks: '/images/resources/mylounge/icon_starbucks.png',
    casamia: '/images/resources/mylounge/icon_casamia.png',
    chicor: '/images/resources/mylounge/icon_chicor.png',
    emart24: '/images/resources/mylounge/icon_emart24.png',
    jaju: '/images/resources/mylounge/icon_jaju.png',
    nobrand: '/images/resources/mylounge/icon_nobrand.png',
    smootheking: '/images/resources/mylounge/icon_sking.png',
    ssg: '/images/resources/mylounge/icon_ssg.png',
    traders: '/images/resources/mylounge/icon_traders.png',
    wm: '/images/resources/mylounge/icon_w&m.png',
  };

  {
    /* 클릭 시 현재 상태에서 리스트 제거, 삭제 요청할 목록 작성 */
  }
  const [removeList, setRemoveList] = useState<number[]>([]);
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedId = Number(e.currentTarget.id);
    setRemoveList([...removeList, clickedId]);
    setRegularStore(regularStore.filter((i) => i.id !== clickedId));
  };

  useEffect(() => {
    const sendDeleteReq = async () => {
      await Promise.all(
        removeList.map((id) =>
          fetch(`http://localhost:3030/regularstore/${id}`, { method: 'DELETE' }),
        ),
      );
    };
    {
      /* 언마운트 시 삭제, 새로고침을 눌렀을 때는 다시 생성됨 그러나 실제 페이지는 새로고침을 해도
                                       삭제됨, 삭제 버튼을 누를 때 delete 요청이 가는 것으로 보임 */
    }
    return () => {
      sendDeleteReq();
    };
  }, [removeList]);
  return (
    <>
      <div className="px-5 pb-20">
        <ul className="pb-10 -mx-5 list-none">
          {regularStore.length > 0 ? (
            regularStore.map((i: RegularStoreType) => (
              <li
                key={i.id}
                className="border-t-[1px] border-t-solid border-t-[#e8e8e8] relative min-h-[82px] box-border table w-full py-2
                  last:border-b-[1px] last:border-b-solid last:border-b-[#e5e5e5]"
              >
                <div className="pl-[90px] relative table-cell align-middle pr-[65px]">
                  <Image
                    id={String(i.id)}
                    className="w-[50px] h-[50px] rounded-[50%] absolute top-1/2 left-[20px] -mt-[26px] border-[1px] border-solid border-[#d5d5d5]"
                    src={srcList[i.brand]}
                    alt={i.brand}
                    width={100}
                    height={100}
                  />
                  <p className="text-[14px] font-medium leading-[24px] break-keep">{i.name}</p>
                  <p className="text-[13px] text-[#767676] font-normal leading-[21px] break-keep">
                    {i.address}
                  </p>
                  <button
                    id={String(i.id)}
                    onClick={handleRemove}
                    className="bg-[url('/images/resources/mylounge/regular_mark.png')] bg-no-repeat bg-[100%_auto] w-5 h-[26px] absolute right-[30px] top-1/2 -mt-[13px] indent-[-999em] text-[1px] overflow-hidden"
                  >
                    단골매장 삭제
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className="px-5">
              <Paper className="py-7 border-[1px] border-dashed border-[#bababa] bg-white">
                <NoTxt className="text-[13px] ">
                  단골 매장을 등록해주세요.
                  <br />
                  (최대 10개 까지 등록가능)
                </NoTxt>
              </Paper>
            </div>
          )}
        </ul>
        <Link href={'/myLounge/findstore'}>
          <Button bgColor={'primary'}>단골 매장 등록하기</Button>
        </Link>
      </div>
      <Modal id={'regstore_modal'}>
        <p className="text-sm leading-6 break-normal text-left -tracking-[.3px]">
          단골 매장은 10개까지 설정할 수 있어요.
        </p>
        <Button className={'h-12 mt-6 font-normal text-xs'} bgColor={'black'} onClick={handleModal}>
          확인
        </Button>
      </Modal>
    </>
  );
}
