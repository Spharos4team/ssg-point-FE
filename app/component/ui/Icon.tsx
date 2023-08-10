import Image from "next/image";
import { IconLinkProps } from "../../../types/LinkProps";
import Link from "next/link";

export const Icon = ({ _href, _icon, name }: IconLinkProps) => {
  return (
    <>
      {_icon?._src &&
        _icon?.iconName && ( // 속성이 존재하고 값이 있는지 체크
          <div className="block text-[12px] text-center leading-[17px] w-full text=[#505050]">
            <Link href={_href}>
              <Image
                className="block mx-auto"
                src={_icon._src}
                width={45}
                height={45}
                alt={_icon.iconName}
              />
              {name}
            </Link>
          </div>
        )}
    </>
  );
};
