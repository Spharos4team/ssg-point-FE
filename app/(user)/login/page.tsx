import { options } from "@/app/api/auth/[...nextauth]/options";
import FormLogin from "@/components/FormLogin";
import NavLogo from "@/components/NavLogo";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Login() {
  const session = await getServerSession(options);
  console.log(session);

  const list_between =
    "after:content-[''] after:inline-block after:w-[1px] after:h-[13px] after:bg-[#ebebeb] ]after:mt-[5px] after:mx-[16px]";
  return (
    <>
      <div className="p-[40px]">
        <NavLogo />

        {/* Login Form */}
        <FormLogin />

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
            회원가입
          </Link>
        </ul>
      </div>

      {/* Social Login */}
      <div className="px-10 pt-10 pb-20 bg-[#f9f9f9]">
        <h3 className="text-sm leading-6 font-medium mb-6">간편 로그인</h3>
        <ul className="sns_list flex justify-between items-center mt-5">
          <li className="inline-block">
            <Link
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-56px]"
              href={"https://www.naver.com"}
            />
          </li>
          <li className="inline-block">
            <Link
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-113px]"
              href={"https://www.naver.com"}
            />
          </li>
          <li className="inline-block">
            <Link
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-169px]"
              href={"https://www.naver.com"}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
