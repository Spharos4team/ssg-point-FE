"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const navLinks: Array<{ key: number; _href: string; name: string }> = [
  {
    key: 1,
    _href: "/couponPage",
    name: "쿠폰",
  },
  {
    key: 2,
    _href: "/",
    name: "홈",
  },
];

//TODO: 현재 페이지 확인하고 현재 페이지 위에 마크
export default function BodyNavTop() {
  const pathname = usePathname();

  //TODO: atom으로 분리
  const active =
    "before:content-[''] before:absolute before:top-[-2px] before:left-1/2 before:translate-x-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full";

  return (
    <div className="fixed top-[56px] left-0 bg-white h-[36px] w-full z-[102]">
      <ul className="flex justify-center pt-1 space-x-8">
        {navLinks.map(({ key, _href, name }) => (
          <li key={key}>
            <Link
              className={`relative text-base leading-7 ${
                _href == pathname ? active : ""
              }`}
              href={_href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
