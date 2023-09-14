<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import { FormProvider } from "@/components/hooks/FormProvider";
import LoginForm from "@/components/organisms/LoginForm";

//TODO: 자동 로그인, 아이디 저장 기능 구현: 쿠키 활용할 것
export default function Login() {
=======
import { options } from "@/app/api/auth/[...nextauth]/options";
import FormLogin from "@/components/organisam/FormLogin";
import NavLogo from "@/components/NavLogo";
import { getServerSession } from "next-auth";
import Link from "next/link";
import OAuthLogin from "@/components/organisam/OAuthLogin";

export default async function Login() {
  const session = await getServerSession(options);
  console.log(session);

>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
  const list_between =
    "after:content-[''] after:inline-block after:w-[1px] after:h-[13px] after:bg-[#ebebeb] ]after:mt-[5px] after:mx-[16px]";
  return (
    <>
<<<<<<< HEAD
      <div className="login_box p-[40px]">
        <div className="relative mx-auto mb-[40px] w-[89px] h-[56px]">
          <Image
            src="/images/logo.0b330974.gif"
            alt="SHINSEGAE POINT"
            fill={true}
          />
        </div>

        {/* --- Start Form --- */}
        <FormProvider>
          <LoginForm />
        </FormProvider>
        {/* --- End Form --- */}

        <ul className="text-center text-sm">
          <Link
            className={`inline-block ${list_between}`}
            href={"/member/findIdPw"}
          >
            아이디 찾기
          </Link>
          <Link
            className={`inline-block ${list_between}`}
            href={"/member/findPw"}
          >
            비밀번호 찾기
          </Link>
          <Link className="inline-block" href={"/member/join"}>
=======
      <div className="p-[40px]">
        <NavLogo />

        {/* Login Form */}
        <FormLogin />

        <ul className="text-center text-sm divide-x-2">
          <Link className={`inline-block px-2`} href={"/member/findIdPw"}>
            아이디 찾기
          </Link>
          <Link className={`inline-block px-2`} href={"/member/findPw"}>
            비밀번호 찾기
          </Link>
          <Link className="inline-block px-2" href={"/member/join"}>
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
            회원가입
          </Link>
        </ul>
      </div>

      {/* Social Login */}
<<<<<<< HEAD
      <div className="px-10 pt-10 pb-20 bg-[#f9f9f9]">
        <h3 className="text-sm leading-6 font-medium mb-6">간편 로그인</h3>
        <ul className="sns_list flex justify-between items-center mt-5">
          <li className="inline-block">
            <Link
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-56px]"
              href={"https://www.naver.com"}
            />
          </li>
          <li className="inline-block">
            <Link
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-113px]"
              href={"https://www.naver.com"}
            />
          </li>
          <li className="inline-block">
            <Link
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-169px]"
              href={"https://www.naver.com"}
            />
          </li>
        </ul>
      </div>
=======
      <OAuthLogin />
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
    </>
  );
}
