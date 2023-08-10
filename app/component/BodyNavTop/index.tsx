import Link from "next/link";

const navLinks: Array<{ key: number; _href: string; name: string }> = [
  {
    key: 1,
    _href: "/",
    name: "홈",
  },
  {
    key: 2,
    _href: "/couponPage",
    name: "쿠폰",
  },
];

//TODO: 현재 페이지 확인하고 현재 페이지 위에 마크
export default function BodyNavTop() {
  return (
    <div className="fixed top-[56px] left-0 bg-white h-[36px] w-full z-[102]">
      <ul className="flex justify-center pt-1 space-x-8">
        {navLinks.map(({ key, _href, name }) => (
          <li key={key}>
            <Link href={_href}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
