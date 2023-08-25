import CollapseButton from "../atoms/Button/CollapseButton";
import Dropdown from "../atoms/Dropdown";
import TextBox from "../atoms/TextBox";
const LocNumber:  string[] = [
  "지역번호없음",
  "서울",
  "부산",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "대구",
  "인천",
  "광주",
  "대전",
];
const CollapseForCarInClub = () => {
  return (
    <CollapseButton buttonName="나의 차량 정보">
      <Dropdown id="locCarNo" title="지역번호" options={LocNumber} />
      <div className="flex mt-2 space-x-1">
        <TextBox
          className="flex-1 whitespace-nowrap tracking-[-.1em]"
          id="carNoPre"
          type="number"
        >
          차량 앞자리 번호
        </TextBox>
        <TextBox
          className="flex-1 whitespace-nowrap tracking-[-.1em]"
          id="carTextCen"
          type="text"
        >
          차량 중간 글자
        </TextBox>
        <TextBox
          className="flex-1 whitespace-nowrap tracking-[-.1em]"
          id="carNoPost"
          type="number"
        >
          차량 마지막 번호
        </TextBox>
      </div>
    </CollapseButton>
  );
};

export default CollapseForCarInClub;
