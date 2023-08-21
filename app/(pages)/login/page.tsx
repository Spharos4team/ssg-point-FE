'use client'
import { InputText } from "@/components/atoms/InputText";
import Image from "next/image";
import React, { useState } from 'react';
import RoundedButton from "@/components/atoms/Button/RoundedButton";


//TODO: 자동 로그인, 아이디 저장 기능 구현: 쿠키 활용할 것
export default function Login() {

  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
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

        <div > 
          <div
            className="login_check_box flex justify-start items-center mt-4 ml-2.5 "
          >
            <form className="remember_box flex items-center w-[50%]">
              <input className={isChecked1 ? "bg-[url('/images/check_icon.png')] bg-[97%_auto] bg-no-repeat w-[22px] h-[22px] rounded-full border-2 border-gray-500 appearance-none bg-black" : "w-[22px] h-[22px] rounded-full border-2 border-gray-500 appearance-none"}
              type="checkbox"
              id="rememberId"
              onChange={()=>setIsChecked1(!isChecked1)}

              />
              <label className="before:bg-[url('/images/check_icon.png')]" htmlFor="rememberId" >아이디 저장</label>
            </form>
            <form className="autoLogin_box flex items-center w-[50%]">
              <input
                type="checkbox"
                id="autoLogin"
                onChange={()=>setIsChecked2(!isChecked2)}
                className={isChecked2 ? "bg-[url('/images/check_icon.png')] bg-[97%_auto] bg-no-repeat w-[22px] h-[22px] rounded-full border-2 border-gray-500 appearance-none bg-black" : "w-[22px] h-[22px] rounded-full border-2 border-gray-500 appearance-none"}
              />
              <label htmlFor="autoLogin" style={{ paddingLeft: '5px'}}>자동 로그인</label>
          
            </form>
            </div>
        </div>

        <div className="my-10">
          <RoundedButton className="" backgroundColor="primary">로그인</RoundedButton>
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

      <div className="sns_list_box p-10">
        <h3>
          간편 로그인
        </h3>
        <ul
        className="sns_list flex justify-between items-center mt-5">
          <li
          className="naver relative w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-56px]"
          >
          </li>
          <li
          className="kakao relative w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-[98%_auto] bg-no-repeat bg-[left_0px_top_-113px]"
          ></li>
          <li
          className="apple relative w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-169px]"
          ></li>
        </ul>
      </div>

    </>
  );
}
