"use client";
import { Checkbox } from "../atoms/Checkbox";
import Dropdown from "../atoms/Dropdown";
import RadioCard2 from "../atoms/RadioCard2";
import RadioCardGroup2 from "../modules/RadioCardGroup2";
import { RadioProvider } from "../hooks/RadioProvider";
import TabBoxSimple from "../modules/TabBoxSimple";
import { InputText } from "../atoms/InputText";
import Button from "../atoms/Button/Button";
import { useFormContext } from "../hooks/FormProvider";

const UserCert = () => {
  const { valueList } = useFormContext();
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

  const handleSubmit = () => {
    alert("필수 요소 검사 ");
    console.log(valueList);
  };
  return (
    <>
      {/* TODO: Radio가 아니고, 상태관리가 가능한 tabBox */}
      <TabBoxSimple className="tablist flex relative h-[88px] mx-5 after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border after:border-[#ebebeb] after:rounded-lg after:z-0">
        <li className="bg-gradient-primary-line flex flex-1 items-center justify-center p-[2px] rounded-lg z-[1]">
          <a
            className="phone relative block w-full h-full pt-[53px] text-center bg-white rounded-md leading-[18px] text-[13px]
            after:bg-[position:15px_0px] after:content-[''] after:absolute after:w-[50px] after:h-[40px] after:left-1/2 after:ml-[-25px] after:top-[15px] after:bg-[url('/images/icon_cert.png')] after:bg-no-repeat after:bg-[85px_auto]"
            href="javascript:void(0)"
          >
            휴대폰인증
            <span className="hidden">선택됨</span>
          </a>
        </li>
        <li
          className={`card relative flex flex-1 items-center justify-center p-[2px] h-full z-[1]`}
        >
          <a
            className={`relative block w-full h-full pt-[53px] text-center text-[#767676] bg-white rounded-md
            after:bg-[position:9px_-46px] after:content-[''] after:absolute after:w-[50px] after:h-[40px] after:left-1/2 after:ml-[-25px] after:top-[15px] after:bg-[url('/images/icon_cert.png')] after:bg-no-repeat after:bg-[85px_auto]`}
            href="javascript:void(0)"
          >
            카드인증
            <span className="hidden">선택됨</span>
          </a>
        </li>
      </TabBoxSimple>

      <div className="box-border pb-10">
        <h3 className="hidden">휴대폰인증</h3>
        <div>
          <div className="tab_box0 px-5 py-10">
            <div className="form_box pb-4 box-border">
              <p className="pb-2 text-xs leading-[21px]">
                이름을 입력해 주세요.
              </p>

              <InputText
                className="rounded-lg"
                type="basic"
                id="name"
                inputType="text"
                title="이름을 입력해주세요."
                placeholder="이름 입력"
              />
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

            <div className="flex flex-col gap-y-2 pb-4 box-border">
              <p className="text-xs">생년월일을 입력해 주세요.(예: 19990101)</p>
              <InputText
                className="rounded-lg"
                type="basic"
                id="birthday"
                inputType="birth"
                title="생년월일을 입력해주세요."
                placeholder="법정생년월일 8자리"
              />
            </div>

            <div className="flex flex-col gap-y-2 box-border">
              <p className="text-xs">
                본인명의의 휴대전화번호를 입력해 주세요.
              </p>
              <Dropdown id="moCarrier" mainTitle="통신사" options={mCarrier} />
              <InputText
                className="rounded-lg"
                type="basic"
                id="phoneNumber"
                inputType="phone"
                title="본인명의의 휴대전화번호를 입력해주세요."
                placeholder="-없이 휴대폰 번호 입력"
              />
            </div>
          </div>

          {/* TODO: CheckBox Context 만들어서 상태관리하기 */}
          <div className="terms_agree_box px-5">
            <div className="agree_form_box">
              <h3 className="tit pb-[17px] text-[18px] font-medium leading-[28px]">
                {" "}
                휴대전화 인증 약관{" "}
              </h3>
              <div className="flex flex-col gap-y-4 ">
                <div className="flex relative align-top pb-4 border-b">
                  <Checkbox
                    className="text-sm"
                    id="all_checker"
                    name="모든 약관에 동의합니다."
                  />
                </div>
                <ul className="flex flex-col gap-y-2">
                  <li className="relative pr-[22px]">
                    <Checkbox
                      className="text-[13px]"
                      id="01"
                      name="[필수] 휴대전화 인증 서비스 이용약관"
                    />
                    <ModalButton />
                  </li>
                  <li className="relative pr-[22px]">
                    <Checkbox
                      className="text-[13px]"
                      id="02"
                      name="[필수] 고유식별정보 처리 동의"
                    />
                    <ModalButton />
                  </li>
                  <li className="relative pr-[22px]">
                    <Checkbox
                      className="text-[13px]"
                      id="03"
                      name="[필수] 통신사 이용약관 동의"
                    />
                    <ModalButton />
                  </li>
                  <li className="relative pr-[22px]">
                    <Checkbox
                      className="text-[13px]"
                      id="04"
                      name="[필수] 개인정보 수집/이용동의"
                    />
                    <ModalButton />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-5 pt-10">
            {/* submit */}
            <Button
              className="h-12"
              backgroundColor="primary"
              onClick={handleSubmit}
            >
              인증번호 요청
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCert;

const ModalButton = ({ onClick }: { onClick?: () => {} }) => {
  return (
    <button
      className="absolute right-0 top-0 w-[24px] h-[22px]"
      onClick={onClick}
    >
      <span className="block w-[24px] h-[100%] text-[0] indent-[-9999em] relative bg-[url('/images/arrow_down.png')] bg-[position:right_8px_bottom] bg-no-repeat bg-[9px_auto] opacity-[.5] rotate-[-90deg] box-border">
        내용보기
      </span>
    </button>
  );
};
