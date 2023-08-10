import Link from "next/link";
import { IconLinkProps } from "../../../types/LinkProps";
import { Icon } from "../ui/Icon";

const bodyNavProps: Array<IconLinkProps> = [
  {
    _key: 1,
    _href: "/ingevents",
    _icon: {
      _src: "/images/event.png",
      iconName: "event_icon",
    },
    name: "이벤트",
  },
  {
    _key: 1,
    _href: "/benefits/pntPlus/attend",
    _icon: {
      _src: "/images/attend-check.png",
      iconName: "attend_check",
    },
    name: "출석체크",
  },
  {
    _key: 1,
    _href: "/benefits/pntPlus/roulette",
    _icon: {
      _src: "/images/lucky-roulette.png",
      iconName: "lucky_roulette",
    },
    name: "럭키룰렛",
  },
  {
    _key: 1,
    _href: "/benefits/benefitMyLuck",
    _icon: {
      _src: "/images/my-luck.png",
      iconName: "my_luck",
    },
    name: "운세서비스",
  },
  {
    _key: 1,
    _href: "/myLounge/receipt",
    _icon: {
      _src: "/images/receipt.png",
      iconName: "receipt",
    },
    name: "영수증",
  },
];

export default function BodyNav() {
  return (
    <div className="mt-[-24px] mx-[20px] mb-[24px] h-[88px] bg-white relative z-10 drop-shadow-2xl rounded-lg">
      <ul className="flex justify-between items-center px-[19px] py-[10px]">
        {bodyNavProps.map(({ _key, _href, _icon, name }) => (
          <li key={_key}>
            <Icon _key={_key} _href={_href} _icon={_icon} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
