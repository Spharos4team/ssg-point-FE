import { pathValidate } from "@/utils/PathValidator";

export default function MyInfo({ params }: { params: { slug: string } }) {
  const PAGES: { [key: string]: string } = {
    infoRcvAgree: "광고정보 수신관리",
    serviceAgree: "서비스 동의 관리",
    cert: "회원정보 수정",
    changePwd: "비밀번호 변경",
    leavePassword: "회원 탈퇴",
  };

  return <>{pathValidate(PAGES, params)}</>;
}
