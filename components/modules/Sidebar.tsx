import Link from "next/link";
import { useEffect, useRef } from "react";
import { useValueContext } from "../hooks/ValueProvider";
import MenuListForSidebar from "./MenuListForSidebar";
import Pages from "@/datas/page.data.json";
import Button from "../atoms/Button/Button";
import { usePathname } from "next/navigation";
import { userApi } from "@/utils/api";

// const { getUserData } = userApi;
const Sidebar = () => {
  // TODO: handleValue Naming 변경, 컨텍스트 내 useState 추가(범위 내 Ref 관리)
  const { value, valueList, handleValue, handleValueList } = useValueContext();
  const hiddenRef = useRef("");
  const currPathname = usePathname();

  useEffect(() => {
    if (!valueList["email"]) {
      const LC_Id = localStorage.getItem("email");
      handleValueList("email", LC_Id as string);
    }
    console.log(localStorage.getItem("token")); // token 확인
  }, [value]);

  const handleHidden = () => {
    handleValue(!value);
    value &&
      setTimeout(() => {
        hiddenRef.current.className += " hidden";
        document.body.style.overflow = "auto";
      }, 300);
  };

  useEffect(() => {
    console.log("URL이 변경되었습니다:", currPathname);
    handleValue(false);
    value &&
      setTimeout(() => {
        hiddenRef.current.className += " hidden";
        document.body.style.overflow = "auto";
      }, 300);
  }, [currPathname]);

  const getUserData = async () => {
    try {
      const res = await fetch(
        `http://localhost:3030/users/${localStorage.getItem("userId")}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      // if (data.status === 200) {
      if (data) {
        handleValueList("name", data.user.name);
        localStorage.setItem("token", data.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const underline =
    "after:content-[''] after:inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[12px] after:bg-[#ffdfb5] after:z-[-1]";

  return (
    <nav className={`fixed left-0 top-0`}>
      <div
        className={`fixed block top-0 w-[85%] min-w-[320px] h-full z-[999] bg-white overflow-y-auto ease-in-out duration-300 ${
          value ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="block h-[60px] pt-[16px] pl-[20px] box-border">
          {/* <NavLogo /> */}
          <Link
            className="inline-block w-[57px] h-[36px] bg-[url('/images/logo_header.840b502c.gif')] bg-[100%_auto] bg-no-repeat"
            href={"/"}
            onClick={handleHidden}
          />
        </div>
        {/* TODO: 로그인 여부 확인 */}
        <div className="relative">
          <div className="px-5 pt-[18px] pb-6">
            <div className="flex items-center justify-between">
              <p className="text-[18px] leading-[26px]">
                <strong
                  className={`relative inline-block font-medium pl-1 pr-[1px] ${underline}`}
                >
                  조영일
                </strong>
                님 반갑습니다.
              </p>
            </div>
            <p className="flex items-center mt-[16px] text-xl font-bold after:content-[''] after:inline-block after:ml-[7px] after:w-[27px] after:h-[24px] after:bg-[url('/images/point_gradi.png')] after:bg-no-repeat after:bg-[100%_auto]">
              12
            </p>
            {/* 사용자 버튼 박스 */}
            <div className="flex gap-2 mt-[25px]">
              <Button className="h-9" backgroundColor="white">
                로그아웃
              </Button>
              <Button className="h-9" backgroundColor="black">
                <Link href={"/myPage"}>마이페이지</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 즐겨착기 메뉴: 숨김 */}
        <div className="relative bg-[#fff9ea] box-border pt-[26px] pb-[24px]">
          <div className="hidden justify-between px-5">
            {Pages && Pages.map((i) => i.name)}
          </div>

          {/* 즐겨찾기 메뉴 */}
          <p className="relative h-20 w-[calc(100%-48px)] mx-6 pl-[58px] pt-[18px] border border-dashed border-[#f8b404] box-border">
            <button className="absolute left-[10px] top-1/2 -translate-y-1/2 indent-[-999em] w-10 h-10 border border-[#f8b404] rounded-full bg-[url('/images/icon_favorite.png')] bg-center bg-no-repeat bg-[24px_auto]">
              즐겨찾기 메뉴 선택
            </button>
            <span className="text-[12px] leading-[20px] tracking-[-.5px]">
              <button
                className={`relative pr-1 pl-[1px] font-bold tracking-[-.5px] z-[1] ${underline}`}
              >
                즐겨찾기 메뉴 선택
              </button>
              에서
              <br />
              나만의 즐겨찾기 메뉴를 설정할 수 있어요!
            </span>
          </p>
        </div>

        {/* 메뉴리스트 */}
        <MenuListForSidebar />

        {/* terms */}
        <ul className="space-x-5 mt-[20px] mb-[80px] ml-5">
          <li className="inline-block">
            <Link
              className="block text-[13px] leading-[13px] text-[#767676] py-[5px]"
              href={""}
            >
              서비스 이용약관
            </Link>
          </li>
          <li className="inline-block">
            <Link
              className="block text-[13px] leading-[13px] text-[#eb0000] py-[5px]"
              href={""}
            >
              개인정보 처리방침
            </Link>
          </li>
        </ul>

        {/* Close Button */}
        <button
          className="absolute top-0 right-0 w-[60px] h-[60px] bg-[url('/images/icon_close.png')] bg-[14px_auto] bg-center bg-no-repeat"
          onClick={handleHidden}
        />
      </div>

      {/* Background */}
      <div
        className={`fixed w-full h-full min-w-[320px] bg-black transition-all ease-linear duration-300 ${
          value ? "bg-opacity-50 duration-300" : "bg-opacity-0 hidden"
        }`}
        onClick={handleHidden}
        ref={hiddenRef}
      ></div>
    </nav>
  );
};
export default Sidebar;
