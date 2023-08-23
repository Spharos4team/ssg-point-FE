import TabForTabBox from "@/components/atoms/TabForTabBox";
import TabBoxSimple from "@/components/modules/TabBoxSimple";
import {PageProp} from "@/types/LinkProps";

export default function PntPlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabsInBenefits: PageProp[] = [
    {
      _id: 1,
      _href: "/benefits/pntPlus/attend",
      name: "포인트 플러스",
    },
    {
      _id: 2,
      _href: "/benefits/benefitMyLuck",
      name: "나의 운세보기",
    },
    {
      _id: 3,
      _href: "/benefits/myCoupon",
      name: "마이 쿠폰함",
    },
    {
      _id: 4,
      _href: "/benefits/myEvent",
      name: "마이 이벤트",
    },
    {
      _id: 5,
      _href: "/benefits/pntTip",
      name: "포인트 꿀팁",
    },
  ];
  return (
    <>
      <div className="p-0">
        <TabBoxSimple>
          <TabForTabBox href="/benefits/pntPlus/attend">출석체크</TabForTabBox>
          <TabForTabBox href="/benefits/pntPlus/roulette">
            럭키룰렛
          </TabForTabBox>
        </TabBoxSimple>
      </div>
      {children}
    </>
  );
}
