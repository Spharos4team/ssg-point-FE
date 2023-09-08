import Link from 'next/link';
import Image from 'next/image';

export default function ClubList({
  type,
  title,
  subtext,
  src,
  alt,
  link,
  bgtxtcolor,
}: {
  type: 'list' | 'detail' | 'myclub';
  title: string;
  subtext?: string;
  src: string;
  alt?: string;
  link: string;
  bgtxtcolor?: 'bluegreen' | 'brown' | 'pink' | 'purple' | undefined;
}) {
  const backgroundtextColor = () => {
    switch (bgtxtcolor) {
      case 'bluegreen':
        return { bgcolor: 'bg-[#e6f3f3]', txtcolor: 'text-[#00635e]' };
      case 'brown':
        return { bgcolor: 'bg-[#f6f1e7]', txtcolor: 'text-[#623f00]' };
      case 'pink':
        return { bgcolor: 'bg-[#fde6ef]', txtcolor: 'text-[#d9044b]' };
      case 'purple':
        return { bgcolor: 'bg-[#efe8f3]', txtcolor: 'text-[#5c1880]' };
      default:
        return { bgcolor: '', txtcolor: '' };
    }
  };
  const bgColor = backgroundtextColor().bgcolor;
  const txtColor = backgroundtextColor().txtcolor;
  switch (type) {
    case 'list': {
      return (
        <li className="mb-2">
          <Link
            className={`${bgColor} pt-5 table w-full box-border px-[30px] py-6 min-h-[141px]`}
            href={link}
          >
            <span className={`${txtColor} align-top pt-1 table-cell w-auto p-0`}>
              <span className="text-base leading-[26px] block font-medium pb-1">{title}</span>
              <span
                className="text-[13px] leading-[21px] block break-keep"
                dangerouslySetInnerHTML={{ __html: subtext }}
              />
            </span>
            <span className="table-cell w-[90px] align-middle">
              <Image src={src} width={180} height={180} alt={alt} />
            </span>
          </Link>
        </li>
      );
    }
    case 'detail': {
      return (
        <div className={`${bgColor} relative py-8 pr-[130px] pl-[30px] box-border min-h-[174px]`}>
          <h2 className={`${txtColor} text-xl font-bold leading-[30px]`}>{title}</h2>
          <p
            className={`${txtColor} text-[14px] leading-6 pt-2 break-keep`}
            dangerouslySetInnerHTML={{ __html: subtext }}
          ></p>
          <Image
            className="absolute right-[20px] top-1/2 w-[110px] -translate-y-1/2"
            src={src}
            width={180}
            height={180}
            alt={alt}
          />
        </div>
      );
    }
    case 'myclub': {
      return (
        <li className="mr-4 max-w-[calc(25%-16px)] inline-block align-top">
          <Link className="block decoration-0" href={link}>
            <Image
              className="block w-[70px] mx-auto my-0 border-0"
              src={src}
              width={180}
              height={180}
              alt={alt}
            />
            <span className="block pt-2 text-xs leading-5 text-center">{title}</span>
          </Link>
        </li>
      );
    }
  }
}
