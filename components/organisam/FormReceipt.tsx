'use client';
import Image from 'next/image';
import Button from '../atom/Button';
import Checkbox from '../atom/Checkbox';
import Dropdown from '../atom/Dropdown';
import ListBody from '../atom/ListBody';
import ListHeader from '../atom/ListHeader';
import Paper from '../atom/Paper';
import IndexStat from '../atom/IndexStat';
import ListItem from '@/components/atom/ListItem';

export default function FormReceipt() {
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const handleCheck = () => {
    alert('hi');
  };
  return (
    <>
      <ListBody className="space-y-3 px-5">
        <li className="flex justify-between ">
          <Checkbox
            className="text-[11px]"
            id={'_chk'}
            name={`[선택] 전자영수증 조회를 위한 제 3자 제공동의`}
          />
          <Button id="termsbtn_1" className="h-[22px]" type="simple">
            <span className="block text-xs indent-[-99em] w-6 h-full opacity-50 bg-[url('/images/arrow_left.png')] bg-[7px_auto] bg-center rotate-180 bg-no-repeat">
              내용보기
            </span>
          </Button>
        </li>
        <li className="flex justify-between">
          <Checkbox className="text-[11px]" id={'_chk'} name={`전체 선택`} />
        </li>
      </ListBody>

      <ListBody className="px-5 mt-4 mb-10 grid grid-cols-3 box-border min-w-[320px] min-h-[250px]">
        {arr.map((i) => (
          <li key={i} className="relative w-full">
            <input
              className="absolute left-0 top-0 w-full h-full appearance-none"
              type="checkbox"
              onClick={handleCheck}
            />
            <label
              className="flex justify-center items-center h-[calc(100%+4px)] w-[calc(100%+2px)] z-[4] text-white bg-mypoint"
              htmlFor=""
            >
              <span className="text-[11px]">(주)신세계푸드</span>
            </label>
          </li>
        ))}
      </ListBody>
      <div className="px-5">
        <Button bgColor="primary">저장하기</Button>
        <ListHeader border>{}</ListHeader>
      </div>

      <div className="px-5 pb-10">
        <ListHeader>
          {/* dropdown */}
          <Dropdown id={'dropdownId'} options={[]} />
          <div className="text-xs w-4/6">
            <p>2023-08-06 ~ 2023-09-06</p>
          </div>

          {/* TODO: download all */}
          <Button className="pr-1" type="simple">
            <Image width={19} height={19} src={'/images/icon_filter.png'} alt="필터" />
          </Button>
        </ListHeader>
        <Paper className="flex items-center h-9" bgColor="bg-[#f8f8f8]">
          <IndexStat type="accumulate" />
          <IndexStat type="consumption" />
        </Paper>

        <ListBody className="border-b">{}</ListBody>
      </div>

      <ListBody className="pt-8 px-5 pb-20">
        <ListHeader className={'text-sm font-medium leading-6 pb-2'}>[유의사항]</ListHeader>
        <ListItem className="text-xs text-[#767676]" bullet>
          신세계포인트 제휴사 중 '전자 영수증 정보 제공 가능 제휴사'에 한해 제공됩니다.
        </ListItem>
        <ListItem className="text-xs text-[#767676]" bullet>
          서비스 이용 동의 시 선택하신 제휴사에 한해 영수증 조회가 가능하며 서비스 해제 및 제휴사
          선택을 변경하실 수 있습니다.
        </ListItem>
        <ListItem className="text-xs text-[#767676]" bullet>
          스마트 영수증은 신세계포인트 적립 또는 사용한 구매 내역만 조회되며 포인트 선물 및 전환,
          상품권 구매 내역은 제공되지 않습니다.
        </ListItem>
      </ListBody>
    </>
  );
}
