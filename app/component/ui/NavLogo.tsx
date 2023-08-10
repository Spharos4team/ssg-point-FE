//"use client" #화면 사이즈에 따라 로고 사이즈 변경이 필요하면 CSR
import Image from "next/image";

export default function NavLogo() {
  return (
    <Image
      className="indent-[-999em] ml-[-28px]"
      //TODO: ImageStorge 설정 후 src 변경하거나 또는 최적화 위한 다른 Logo Component 생성
      src="/images/logo_header.840b502c.gif"
      width={57}
      height={36}
      sizes="(max-width: 57px;)"
      alt="SHINSEGAE POINT"
    />
  );
}
