import Image from "next/image";
import Link from "next/link";

export default function HeaderUserBox() {
  return (
    <>
      <Link
        className="flex items-center text-[14px] leading-[21px] whitespace-nowrap"
        href={"/login"}
      >
        로그인
      </Link>
    </>
  );
}
