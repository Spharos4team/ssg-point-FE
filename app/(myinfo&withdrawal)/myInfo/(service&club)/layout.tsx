import ContentHeader from '@/components/atoms/ContentHeader';
import TabForTabBox from '@/components/atoms/TabForTabBox';
import TabBoxSimple from '@/components/modules/TabBoxSimple';
import { PageProp } from '@/types/LinkProps';

const pagesInMy: PageProp[] = [
  {
    _id: 5,
    _href: '/withdrawal/leavePassword',
    name: '회원 탈퇴',
  },
];

export default function ServiceAndClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContentHeader
        main={<strong className="font-medium">서비스 동의 관리</strong>}
        sub="신세계포인트의 다양한 서비스 혜택을 받을 수 있습니다."
      />
      <div className="p-0">
        <TabBoxSimple>
          <TabForTabBox href="/myInfo/serviceAgree">서비스 동의</TabForTabBox>
          <TabForTabBox href="/myInfo/clubAgree">클럽 동의</TabForTabBox>
        </TabBoxSimple>
      </div>

      {children}
    </>
  );
}
