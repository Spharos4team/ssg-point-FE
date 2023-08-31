"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { signIn } from "next-auth/react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/dist/server/api-utils";

const KEY_LOGIN_ID = "loginId";
const KEY_LOGIN_PASSWORD = "loginPass";
const KEY_STORE_ID = "storeID";
const KEY_AUTO_LOGIN = "autoLogin";

export default function FormLogin() {
  const query = useSearchParams();
  const callBackUrl = query.get("callbackUrl");

  const { appValueList } = useAppContext();

  const handleSignIn = async () => {
    console.log(appValueList);
    // PreValidation
    if (!appValueList[KEY_LOGIN_ID]) {
      alert("로그인 아이디는 필수 입니다.");
      return null;
    }
    if (!appValueList[KEY_LOGIN_PASSWORD]) {
      alert("비밀번호는 필수 입니다.");
      return null;
    }

    // PostValidation
    localStorage.setItem(KEY_LOGIN_ID, appValueList[KEY_LOGIN_ID] as string);
    localStorage.setItem(KEY_STORE_ID, appValueList[KEY_STORE_ID] as string);

    // Login Success
    const result = await signIn("credentials", {
      loginId: appValueList[KEY_LOGIN_ID],
      loginPass: appValueList[KEY_LOGIN_PASSWORD],
      redirect: true,
      callbackUrl: callBackUrl ? callBackUrl : "/",
    });
  };

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <Input id={KEY_LOGIN_ID} type="email">
          아이디
        </Input>
        <Input id={KEY_LOGIN_PASSWORD} type="password">
          비밀번호
        </Input>
      </div>

      <div>
        <div className="flex justify-start items-center mt-4 ml-2.5">
          <Checkbox
            className="w-1/2 !text-[14px]"
            id={KEY_STORE_ID}
            name="아이디 저장"
          />
          <Checkbox
            className="w-1/2 !text-[14px]"
            id={KEY_AUTO_LOGIN}
            name="자동로그인"
          />
        </div>
      </div>

      <Button
        className="my-10 h-14 text-lg !rounded-full"
        bgColor="primary"
        onClick={handleSignIn}
      >
        로그인
      </Button>
    </>
  );
}
