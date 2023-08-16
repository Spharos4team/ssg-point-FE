import { InputText } from "@/app/component/ui/InputText";
import Image from "next/image";

export default function login() {
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
        <div className="login_input_area">
          {/* TODO: input 마다 다른 로직이 수행되어야 한다면 어떻게 할래? */}
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
      </div>

      <div className="sns_list_box"></div>
    </>
  );
}
