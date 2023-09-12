import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import NoticeBox from '@/components/modules/NoticeBox';
import Button from '@/components/atoms/Button/Button';
import { KEY } from '@/utils/KeyHelper';
import Input from '@/components/atoms/Input';
import React from 'react';
import {Checkbox} from "@/components/atoms/Checkbox";

export default function converOKCashbag() {
  const pinkArrowBefore =
    "before:content-[''] before:absolute before:top-[39px] before:left-[calc(20px+25%)] before:ml-[-9px] before:w-[18px] before:h-[14px] before:bg-[url('/images/arrow_right_pink.png')] before:bg-no-repeat before:bg-[100%_auto]";
  const pinkArrowAfter =
    "after:content-[''] after:absolute after:top-[39px] after:right-[calc(20px+25%)] after:mr-[-9px] after:w-[18px] after:h-[14px] after:bg-[url('/images/arrow_right_pink.png')] after:bg-no-repeat after:bg-[100%_auto]";
  const pointList =
    "relative inline-block box-border w-[80px] h-[103px] before:content-[''] before:block before:w-[80px] before:h-[80px] before:mb-2 before:bg-[url('/images/cnvrt_pntList.png')] before:bg-no-repeat before:bg-[258px_auto] before:bg-[]";
  const pointSpan = 'block text-[11px] leading-[19px]';

  return (
    <>
      <div className="pb-10 -mt-10">
        <div className={`relative mt-6 max-w-[320px] mx-auto ${pinkArrowBefore} ${pinkArrowAfter}`}>
          <ol className="text-center space-x-10">
            <li className={`${pointList} before:left-[calc(10px-12%)] before:bg-left-top`}>
              <span className={`${pointSpan}`}>포인트 선택</span>
            </li>
            <li className={`${pointList} before:bg-bottom`}>
              <span className={`${pointSpan}`}>포인트 입력</span>
            </li>
            <li className={`${pointList} before:bg-right-top`}>
              <span className={`${pointSpan}`}>포인트 전환</span>
            </li>
          </ol>
        </div>
      </div>

      <div className="px-5">
        <h3 className="text-base font-medium mb-4">전환 가능 포인트</h3>
        <div className="text-xs border-t-black border-t-[2px] border-t-solid py-4 text-[#767676] font-medium">
          <ul className="list-none">
            <li className="border-b-[2px] border-b-solid p-2">
              <Checkbox id={'1'} name={''}></Checkbox>
            </li>
            <li className="border-b-[2px] border-b-solid p-2">
              <Checkbox id={'2'} name={''}></Checkbox>

            </li>
          </ul>
        </div>
        <div className="pt-5 flex w-full">
          <Input
            className="rounded-lg font-normal after:bg-[url('/images/point_mark.png')] after:bg-no-repeat"
            titleClass="after:content-['*'] after:inline-block after:text-[#eb0000] font-medium"
            type={'phone'}
            title="전환할 포인트"
          >
            전환 포인트를 입력하세요.
          </Input>
          <Button className="h-12 !w-1/4 ml-[5px] font-medium !p-0 break-normal translate-y-[60%]">
            전액 전환
          </Button>
        </div>
        <div className="w-full flex pt-4">
          <Button className="h-12">취소</Button>
          <Button backgroundColor="primary" className="h-12 ml-2">
            확인
          </Button>
        </div>
      </div>

      <div className="px-5">
        <NoticeBox type="info" className="mt-[80px] bg-[#fbfbfb]" title="유의사항">
          <ListForNoticeBox level={5} isBullet>
            각 포인트는 신세계포인트와 1:1로 전환되며 포인트 전환 후 취소할 수 없습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            매일 23:30 ~ 01:30 (2시간)은 포인트 전환 시스템 점검으로 서비스 이용이 일시 중단됩니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            해당 제휴사 시스템 점검 시 서비스 이용이 일시 중단되며 자세한 사항은 해당 제휴사
            공지사항을 확인해 주세요.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            제휴사 사정에 따라 포인트 전환 정책은 변경될 수 있으며 자세한 사항은 해당 제휴사에
            문의해 주세요.
          </ListForNoticeBox>

          <ListForNoticeBox level={2} isBullet={false} className="pt-3">
            삼성카드
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            5천 포인트 이상 보유 시, 5천 포인트 단위로 전환 가능합니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            신세계-삼성카드 소지자에 한해 전환 서비스를 이용할 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            월간 10만 포인트, 연간 100만 포인트까지 전환할 수 있습니다.
          </ListForNoticeBox>

          <ListForNoticeBox level={2} isBullet={false} className="pt-3">
            OK캐쉬백
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            10포인트 이상 보유 시, 10포인트 단위로 전환 가능합니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            월간 5만 포인트, 연간 50만 포인트까지 전환할 수 있습니다. (1일 최대 10회)
          </ListForNoticeBox>

          <ListForNoticeBox level={2} isBullet={false} className="pt-3">
            SC360 리워드
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            1포인트 이상 보유 시, 1포인트 단위로 전환 가능합니다.
          </ListForNoticeBox>
        </NoticeBox>
      </div>
    </>
  );
}
