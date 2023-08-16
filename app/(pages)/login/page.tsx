import { InputText } from "@/app/components/ui/InputText";
import LinkImageWithFallback from "@/app/components/ui/LinkImageWithFallback";
import PrimaryButton from "@/app/components/ui/PrimaryButton";
import Image from "next/image";

//TODO: 자동 로그인, 아이디 저장 기능 구현: 쿠키 활용할 것
export default function login() {
  const list_between =
    "after:content-[''] after:w-[1px] after:h-[13px] after:bg-gray-500 after:mt-[5px] after:mx-[16px]";
  return (
    <>
      <div className="login_box p-[40px]">
        <div className="relative mx-auto mb-[40px] w-[89px] h-[56px]">
          <Image
            src="/images/logo.0b330974.gif"
            alt="SHINSEGAE POINT"
            fill={true}
          />
        </div>
        <div className="login_input_area space-y-5">
          {/* FIXME: input 마다 다른 로직이 수행되어야 한다면 어떻게 할래? */}
          <InputText
            type="email"
            title="로그인을 위해 아이디를 입력해주세요."
            placeholder="아이디"
          />
          <InputText
            type="password"
            title="로그인을 위해 비밀번호를 입력해주세요."
            placeholder="비밀번호"
          />
        </div>

        <div className="my-10">
          {/* TODO: 컴포넌트 분리: innerText, onClick, border-radius */}
          <button className="text-lg leading-7 font-bold text-center align-middle w-full px-2 py-3 rounded-full bg-gradient-primary">
            로그인
          </button>
          {/* <PrimaryButton
            btn_name="로그인"
            on_click={
              console.log("test");
            }
          /> */}
        </div>

        <ul className="text-center">
          <li className={`inline-block ${list_between}`}>
            <a className="inline-block text-sm" href="">
              아이디 찾기
            </a>
          </li>
          <li className={`inline-block ${list_between}`}>
            <a className="inline-block text-sm" href="">
              비밀번호 찾기
            </a>
          </li>
          <li className="inline-block">
            <a className="inline-block text-sm" href="">
              회원가입
            </a>
          </li>
        </ul>
      </div>

      <div className="sns_list_box p-10 pb-20">
        {/* <LinkImageWithFallback _href="" image={} name="네이버" fontHidden /> */}
      </div>
    </>
  );
}
