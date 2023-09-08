'use client';
import TabBoxSimple from '@/components/modules/TabBoxSimple';
import TabForTabBox from '@/components/atoms/TabForTabBox';
import NaverMap from '@/components/atoms/NaverMap';
import Dropdown from '@/components/atoms/Dropdown';
import Button from '@/components/atoms/Button/Button';
import { useState } from 'react';
import Link from 'next/link';

const findstore = () => {
  const [showMap, setShowMap] = useState<boolean>(true);
  return (
    <div className="p-0">
      <TabBoxSimple>
        <li className="flex-1 table relative">
          <div
            className={
              showMap
                ? 'bg-[#fff3f8] text-[#d9044b] font-medium border-[#d9044b] block w-full h-11 pt-[10px] border-b box-border text-sm text-center'
                : 'block w-full h-11 pt-[10px] border-b border-[#fbfbfb] box-border text-sm text-center'
            }
            onClick={() => setShowMap(true)}
          >
            지도로 찾기
          </div>
        </li>
        <li className="flex-1 table relative">
          <div
            className={
              !showMap
                ? 'bg-[#fff3f8] text-[#d9044b] font-medium border-[#d9044b] block w-full h-11 pt-[10px] border-b box-border text-sm text-center'
                : 'block w-full h-11 pt-[10px] border-b border-[#fbfbfb] box-border text-sm text-center'
            }
            onClick={() => setShowMap(false)}
          >
            지역으로 찾기
          </div>
        </li>
      </TabBoxSimple>
      {showMap ? (
        <div id={'map'} className="find_store_wrap01">
          <NaverMap />
        </div>
      ) : (
        <div id={'region'} className="find_store_wrap02 pt-10 pb-20 px-5">
          <div className="w-full block">
            <Dropdown mainTitle={'제휴사'} id={'1'} options={['1', '2', '3']} />
          </div>
          <div className="w-[50%] h-12 rounded-lg inline-block mt-2.5">
            <Dropdown mainTitle={'시'} id={'2'} options={['4', '5', '6']} />
          </div>
          <div className="w-[50%] h-12 rounded-lg inline-block pl-2.5">
            <Dropdown mainTitle={'군/구'} id={'3'} options={['7', '8', '9']} />
          </div>
          <Button className="mt-6 h-12 block" backgroundColor="black" onClick={''}>
            검색
          </Button>
        </div>
      )}
    </div>
  );
};

export default findstore;
