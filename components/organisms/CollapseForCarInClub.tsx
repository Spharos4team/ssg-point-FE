import CollapseButton from "../atoms/Button/CollapseButton";
import Dropdown from "../atoms/Dropdown";
import TextBox from "../atoms/TextBox";
const LocNumber: { [key: number]: string } = {
  1: "지역번호없음",
  2: "서울",
  3: "부산",
  4: "경기",
  5: "강원",
  6: "충북",
  7: "충남",
  8: "전북",
  9: "전남",
  10: "경북",
  11: "경남",
  12: "제주",
  13: "대구",
  14: "인천",
  15: "광주",
  16: "대전",
};
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
