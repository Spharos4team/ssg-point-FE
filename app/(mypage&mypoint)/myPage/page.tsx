import LinkImageWithFallback from '@/components/ui/LinkImageWithFallback';
import { PageProp } from '@/types/LinkProps';
import Barcode from '@/utils/Barcode/Barcode';
import Image from 'next/image';
import Link from 'next/link';

const iconSize = 40;
const btnsInPointBox: PageProp[] = [
  {
    _id: 1,
    _href: '/mypoint/pntGiftMain',
    name: '선물하기',
    image: {
      _src: '/images/gift.png',
      type: 'icon',
      size: { w: iconSize, h: iconSize },
    },
  },
  {
    _id: 2,
    _href: '/mypoint/convertPntList',
    name: '전환하기',
    image: {
      _src: '/images/exchange.png',
      type: 'icon',
      size: { w: iconSize, h: iconSize },
    },
  },
  {
    _id: 3,
    _href: '/mypoint/savePoint',
    name: '영수증으로 적립',
    image: {
      _src: '/images/save_with_bill.png',
      type: 'icon',
      size: { w: iconSize, h: iconSize },
    },
  },
];
const myBanners: PageProp[] = [
  {
    _id: 1,
    name: '신세계면세점',
    _href: '',
    image: {
      type: 'image',
      _src: '/images/',
    },
  },
  {
    _id: 2,
    name: '신세계아울렛APP',
    _href: '',
    image: {
      type: 'image',
      _src: '/images/',
    },
  },
  {
    _id: 3,
    name: '시코르',
    _href: '',
    image: {
      type: 'image',
      _src: '/images/',
    },
  },
  {
    _id: 4,
    name: '이마트에브리데이',
    _href: '',
    image: {
      type: 'image',
      _src: '/images/',
    },
  },
  {
    _id: 5,
    name: '쓱고우',
    _href: '',
    image: {
      type: 'image',
      _src: '/images/',
    },
  },
  {
    _id: 6,
    name: '신세계까사',
    _href: '',
    image: {
      type: 'image',
      _src: '/images/',
    },
  },
];

const barcodeValue = '9350-1200-1875-5220';

export default function MyPage() {
  return (
    <>
      <div className="relative mt-[56px] mx-5 z-10">
        {/* 아래부터 PointBox */}
        <div className="pb-[2px] mx-auto box-border h-full max-w-[327px] bg-gradient-primary-line rounded-[20px] overflow-hidden shadow-md">
          <div className="flex items-center justify-between h-10 px-4">
            <h3 className="indent-[-999em] w-[105px] h-[18px] bg-[length:100%_auto] bg-[url('/images/point_card_logo.png')] bg-no-repeat overflow-hidden">
              shinsegae point
            </h3>
            <Link
              //TODO: pathname에 따라 아이콘 변경
              className="inline-block items-center text-sm p-[10px] pr-0 after:inline-block after:content-[''] after:w-[6px] after:h-[10px] after:bg-[url('/images/arrow_right.png')] after:bg-[length:100%_auto] after:ml-1"
              href={'/mypoint/pntHistory'}
            >
              <span className="hidden">포인트 내역으로</span>
            </Link>
          </div>

          <div className="relative bg-white rounded-[18px] w-[calc(100%-3px)] h-full box-border p-6 mx-auto">
            <strong className="flex items-center text-[32px] leading-6 font-bold after:content-[''] after:inline-block after:ml-[7px] after:w-[44px] after:h-[41px] after:bg-[url('/images/point_gradi.png')] after:bg-[length:100%_auto]">
              12
            </strong>
            <div className="flex mt-2 mb-8 space-x-5">
              <p className="flex text-[#767676] text-sm">
                내일 적립 예정
                <span className="ml-1 text-black font-bold">0P</span>
              </p>
              <p className="flex text-[#767676] text-sm">
                다음달 소멸 예정
                <span className="ml-1 text-black font-bold">0P</span>
              </p>
            </div>

            <div className="barcode">
              <Barcode value={barcodeValue} />
            </div>

            <div className="mt-6">
              <ul className="flex justify-between">
                {btnsInPointBox.map(({ _id, _href, name, image }) => (
                  <li key={_id} className="w-[85px]">
                    {/* TODO: href가 배열이라면 swiper로 */}
                    <Link
                      className="block w-full text-xs font-normal text-center whitespace-nowrap"
                      href={_href[0]}
                    >
                      <Image
                        className="mx-auto mb-2"
                        src={image!._src}
                        width={image?.size?.w}
                        height={image?.size?.h}
                        alt={name}
                      />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[108px] pb-[80px] px-5 mt-[-68px] bg-[#f0f0f0]">
        <strong className="block text-lg font-normal mb-5">
          <span className="relative inline-block font-medium align-top pl-[1px] z-[1]">
            \\사용자\\
          </span>
          님<br />
          통합ID로 더 다양한 멤버십을 만나보세요!
        </strong>

        <ul className="space-y-3">
          {myBanners.map(({ _id, _href, name, image }) => (
            <li key={_id}>
              <LinkImageWithFallback _href={_href[0]} name={name} image={image!!} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
