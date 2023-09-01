"use client";
import { useEffect } from "react";
import Button from "../atoms/Button/Button";
import { Checkbox } from "../atoms/Checkbox";
import { InputText } from "../atoms/InputText";
import { useFormContext } from "../hooks/FormProvider";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const KEY_ID = "email";
  const KEY_PASSWORD = "password";
  const KEY_STORE_ID = "storeId";
  const KEY_TOKEN = "token";

  const { valueList } = useFormContext();
  const router = useRouter();

  const doLogin = async () => {
    let regObj = {
      email: valueList[KEY_ID],
      password: valueList[KEY_PASSWORD],
    };
    try {
      const res = await fetch("http://localhost:3030/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regObj),
      });
      const data = await res.json();
      // if (data.status === 200) {
      if (data) {
        console.log(data);
        saveInStorage();
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem(KEY_TOKEN, data.accessToken);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validate = () => {
    let result = true;
    if (!valueList[KEY_ID]) {
      alert("로그인 아이디는 필수입니다.");
      result = false;
    } else if (!valueList[KEY_PASSWORD]) {
      alert("로그인 비밀번호는 필수입니다.");
      result = false;
    }
    return result;
  };

  const saveInStorage = () => {
    if (valueList[KEY_STORE_ID]) {
      // true 시 저장
      localStorage.setItem(KEY_ID, valueList[KEY_ID] as string);
      localStorage.setItem(KEY_STORE_ID, "true");
    } else if (!valueList[KEY_STORE_ID]) {
      // false 시  초기화
      localStorage.setItem(KEY_ID, "");
      localStorage.setItem(KEY_STORE_ID, "");
    }
  };

  const handleSubmit = () => {
    console.log("onSubmit", valueList);
    if (validate()) {
      doLogin();
    }
  };

  return (
    <>
      <div className="login_input_area space-y-5">
        {/* FIXME: input 마다 다른 로직이 수행되어야 한다면 어떻게 할래? */}
        <InputText
          type="form"
          id={KEY_ID}
          inputType="email"
          title="로그인을 위해 아이디를 입력해주세요."
          placeholder="아이디"
        />
        {/* when press enter key, press login button, onClick={handleSubmit} is called.*/}
        <InputText
          type="form"
          id={KEY_PASSWORD}
          inputType="password"
          title="로그인을 위해 비밀번호를 입력해주세요."
          placeholder="비밀번호"

        />
      </div>

      {/* Checkbox */}
      <div>
        <div className="flex justify-start items-center mt-4 ml-2.5 ">
          <Checkbox
            className="w-1/2 !text-[14px]"
            type="form"
            id={KEY_STORE_ID}
            name="아이디저장"
          />
          <Checkbox
            className="w-1/2 !text-[14px]"
            type="form"
            id="autoComplete"
            name="자동로그인"
          />
        </div>
      </div>
      <div className="my-10 space-y-2">
        <Button
          className="h-[56px] !rounded-full"
          backgroundColor="primary"
          onClick={handleSubmit}
        >
          로그인
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
