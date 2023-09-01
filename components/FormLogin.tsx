"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { signIn } from "next-auth/react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { useSearchParams } from "next/navigation";

import { KEY } from "@/utils/KeyHelper";

export default function FormLogin() {
  const query = useSearchParams();
  const callBackUrl = query.get("callbackUrl");

  const { appValueList } = useAppContext();

  const handleSignIn = async () => {
    console.log(appValueList);
    // PreValidation
    if (!appValueList[KEY.USERID]) {
      alert("로그인 아이디는 필수 입니다.");
      return null;
    }
    if (!appValueList[KEY.USERPASSWORD]) {
      alert("비밀번호는 필수 입니다.");
      return null;
    }

    // PostValidation
    localStorage.setItem(KEY.USERID, appValueList[KEY.USERID] as string);
    localStorage.setItem(KEY.STOREID, appValueList[KEY.STOREID] as string);

    // Login Success
    const result = await signIn("credentials", {
      email: appValueList[KEY.USERID],
      password: appValueList[KEY.USERPASSWORD],
      redirect: true,
      callbackUrl: callBackUrl ? callBackUrl : "/",
    });
  };

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <Input id={KEY.USERID} type="email">
          아이디
        </Input>
        <Input id={KEY.USERPASSWORD} type="password">
          비밀번호
        </Input>
      </div>

      <div>
        <div className="flex justify-start items-center mt-4 ml-2.5">
          <Checkbox
            className="w-1/2 !text-[14px]"
            id={KEY.STOREID}
            name="아이디 저장"
          />
          <Checkbox
            className="w-1/2 !text-[14px]"
            id={KEY.AUTOLOGIN}
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