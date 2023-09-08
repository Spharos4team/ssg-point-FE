import TabBarTopCont from '@/components/templates/TabBarTopCont';
import { PageProp } from '@/types/LinkProps';

const pagesInMy: PageProp[] = [
  {
    _id: 1,
    _href: '/benefits/pntPlus/attend',
    name: '포인트 플러스',
  },
  {
    _id: 2,
    _href: '/benefits/benefitMyLuck',
    name: '나의 운세보기',
  },
  {
    _id: 3,
    _href: '/benefits/myCoupon',
    name: '마이 쿠폰함',
  },
  {
    _id: 4,
    _href: '/benefits/myEvent',
    name: '마이 이벤트',
  },
  {
    _id: 5,
    _href: '/benefits/pntTip',
    name: '포인트 꿀팁',
  },
];

export default function PntPlusLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <TabBarTopCont pages={pagesInMy} />
      {children}
    </div>
  );
}
