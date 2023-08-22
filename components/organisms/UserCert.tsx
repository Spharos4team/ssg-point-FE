import RoundedButton from "../atoms/Button/RoundedButton";
import { Checkbox } from "../atoms/Checkbox";
import Dropdown from "../atoms/Dropdown";
import RadioCard2 from "../atoms/RadioCard2";
import TextBox from "../atoms/TextBox";
import RadioCardGroup2 from "../modules/RadioCardGroup2";
import { RadioProvider } from "../modules/RadioContext";
import TabBoxSimple from "../modules/TabBoxSimple";

const UserCert = () => {
  const mCarrier: string[] = [
    "SKT",
    "KT",
    "LG U+",
    "SKT 알뜰폰",
    "KT 알뜰폰",
    "LG U+ 알뜰폰",
  ];

  const genderRadios = {
    valueName: "sortHistory",
    innerHtml: ["남자", "여자"] as string[],
  };
  const abroadRadios = {
    valueName: "sortHistory",
    innerHtml: ["내국인", "외국인"] as string[],
  };
  return (
    <>
      {/* TODO: Radio가 아니고, 상태관리가 가능한 tabBox */}
      <TabBoxSimple className="flex relative h-[88px] after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border after:border-[#ebebeb] after:rounded-lg after:z-0">
        <li className="bg-gradient-primary-line flex flex-1 items-center justify-center p-[2px] rounded-lg z-[1]">
          <a
            className="relative block w-full h-full pt-[53px] text-center bg-white rounded-md"
            href="javascript:void(0)"
          >
            휴대폰인증
          </a>
        </li>
        <li
          className={`relative flex flex-1 items-center justify-center p-[2px] h-full z-[1]`}
        >
          <a
            className={`relative block w-full h-full pt-[53px] text-center text-[#767676] bg-white rounded-md`}
            href="javascript:void(0)"
          >
            카드인증
          </a>
        </li>
      </TabBoxSimple>
      <div className="box-border pb-10">
        <h3 className="hidden">휴대폰인증</h3>
        <div>
          <div className="py-10">
            <div className="pb-4 box-border">
              <p className="pb-2 text-xs">이름을 입력해 주세요.</p>
              <TextBox id="name" type="text">
                이름 입력
              </TextBox>
            </div>

            <RadioProvider>
              <RadioCardGroup2
                title={"성별을 선택해주세요"}
                radioType="titleTop"
                defaultValue="남자"
              >
                {Object.keys(genderRadios.innerHtml).map((key) => (
                  <RadioCard2
                    key={key}
                    id={`gender_${key}`}
                    value={genderRadios.innerHtml[parseInt(key)]}
                  >
                    {genderRadios.innerHtml[parseInt(key)]}
                  </RadioCard2>
                ))}
              </RadioCardGroup2>
            </RadioProvider>

            <RadioProvider>
              <RadioCardGroup2
                title={"외국인 이신가요?"}
                radioType="titleTop"
                defaultValue="내국인"
              >
                {Object.keys(abroadRadios.innerHtml).map((key) => (
                  <RadioCard2
                    key={key}
                    id={`abroad_${key}`}
                    value={abroadRadios.innerHtml[parseInt(key)]}
                  >
                    {abroadRadios.innerHtml[parseInt(key)]}
                  </RadioCard2>
                ))}
              </RadioCardGroup2>
            </RadioProvider>

            <div className="pb-4 box-border">
              <p className="pb-2 text-xs">
                생년월일을 입력해 주세요.(예: 19990101)
              </p>
              <TextBox id="birth" type="number">
                법정생년월일 8자리
              </TextBox>
            </div>

            <div className="pb-4 box-border">
              <p className="pb-2 text-xs">
                본인명의의 휴대전화번호를 입력해 주세요.
              </p>
              <Dropdown id="moCarrier" title="통신사" options={mCarrier} />
              <TextBox className="mt-2" id="phoneNo" type="number">
                -없이 휴대폰 번호 입력
              </TextBox>
            </div>
          </div>

          {/* TODO: CheckBox Context 만들어서 상태관리하기 */}
          <div className="">
            <Checkbox id="all_checker" name="모든 약관에 동의합니다." />
            <Checkbox id="01" name="[필수] 휴대전화 인증 서비스 이용약관" />
            <Checkbox id="02" name="[필수] 고유식별정보 처리 동의" />
            <Checkbox id="03" name="[필수] 통신사 이용약관 동의" />
            <Checkbox id="04" name="[필수] 개인정보 수집/이용동의" />
          </div>

          <RoundedButton className="pt-10" backgroundColor="primary">
            인증번호 요청
          </RoundedButton>
        </div>
      </div>
    </>
  );
};

export default UserCert;
