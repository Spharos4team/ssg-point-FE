import Link from "next/link";
import { Icon } from "../ui/Icon";
import { IconLinkProps } from "../../../types/LinkProps";
import Image from "next/image";

const navLinks: Array<IconLinkProps> = [
  {
    _key: 1,
    _href: "/",
    _icon: {
      _src: "/images/my-page.png",
      iconName: "",
    },
    name: "마이 회원정보",
  },
  {
    _key: 2,
    _href: "/",
    _icon: {
      _src: "/images/my-point.png",
      iconName: "",
    },
    name: "마이 포인트",
  },
  {
    _key: 3,
    _href: "/",
    _icon: {
      _src: "/images/home.png",
      iconName: "",
    },
    name: "홈",
  },
  {
    _key: 4,
    _href: "/",
    _icon: {
      _src: "/images/point_tip.png",
      iconName: "",
    },
    name: "포인트 꿀팁",
  },
  {
    _key: 5,
    _href: "/membership/combine",
    _icon: {
      _src: "/images/universe-club.png",
      iconName: "",
    },
    name: "유니버스 클럽",
  },
];

export default function FooterNav() {
  return (
    <div className="fixed left-0 bottom-0 w-full h-[75px] z-[102] bg-white border-t-[1px]">
      <ul className="tab_list flex justify-center py-3">
        {navLinks.map(({ _key, _href, _icon, name }) => (
          <li className="relative box-content w-[20%] pb-2" key={_key}>
            <Link
              className="block text-center text-[9px] text-black leading-[13px]"
              href={_href}
            >
              <div className="block box-border w-[24px] h-[24px] overflow-hidden">
                <Image
                  className="mx-auto mb-1"
                  width={24}
                  height={24}
                  src={_icon._src}
                  alt={_icon.iconName}
                />
              </div>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
