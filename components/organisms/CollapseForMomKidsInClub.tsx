import CollapseButton from "../atoms/Button/CollapseButton";
import RadioCard2 from "../atoms/RadioCard2";
import TextBox from "../atoms/TextBox";
import RadioCardGroup2 from "../modules/RadioCardGroup2";
import { RadioProvider } from "../hooks/RadioProvider";

const CollapseForMomKidsInClub = () => {
  const genderRadios = {
    valueName: "KidsGender",
    innerHtml: {
      1: "남자",
      2: "여자",
    } as { [key: number]: string },
  };

  return (
    <CollapseButton buttonName="나의 자녀 정보">
      <RadioProvider>
        <RadioCardGroup2 title={"자녀1"} radioType="titleLeft">
          {Object.keys(genderRadios.innerHtml).map((key) => (
            <RadioCard2
              key={key}
              id={`kids_gender1_${key}`}
              value={genderRadios.innerHtml[parseInt(key)]}
            >
              {genderRadios.innerHtml[parseInt(key)]}
            </RadioCard2>
          ))}
          <TextBox
            className="w-[calc(100%-66px)] ml-[66px]"
            id="kids_birth_1"
            type="text"
          >
            생년월일 ex)20170201
          </TextBox>
        </RadioCardGroup2>
      </RadioProvider>

      <RadioProvider>
        <RadioCardGroup2 title={"자녀2"} radioType="titleLeft">
          {Object.keys(genderRadios.innerHtml).map((key) => (
            <RadioCard2
              key={key}
              id={`kids_gender2_${key}_`}
              value={genderRadios.innerHtml[parseInt(key)]}
            >
              {genderRadios.innerHtml[parseInt(key)]}
            </RadioCard2>
          ))}
          <TextBox
            className="w-[calc(100%-66px)] ml-[66px]"
            id="kids_birth_2"
            type="text"
          >
            생년월일 ex)20170201
          </TextBox>
        </RadioCardGroup2>
      </RadioProvider>
    </CollapseButton>
  );
};

export default CollapseForMomKidsInClub;
