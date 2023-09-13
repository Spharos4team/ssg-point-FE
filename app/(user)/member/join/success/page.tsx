import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (localStorage.getItem("registerUserAccount")) {
      setUserInfo(JSON.parse(localStorage.getItem("registerUser") as string));
    }
  }, []);

  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">
          <span className="font-bold text-mypoint">가입완료</span>
        </ContentTitle>
        <Subtitle className="!pt-2 !text-sm">
          {`${userInfo?.userName}님,`}
          <br />
          {`${userInfo?.userId} ID로 신세계포인트 통합 회원가입이`}
          <br />
          완료되었습니다.
        </Subtitle>
      </ContentHeader>
    </>
  );
}
