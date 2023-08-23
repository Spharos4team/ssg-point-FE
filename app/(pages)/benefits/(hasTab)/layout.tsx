import TabForTabBox from "@/components/atoms/TabForTabBox";
import TabBarTopCont from "@/components/layout/tabbar/TabBarTopCont";
import TabBoxSimple from "@/components/modules/TabBoxSimple";
import { PageProp } from "@/types/LinkProps";

export default function PntPlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-12">
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
