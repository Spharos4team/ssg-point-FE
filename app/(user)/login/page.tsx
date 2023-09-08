import Image from 'next/image';
import Link from 'next/link';
import { FormProvider } from '@/components/hooks/FormProvider';
import LoginForm from '@/components/organisms/LoginForm';

//TODO: 자동 로그인, 아이디 저장 기능 구현: 쿠키 활용할 것
export default function Login() {
  const list_between =
    "after:content-[''] after:inline-block after:w-[1px] after:h-[13px] after:bg-[#ebebeb] ]after:mt-[5px] after:mx-[16px]";
  return (
    <>
      <div className="login_box p-[40px]">
        <div className="relative mx-auto mb-[40px] w-[89px] h-[56px]">
          <Image src="/images/logo.0b330974.gif" alt="SHINSEGAE POINT" fill={true} />
        </div>

        {/* --- Start Form --- */}
        <FormProvider>
          <LoginForm />
        </FormProvider>
        {/* --- End Form --- */}

        <ul className="text-center text-sm">
          <Link className={`inline-block ${list_between}`} href={'/member/findIdPw'}>
            아이디 찾기
          </Link>
          <Link className={`inline-block ${list_between}`} href={'/member/findPw'}>
            비밀번호 찾기
          </Link>
          <Link className="inline-block" href={'/member/join'}>
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
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-56px]"
              href={'https://www.naver.com'}
            />
          </li>
          <li className="inline-block">
            <Link
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-113px]"
              href={'https://www.naver.com'}
            />
          </li>
          <li className="inline-block">
            <Link
              className="relative block w-12 h-12 bg-[url('/images/ico_sns.6ebacaac.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-169px]"
              href={'https://www.naver.com'}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
