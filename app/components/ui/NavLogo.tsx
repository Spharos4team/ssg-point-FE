import Image from "next/image";
import Link from "next/link";

const logoHrefPath = "/";
const logoSrcPath = "/images/logo_header.840b502c.gif";
const logoName = "SHINSEAGAE POINT";

/**
 * @info NavLogo Logo 컴포넌트 안에서는 상태 변화 없음
 */
export default function NavLogo() {
  //페이지에 따라 변경될 여지가 있음.
  return (
    <Link className="relative w-[57px] h-[36px]" href={"/"}>
      <Image
        className="indent-[-999em] ml-[-28px]"
        //TODO: ImageStorge 설정 후 src 변경하거나 또는 최적화 위한 다른 Logo Component 생성
        // src="/images/logo_header.840b502c.gif"
        src={logoSrcPath}
        fill={true}
        // sizes="(max-width: 57px;)"
        alt={logoName}
      />
    </Link>
  );
}
