import Image from 'next/image';
import NoTxt from '@/components/atoms/NoTxt';
import NoResultBox from '@/components/atoms/NoResultBox';

export default function Home() {
  return (
    <div className="event_list_box02 finish pt-[16px] mb-[60px] mx-5">
      <h3 className="hidden inline-block z-[-1] w-[1px] h-[1px] ">당첨 이벤트</h3>
      <NoResultBox>
        <NoTxt>당첨 이벤트가 없습니다.</NoTxt>
      </NoResultBox>
    </div>
  );
}
