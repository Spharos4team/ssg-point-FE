import ContentHeader from '@/components/atom/ContentHeader';
import ContentTitle from '@/components/atom/ContentTitle';
import ListHeader from '@/components/atom/ListHeader';
import Subtitle from '@/components/atom/Subtitle';
import Tab from '@/components/atom/Tab';
import TabPannel from '@/components/atom/TabPannel';
import Tabs from '@/components/atom/Tabs';
import PointServiceTabHeader from '@/components/organisam/PointServiceTabHeader';
import Image from 'next/image';
import ListBody from '@/components/atom/ListBody';
import ListItem from '@/components/atom/ListItem';
import Link from 'next/link';
import Button from '@/components/atom/Button';
import Grid from '@/components/atom/Grid';
import cardLinkList_1 from '@/data/onlineCard.json';
import Card from '@/components/atom/Card';
import Paper from "@/components/atom/Paper";

export default function PointServicePage() {
  const tabKey = 'spointService';
  const tab1 = 'emart';
  const tab2 = 'shinsegae';
  const tab3 = 'ssg';
  const tab4 = 'emart_everyday';
  const tab5 = 'emart24';
  const tab6 = 'etc';

  const clubList = [
    {
      id: 1,
      mini_thumb: "/images/resources/club/club_momkids.png",
      textColor: "text-[#00635e]",
      paperColor: "bg-[#e6f3f3]",
      name: "맘키즈 클럽",
      subtitle:
          "아이와 엄마가 모두 행복한 라이프!<br />매월 다양한 이마트 맘키즈 클럽<br />혜택을 받아보세요.",
      link: "/membership/club/momkids",
    },
    {
      id: 2,
      mini_thumb: "/images/resources/club/club_parking.png",
      textColor: "text-[#623f00]",
      paperColor: "bg-[#f6f1e7]",
      name: "차량 서비스",
      subtitle:
          "​주차를 빠르고 편리하게!<br />이마트·신세계백화점에서<br />자동으로 주차 정산 받으세요.",
      link: "/membership/club/parking",
    },
    {
      id: 3,
      mini_thumb: "/images/resources/club/club_beauty.png",
      textColor: "text-[#d9044b]",
      paperColor: "bg-[#fde6ef]",
      name: "뷰티 클럽",
      subtitle:
          "​아름다움을 꿈꾸는 당신께!<br />이마트 뷰티 클럽에 가입하고<br />스마트하게 제품도 구매하세요.",
      link: "/membership/club/beauty",
    },
    {
      id: 4,
      mini_thumb: "/images/resources/club/club_biz.png",
      textColor: "text-[#5c1880]",
      paperColor: "bg-[#efe8f3]",
      name: "비즈 클럽",
      subtitle:
          "개인 사업자도 편리하게!<br />세금계산서 발행 서비스,<br />이제 모바일로 관리하세요.",
      link: "/membership/club/biz",
    },
  ];

  return (
    <>
      <div className="mt-9">
        <ContentHeader>
          <ContentTitle className="text-xl !leading-8 tracking-[-.5px]">
            포인트 적립·사용부터
            <br />
            <span className="font-medium text-spoint">나의 라이프스타일에 딱 맞는 서비스까지</span>
          </ContentTitle>
          <Subtitle>신세계포인트는 일상에서 특별한 경험까지 고객과 함께 합니다.</Subtitle>
        </ContentHeader>
      </div>

      <PointServiceTabHeader />

      {/* ------ Tab 시작 ------ */}
      <Tabs className="h-16 border-y border-gray-200">
        <Tab
          className={`relative p-[2px] rounded-none`}
          id={tabKey}
          label={tab1}
          activeColor="spoint"
          initValue
        >
          <Image
            className="mx-auto"
            src={'/images/resources/sPoint/emart.png'}
            width={60}
            height={60}
            alt={tab1}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab2}
          activeColor="spoint"
        >
          <Image
            className="mx-auto"
            src={'/images/resources/sPoint/shinsegae.png'}
            width={60}
            height={60}
            alt={tab2}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab3}
          activeColor="spoint"
        >
          <Image
            className="mx-auto"
            src={'/images/resources/sPoint/ssg.png'}
            width={60}
            height={60}
            alt={tab3}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab4}
          activeColor="spoint"
        >
          <Image
            className="mx-auto"
            src={'/images/resources/sPoint/emart_everyday.png'}
            width={60}
            height={60}
            alt={tab4}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab5}
          activeColor="spoint"
        >
          <Image
            className="mx-auto"
            src={'/images/resources/sPoint/emart24.png'}
            width={60}
            height={60}
            alt={tab5}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab6}
          activeColor="spoint"
        >
          <span className="text-[10px] whitespace-nowrap">기타제휴사</span>
        </Tab>
      </Tabs>

      {/* ------ Tab Pannels ------ */}

      <TabPannel id={tabKey} label={tab1}>
        <ListHeader className="text-sm font-medium" border>
          이마트/이마트 트레이더스
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td>현금, 상품권, 일반 신용카드</td>
              <td className="bold" rowSpan={10}>
                1포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] 삼성카드/e카드/SC카드/KB국민카드</td>
            </tr>
            <tr>
              <td>[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드</td>
            </tr>
            <tr>
              <td>[신세계/트레이더스] 삼성카드</td>
            </tr>
            <tr>
              <td>[SSG.COM] SSG.COM카드</td>
            </tr>
            <tr>
              <td>[SSGPAY] SSG카드</td>
            </tr>
            <tr>
              <td>일반 직불카드</td>
            </tr>
            <tr>
              <td>현금 IC카드</td>
            </tr>
            <tr>
              <td>우리제휴직불카드</td>
            </tr>
            <tr>
              <td>신한제휴직불카드</td>
            </tr>
            <tr>
              <td>[이마트] 우리체크카드</td>
              <td className="bold">6포인트</td>
            </tr>
            <tr>
              <td>[이마트] 신한카드</td>
              <td className="bold">7포인트</td>
            </tr>
          </tbody>
        </table>
        <dl className="border-b px-[10px] py-[15px]">
          <dt className="text-xs pb-1">이마트 전문점에서도 동일하게 적용됩니다.</dt>
          <dd className="text-xs break-keep text-gray-500">
            노브랜드, 데이즈, 몰리스, 베이비서클, 쇼앤탤, PK마켓, 이마트 문화센터, 일렉트로마트,
            토이킹덤, 하우디
          </dd>
        </dl>
      </TabPannel>
      <TabPannel id={tabKey} label={tab2}>
        <ListHeader className="text-sm font-medium" border>
          신세계백화점
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td>현금, 상품권, 일반 신용카드</td>
              <td className="bold" rowSpan={4}>
                1포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] 삼성카드/e카드/SC카드/신한카드</td>
            </tr>
            <tr>
              <td>[SSG.COM] SSG.COM카드</td>
            </tr>
            <tr>
              <td>[SSGPAY] SSG카드</td>
            </tr>
            <tr>
              <td>[신세계/트레이더스] 삼성카드</td>
              <td className="bold" rowSpan={2}>
                2포인트
              </td>
            </tr>
            <tr>
              <td>[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드</td>
            </tr>
            <tr>
              <td>[이마트] 우리체크카드</td>
              <td className="bold">6포인트</td>
            </tr>
            <tr>
              <td>직불카드 (일반/우리제휴카드)</td>
              <td className="bold">10포인트</td>
            </tr>
            <tr>
              <td>직불카드 (신한제휴카드)</td>
              <td className="bold">15포인트</td>
            </tr>
          </tbody>
        </table>
      </TabPannel>
      <TabPannel id={tabKey} label={tab3}>
        <ListHeader className="text-sm font-medium" border>
          SSG.COM
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td>현금, 상품권, 일반 신용카드</td>
              <td className="bold" rowSpan={5}>
                1포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] SC카드</td>
            </tr>
            <tr>
              <td>[신세계] SC체크카드/하나카드/신한카드/BC바로카드</td>
            </tr>
            <tr>
              <td>[SSG.COM] SSG.COM카드</td>
            </tr>
            <tr>
              <td>[SSGPAY] SSG카드</td>
            </tr>
            <tr>
              <td>[신세계] 씨티(체크,신용)카드</td>
              <td className="bold">2포인트</td>
            </tr>
            <tr>
              <td>[이마트] 우리체크카드</td>
              <td className="bold">6포인트</td>
            </tr>
            <tr>
              <td>[신세계/트레이더스] 삼성카드</td>
              <td className="bold" rowSpan={2}>
                7포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] 신한카드/삼성카드/e카드</td>
            </tr>
          </tbody>
        </table>
      </TabPannel>
      <TabPannel id={tabKey} label={tab4}>
        <ListHeader className="text-sm font-medium" border>
          이마트 에브리데이
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td>현금, 상품권, 일반 신용카드</td>
              <td className="bold" rowSpan={7}>
                1포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] 삼성카드/e카드/SC카드</td>
            </tr>
            <tr>
              <td>[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드</td>
            </tr>
            <tr>
              <td>[신세계/트레이더스] 삼성카드</td>
            </tr>
            <tr>
              <td>[SSG.COM] SSG.COM카드</td>
            </tr>
            <tr>
              <td>[SSGPAY] SSG카드</td>
            </tr>
            <tr>
              <td>현금 IC카드</td>
            </tr>
            <tr>
              <td>직불카드 (일반/우리제휴카드)</td>
              <td className="bold">5포인트</td>
            </tr>
            <tr>
              <td>[이마트] 우리체크카드</td>
              <td className="bold">6포인트</td>
            </tr>
            <tr>
              <td>[이마트] 신한카드</td>
              <td className="bold">7포인트</td>
            </tr>
            <tr>
              <td>직불카드 (신한제휴카드)</td>
              <td className="bold">10포인트</td>
            </tr>
          </tbody>
        </table>
      </TabPannel>
      <TabPannel id={tabKey} label={tab5}>
        <ListHeader className="text-sm font-medium" border>
          이마트24
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-25px]"
                  src={'/images/resources/sPoint/emart24.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">현금, 상품권, 일반 신용카드</span>
              </td>
              <td className="bold">5포인트</td>
            </tr>
          </tbody>
        </table>
      </TabPannel>
      <TabPannel id={tabKey} label={tab6}>
        <ListHeader className="text-sm font-medium" border>
          기타 제휴사
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/starbucks.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">스타벅스</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/outlets.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">프리미엄 아울렛</span>
              </td>
              <td className="bold" rowSpan={7}>
                1포인트
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/dutyfree.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="block leading-[14px]">
                  신세계면세점
                  <br />
                  (신세계온라인면세점)
                </span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto pb-2"
                  src={'/images/resources/sPoint/factorystore.png'}
                  width={70}
                  height={40}
                  alt=""
                />
                <span className="">신세계팩토리스토어</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/starfield.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">스타필드</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto pb-2"
                  src={'/images/resources/sPoint/tvshopping.png'}
                  width={70}
                  height={40}
                  alt=""
                />
                <span className="">신세계TV쇼핑</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/resort.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">조선호텔</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/youngrangho.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">신세계 영랑호리조트</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/food.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">신세계푸드</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/casa.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">CASAMIA</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/smoothieking.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">스무디킹</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto pb-2"
                  src={'/images/resources/sPoint/chicor.png'}
                  width={70}
                  height={40}
                  alt=""
                />
                <span className="">시코르</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/gmarket.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">G마켓</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto my-[-15px]"
                  src={'/images/resources/sPoint/aution.png'}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">옥션</span>
              </td>
            </tr>
          </tbody>
        </table>
        <dl className="border-b px-[10px] py-[15px]">
          <dt className="text-xs pb-1">신세계푸드 브랜드</dt>
          <dd className="text-xs break-keep text-gray-500">
            그래머시홀, 데블스도어, 데블스도어 다이너, 딘앤델루카, 베키아에누보, 보노보노스시,
            보노보노플러스, 셀렉더테이블, 셰프투고, 오슬로, 올반, 쟈니로켓
          </dd>
        </dl>
      </TabPannel>

      {/* notice */}
      <div className="relative">
        <div className="pt-6 px-5 pb-10 relative">
          <ListHeader className="h-auto text-base font-medium mb-1 leading-[26px]">
            사용 안내
          </ListHeader>
          <Subtitle className="!p-0 !-tracking-[.4px] !text-[13px] leadint-[21px] text-[#767676] mb-3">
            포인트 결제에서 신세계상품권까지, 편리하게 사용하실 수 있습니다.
          </Subtitle>
          <ListBody>
            <ListHeader border className="text-[13px] leading-[21px] font-medium h-auto pb-2 mb-1">
              구매 시 포인트로 결제
            </ListHeader>
            <ListItem className="!text-[13px] leading-[21px] " bullet>
              결제 시 보유하신 사용가능 포인트를 사용하실 수 있습니다.
            </ListItem>
            <ListItem isHyphen className="ml-[7px]">
              오프라인 가맹점 : 10포인트 이상 보유 시 10포인트 단위
            </ListItem>
            <ListItem isHyphen className="ml-[7px]">
              온라인 가맹점 : 1포인트 이상 보유 시 1포인트 단위(※ G마켓/옥션 제외)
            </ListItem>
            <ListItem className="!text-[13px] leading-[21px] " bullet>
              포인트 사용 시에는 포인트 비밀번호를 확인하니 미리 등록해 주세요.
            </ListItem>
            <Link href={'/myPoint/chgPntPwdCert'}>
              <Button bgColor={'yellow'} className="!h-10 mt-1 !text-xs">
                포인트 사용 비밀번호 등록/수정하기
              </Button>
            </Link>
            <ListItem className="!text-[13px] leading-[21px] mt-[10px]" bullet>
              각 가맹점별로 포인트 사용 제한 품목이 있을 수 있으니 결제 전 계산대에 문의 하시기
              바랍니다.
              <br />
              Ex. 주류, 담배, 종량제봉투, 대여용 장바구니, 리유저블 컵, 의약외품 등
            </ListItem>
          </ListBody>
          <ListBody className="mt-6">
            <ListHeader border className="text-[13px] leading-[21px] font-medium h-auto pb-2 mb-1">
              신세계상품권으로 교환
            </ListHeader>
            <ListItem className="!text-[13px] leading-[21px] " bullet>
              가까운 이마트/트레이더스/신세계백화점 상품권샵 또는 키오스크에서 5,000포인트 단위로
              교환 가능 합니다.
            </ListItem>
          </ListBody>
          <ListBody className="mt-6">
            <ListHeader border className="text-[13px] leading-[21px] font-medium h-auto pb-2 mb-1">
              소중한 사람에게 포인트 선물
            </ListHeader>
            <ListItem className="!text-[13px] leading-[21px] " bullet>
              신세계포인트 회원끼리 선물이 가능합니다.
            </ListItem>
            <Link href={'/myPoint/pntGiftMain'}>
              <Button bgColor={'yellow'} className="!h-10 mt-1 !text-xs">
                포인트 선물하기
              </Button>
            </Link>
          </ListBody>
          <ListBody className="mt-6">
            <ListHeader border className="text-[13px] leading-[21px] font-medium h-auto pb-2 mb-1">
              다양한 포인트/마일리지 전환
            </ListHeader>
            <ListItem className="!text-[13px] leading-[21px] " bullet>
              제휴되어 있는 다른 포인트/마일리지로 전환하거나 신세계포인트로 전환하실 수 있습니다.
            </ListItem>
            <Link href={'/myPoint/convertPntList'}>
              <Button bgColor={'yellow'} className="!h-10 mt-1 !text-xs">
                포인트 전환하기
              </Button>
            </Link>
          </ListBody>
        </div>
        <div className="px-5 pb-10 relative">
          <ListHeader className="h-auto text-base font-medium mb-1 leading-[26px]">
            소멸 안내
          </ListHeader>
          <Subtitle className="!p-0 !-tracking-[.4px] !text-[13px] leadint-[21px] text-[#767676] mb-3">
            신세계포인트의 유효기간은, 적립일로부터 2년(24개월)이며, 유효기간이 경과된
            신세계포인트는 월 단위 선입선출방식에 의하여 자동 소멸됩니다.
          </Subtitle>
          <ListBody>
            <ListHeader border className="text-[13px] leading-[21px] font-medium h-auto pb-2 mb-1">
              소멸포인트 확인
            </ListHeader>
            <ListItem className="!text-[13px] leading-[21px] " bullet>
              소멸포인트는 신세계포인트APP에서 조회 가능합니다.
            </ListItem>
          </ListBody>
          <ListBody className="mt-6">
            <ListHeader border className="text-[13px] leading-[21px] font-medium h-auto pb-2 mb-1">
              소멸포인트 안내
            </ListHeader>
            <ListItem className="!text-[13px] leading-[21px] " bullet>
              익월 소멸예정포인트가 있을 경우, 이메일로 사전 안내 드리고 있습니다.
            </ListItem>
            <ListItem className="!text-[13px] leading-[21px] " bullet>
              익월 소멸예정포인트가 5,000점 이상인 경우, 문자(LMS)로 추가 안내 드립니다.
            </ListItem>
          </ListBody>
        </div>
        <div className="relative px-5 pt-3">
          <ListHeader className="!text-lg leading-7 pb-10">신세계포인트 통합ID 서비스</ListHeader>
          <Subtitle className="!p-0 !-tracking-[.4px] !text-[13px] leadint-[21px] text-[#767676] mb-3">
            하나의 ID로 이마트, 신세계백화점, SSG.COM 등 다양한
            <br /> 제휴사의 혜택과 온라인 서비스를 간편하게 이용하실 수
            <br /> 있습니다.
          </Subtitle>
          <Grid className="grid-cols-">
            {cardLinkList_1.map((link) => (
              <li key={link.id} className="flex justify-center">
                <Link href={link.href} target="_blank">
                  <Card className="relative w-20 h-20 mx-auto">
                    <Image src={link.src} fill alt={link.name} />
                  </Card>
                  <span className="text-xs leading-5">{link.name}</span>
                </Link>
              </li>
            ))}
          </Grid>
        </div>
        <div className="pb-10">
          <h3 className="text-lg leading-7 font-normal px-5 pt-10">클럽 서비스</h3>
          <ul className="space-y-2">
            {clubList.map((paper) => (
                <Paper key={paper.id} bgColor={paper.paperColor}>
                  <Card className="!bg-transparent flex justify-between">
                    <div className="">
                      <ContentTitle
                          className={`${paper.textColor} !text-base font-medium`}
                      >
                        {paper.name}
                      </ContentTitle>
                      <Subtitle
                          className={`${paper.textColor} pt-[10px] text-sm`}
                          type="__html"
                      >
                        {paper.subtitle}
                      </Subtitle>
                    </div>
                    <Image src={paper.mini_thumb} width={90} height={90} alt="" />
                  </Card>
                </Paper>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
