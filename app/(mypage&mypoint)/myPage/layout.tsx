import TabBarTopCont from '@/components/templates/TabBarTopCont';
import { PageProp } from '@/types/LinkProps';

const pagesInMy: PageProp[] = [
  {
    _id: 1,
    _href: '/myPoint/pntHistory',
    name: '마이 포인트',
  },
  {
    _id: 2,
    _href: '/myLounge/history',
    name: '마이 라운지',
  },
  {
    _id: 3,
    _href: '/benefits/pntPlus/attend',
    name: '마이 혜택',
  },
  {
    _id: 4,
    _href: '/myInfo/infoRcvAgree',
    name: '마이 회원정보',
  },
];

export default function IngEventLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <TabBarTopCont pages={pagesInMy} />
      {children}
    </div>
  );
}
