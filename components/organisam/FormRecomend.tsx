'use client';
import ListBody from '@/components/atom/ListBody';
import Checkbox from '@/components/atom/Checkbox';
import Button from '@/components/atom/Button';
import DetailArrow from '@/components/atom/DetailArrow';
import Box from '@/components/atom/Box';
import NoTxt from '@/components/atom/NoTxt';
import { useAppContext } from '@/provider/AppContextProvider';
import Paper from "@/components/atom/Paper";

// todo: 전역으로 광고 동의인지 확인
export default function FormRecommend() {
  const { appValueList, handleAppRecord } = useAppContext();
  return (
    <>
      {/*  광고 동의 상태에 따라 다름 */}
      {/*    수신 안함 */}
      <div className="!pt-8 py-10 px-5">
        <p className="text-base leading-[26px] font-normal">
          고객님의&nbsp;
          <span className="text-[#ea035c] font-medium">쇼핑 히스토리를 바탕</span>으로
          <br /> 더 많~은 혜택을 확인하실 수 있는
          <br /> 서비스를 추천드려요!
        </p>
        {/*    checkbox*/}
        <ListBody className="pt-[21px] pb-10">
          <li className="flex justify-between ">
            <Checkbox
              className="text-[11px]"
              id={'5_chk'}
              name={`[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의`}
            />
            <Button id="termsbtn_1" className="h-[22px]" type="simple">
              <DetailArrow />
            </Button>
          </li>
          <li className="flex justify-between">
            <Checkbox
              className="text-[11px]"
              id={'6_chk'}
              name={`[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의`}
            />
            <Button id="termsbtn_1" className="h-[22px]" type="simple">
              <DetailArrow />
            </Button>
          </li>
        </ListBody>
        <Button bgColor={'primary'}>동의하고 확인하기</Button>
      </div>
      <div className="px-5 pb-20">
        <Paper className="pt-[25px] pb-[19px] table w-full border-[1px] border-dashed border-[#bababa] bg-white">
          <NoTxt className="text-sm text-[#222] leading-[23px]">
            서비스를 이용하시려면
            <br /> 위의 이용동의를 해주세요.
          </NoTxt>
        </Paper>
      </div>
      {/*  동의했을 시*/}
      <div className="px-5 pb-20">
        <Paper className="py-10 border-[1px] border-dashed border-[#bababa] bg-white">
          <NoTxt className="text-sm text-[#222] leading-[23px]">추천 서비스 정보가 없습니다.</NoTxt>
        </Paper>
      </div>
    </>
  );
}
