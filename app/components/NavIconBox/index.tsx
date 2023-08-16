"use client";

import React, { ReactElement } from "react";
import NavLogo from "../ui/NavLogo";
import Image from "next/image";
type Location = {
  pathname: string;
};

const NavIconBox = ({ pathname }: Location) => {
  const home = "/";

  const TITLES: { [key: string]: string } = {
    "/login": "로그인",
    "/couponPage": "쿠폰",
    "/membership": "멤버십 서비스",
  };

  // 컴포넌트 모음
  const NavIconComp: { [key: string]: () => ReactElement } = {
    "/": () => <NavLogo />,
    default: () => (
      <>
        <button
          className="absolute indent-[-999em] w-[48px] h-[56px] left-0 top-0 bg-[url('/images/icon_back.png')] bg-[length:8px_auto] bg-center bg-no-repeat"
          onClick={() => window.history.back()}
        >
          뒤로가기
        </button>
        <h2>{getTitle()}</h2>
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

export default NavIconBox;
