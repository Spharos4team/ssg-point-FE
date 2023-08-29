import Image from "next/image";
import Link from "next/link";

const ListForConvert = ({
  id,
  name,
  value,
  title,
  src,
  aTag,
  miniLink,
}: {
  id: string;
  name: string;
  value?: string;
  title: string;
  src?: string;
  aTag?: string;
  miniLink?: { name: string; href: string };
}) => {
  return (
    <li className="relative border-b bg-white z-[1]">
      {aTag ? (
        <a
          className="relative block w-full h-[75px] z-[2]"
          href={aTag}
          target="_blank"
        >
          <SimpleListContent
            id={id}
            name={name}
            title={title}
            value={value as string}
            src={src as string}
          />
        </a>
      ) : (
        <SimpleListContent
          id={id}
          name={name}
          title={title}
          value={value as string}
          src={src as string}
        />
      )}
      {miniLink ? (
        <span className="absolute right-[30px] top-1/2 mt-[-7px] z-[2]">
          <Link
            href={miniLink.href}
            className="relative text-sm leading-[18px] text-[#767676] pr-[10px]
          after:content-[''] after:absolute after:h-[10px] after:w-[6px] after:top-1/2 after:right-0 after:mt-[-4.5px] after:bg-[url('/images/arrow_right_gray.png')] after:bg-no-repeat after:bg-[100%_auto]"
          >
            {miniLink.name}
          </Link>
        </span>
      ) : (
        <></>
      )}
    </li>
  );
};
export default ListForConvert;

const SimpleListContent = ({
  id,
  title,
  name,
  value,
  src,
}: {
  id: string;
  title: string;
  name: string;
  value: string;
  src: string;
}) => {
  return (
    <div className="block w-full h-[75px]">
      {src ? (
        <div className="table-cell align-middle h-[75px] w-[75px] px-[12px]">
          <Image
            className=""
            src={src}
            width={50}
            height={50}
            alt={title + "_icon"}
          />
        </div>
      ) : (
        <></>
      )}
      <span className="table-cell align-middle text-[16px] leading-[26px] text-left pb-[1px]">
        {title}
      </span>
    </div>
  );
};
