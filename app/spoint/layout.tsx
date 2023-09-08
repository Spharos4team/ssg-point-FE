'use client';
import TabBarTopCont from '@/components/templates/TabBarTopCont';
import { PageProp } from '@/types/LinkProps';
import ContentHeader from '@/components/atoms/ContentHeader';
import { usePathname } from 'next/navigation';

const PagesSpoint: PageProp[] = [
  {
    _id: 1,
    _href: '/spoint/memberstore',
    name: '가맹점 소개',
  },
  {
    _id: 2,
    _href: ['/spoint/pointcard'],
    name: '포인트 카드',
  },
  {
    _id: 3,
    _href: '/spoint/pointservice',
    name: '포인트 서비스',
  },
  {
    _id: 4,
    _href: '/spoint/tempCardCert',
    name: '임시 발급 카드 인증',
  },
  {
    _id: 5,
    _href: '/spoint/newsLetter',
    name: '신세계그룹 뉴스레터',
  },
];

export default function SpointLayout({ children }: { children: React.ReactNode }) {
  const pageHeaders: PageProp[] = [
    {
      _href: '/spoint/memberstore',
      name: '가맹점 소개',
      title: (
        <>
          생활에서 취향까지
          <br />
          <span className="text-[#a16c0c]">일상에 신세계를 더합니다.</span>
        </>
      ),
      subTitle:
        '일상의 쇼핑부터 내 취향에 어울리는 맞춤 쇼핑까지<br />다양한 신세계포인트 가맹점을 만나보세요.',
      className: 'mt-[128px]',
    },
    {
      _href: '/spoint/pointcard',
      name: '포인트 카드',
      title: (
        <>
          언제 어디에서라도 신세계포인트를
          <br />
          만날 수 있는
          <span className="text-[#a16c0c]"> 다양한 방법</span>
        </>
      ),
      subTitle:
        '카드마다 차별화된 서비스·혜택을 즐기세요!<br />신세계포인트 앱 하나면 나의 포인트 카드를<br />한 번에 확인할 수 있어요.',
    },
    {
      _href: '/spoint/pointservice',
      name: '포인트 서비스',
      title: (
        <>
          포인트 적립·사용부터
          <br />
          <span className="text-[#a16c0c]">나의 라이프스타일에 딱 맞는 서비스까지</span>
        </>
      ),
      subTitle: '신세계포인트는 일상에서 특별한 경험까지 고객과 함께 합니다.',
    },
    {
      _href: '/spoint/tempCardCert',
      name: '임시 발급 카드 인증',
      title: (
        <>
          <span className="text-[#a16c0c]">임시 발급 카드</span>를 인증하고
          <br />
          다양한 서비스를 이용해 보세요.
        </>
      ),
      subTitle:
        '본인 인증 없이 발급받은 카드를 한 번만 본인 인증하면<br />온/오프라인 통합 관리, 제휴 신용카드 연동 등<br/>더욱 편리한 서비스 이용이 가능합니다.',
    },
    {
      _href: '/spoint/newsLetter',
      name: '신세계그룹 뉴스레터',
      title: (
        <>
          NEWS를 보면
          <span className="text-[#a16c0c]"> 신세계가 보인다!</span>
        </>
      ),
      subTitle: '유튜브, 칼럼, 신세계그룹의 다양한 정보와<br / >컨텐츠를 즐겨보세요.',
    },
  ];
  const currPath = usePathname();
  const currPage = pageHeaders.find((el) => el._href === currPath);

  return (
    <div className="mt-12">
      <TabBarTopCont pages={PagesSpoint} lineType="primary" activeColor="brown" />
      <ContentHeader
        className={currPage?.className}
        main={currPage?.title}
        sub={currPage?.subTitle as string}
      />
      {children}
    </div>
  );
}
