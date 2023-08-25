import Image from "next/image";
import Link from "next/link";
import { useValueContext } from "./ValueContext";

const HeaderStatusBox = () => {
  const { selectedValue, handleValue } = useValueContext();

  const handleShow = () => {
    handleValue();
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <Link
        className="flex items-center text-[14px] leading-[21px] whitespace-nowrap"
        href={"/login"}
      >
        로그인
      </Link>

      {/* LinkImageWithFallback 사용하지 않음(toggle 필요) */}
      <button
        className="absolute right-[2px] top-[2px] w-[56px] h-[52px]"
        onClick={handleShow}
      >
        <Image
          className="absolute left-[35%] top-[35%] mt-[-1px]"
          src="/images/align-justify.png"
          height={20}
          width={20}
          alt="전체메뉴"
          quality={100}
          sizes="(max-width: 22px)"
        />
      </button>
    </>
  );
};

export default HeaderStatusBox;
