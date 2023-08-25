"use client";

import { ImageLinkProp } from "@/types/LinkProps";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabBarLinks: Array<ImageLinkProp> = [
  {
    _id: 1,
    _href: "/myInfo/infoRcvAgree",
    image: {
      _src: "/images/my-page.png",
      type: "icon",
      size: { w: 24, h: 24 },
    },
    name: "마이 회원정보",
  },
  {
    _id: 2,
    _href: "/myPoint/pntHistory",
    image: {
      _src: "/images/my-point.png",
      type: "icon",
      size: { w: 24, h: 24 },
    },
    name: "마이 포인트",
  },
  {
    _id: 3,
    _href: "/",
    image: {
      _src: "/images/home.png",
      type: "icon",
      size: { w: 24, h: 24 },
    },
    name: "홈",
  },
  {
    _id: 4,
    _href: "/benefits/pntTip",
    image: {
      _src: "/images/point_tip.png",
      type: "icon",
      size: { w: 24, h: 24 },
    },
    name: "포인트 꿀팁",
  },
  {
    _id: 5,
    _href: "/membership/combine",
    image: {
      _src: "/images/universe-club.png",
      type: "icon",
      size: { w: 24, h: 24 },
    },
    name: "유니버스 클럽",
  },
];

const TabBarBottomGlobal = () => {
  const pathname = usePathname();

  const active =
    "before:absolute before:top-[-2px] before:left-1/2 before:translate-x-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full";

  //TODO: return문과 구분하면 tailwind 클래스를 동적으로 적용할 수 있을 줄 알았다. 어림도 없다..
  const tabBarItems = (
    <ul className="flex">
      {TabBarLinks.map(({ _id, _href, image, name }) => (
        <li key={_id} className="relative w-[20%]">
          <Link
            className={`block w-full h-[60px] text-[9px] text-black text-center leading-[13px] box-border pt-[11px] before:content-[''] before:block before:mx-auto before:mb-[4px] ${
              active == pathname ? active : ""
            }`}
            href={_href}
          >
            <div
              className={`relative w-[24px] h-[24px] mx-auto mb-[4px] overflow-hidden`}
            >
              <Image
                className={`absolute ${
                  pathname == _href ? "top-0" : "bottom-0"
                }`} //pathname과 비교 후 활성화 시 top-0
                src={image._src}
                width={48}
                height={96}
                alt={name}
              />
            </div>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="tab_bar fixed left-0 bottom-0 bg-white w-full h-[75px] z-[99] border-t-[1px]">
      {tabBarItems}
    </div>
  );
};

export default TabBarBottomGlobal;
