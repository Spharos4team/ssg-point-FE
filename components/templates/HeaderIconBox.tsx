"use client";

import { ReactElement } from "react";
import NavLogo from "../ui/NavLogo";

type Location = {
  pathname: string;
};

const HeaderIconBox = ({ pathname }: Location) => {
  const home = "/";

  //TODO: 일단 가장 쉬운 방법으로 pathname에 따라 페이지 이름 정의
  const TITLES: { [key: string]: string } = {
    "/login": "로그인",

    "/couponPage": "쿠폰",
    "/ingEvents": "이벤트 - 진행 이벤트",
    "/endEvents": "이벤트 - 종료 이벤트",
    "/winEvents": "이벤트 - 당첨 확인",
    "/membership": "멤버십 서비스",

    "/myPoint": "마이 포인트",
    "/myPage": "마이 페이지",
    "/myInfo": "마이 회원정보",
    "/withdrawal": "마이 회원정보",

    "/benefits": "마이 혜택",

    "/cscenter": "고객센터",
  };

  // 컴포넌트 모음
  const NavIconComp: { [key: string]: () => ReactElement } = {
    "/": () => <NavLogo />,
    default: () => (
      <>
        <button
          className={
            "absolute indent-[-999em] w-[48px] h-[56px] left-0 top-0 bg-[url('/images/icon_back.png')] bg-[length:8px_auto] bg-center bg-no-repeat"
          }
          onClick={() => window.history.back()}
        >
          뒤로가기
        </button>
        <h2 className="text-[16px] leading-[28px] font-medium text-center">
          {getTitle()}
        </h2>
      </>
    ),
  };

  //path 결정(view)
  const getTitle = () => {
    for (const key in TITLES) {
      if (pathname.startsWith(key)) {
        return TITLES[key];
      }
    }
    return "/(정의되지 않은 페이지)";
  };

  //컴포넌트 결정
  const getComponent = () => {
    return NavIconComp[pathname]
      ? NavIconComp[pathname]()
      : NavIconComp.default();
  };

  return <>{getComponent()}</>;
};

export default HeaderIconBox;
