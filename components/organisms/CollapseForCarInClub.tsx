import { Category } from '@/types/CategoryProps';
import CollapseButton from '../atoms/Button/CollapseButton';
import Dropdown from '../atoms/Dropdown';
import TextBox from '../atoms/TextBox';
const LocNumber: Category[] = [
  { id: 1, parent_id: '', slug: 'none', name: '지역번호없음' },
  { id: 2, parent_id: '', slug: 'seoul', name: '서울' },
  { id: 3, parent_id: '', slug: 'busan', name: '부산' },
  { id: 4, parent_id: '', slug: 'gyeonggi', name: '경기' },
  { id: 5, parent_id: '', slug: 'gangwon', name: '강원' },
  { id: 6, parent_id: '', slug: 'chungbuk', name: '충북' },
  { id: 7, parent_id: '', slug: 'chungnam', name: '충남' },
  { id: 8, parent_id: '', slug: 'jeonbuk', name: '전북' },
  { id: 9, parent_id: '', slug: 'jeonnam', name: '전남' },
  { id: 10, parent_id: '', slug: 'gyeongbuk', name: '경북' },
  { id: 11, parent_id: '', slug: 'gyeongnam', name: '경남' },
  { id: 12, parent_id: '', slug: 'gyeongnam', name: '제주' },
  { id: 13, parent_id: '', slug: 'jeju', name: '제주' },
  { id: 14, parent_id: '', slug: 'daegu', name: '대구' },
  { id: 15, parent_id: '', slug: 'incheon', name: '인천' },
  { id: 16, parent_id: '', slug: 'incheon', name: '광주' },
  { id: 17, parent_id: '', slug: 'daejeon', name: '대전' },
];
const CollapseForCarInClub = () => {
  return (
    <CollapseButton buttonName="나의 차량 정보">
      <Dropdown type="category" id="locCarNo" mainTitle="지역번호" options={LocNumber} />
      <div className="flex mt-2 space-x-1">
        <TextBox className="flex-1 whitespace-nowrap tracking-[-.1em]" id="carNoPre" type="number">
          차량 앞자리 번호
        </TextBox>
        <TextBox className="flex-1 whitespace-nowrap tracking-[-.1em]" id="carTextCen" type="text">
          차량 중간 글자
        </TextBox>
        <TextBox className="flex-1 whitespace-nowrap tracking-[-.1em]" id="carNoPost" type="number">
          차량 마지막 번호
        </TextBox>
      </div>
    </CollapseButton>
  );
};

export default CollapseForCarInClub;
