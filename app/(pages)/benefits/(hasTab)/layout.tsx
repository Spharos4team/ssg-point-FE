import TabForTabBox from "@/components/atoms/TabForTabBox";
import TabBoxSimple from "@/components/modules/TabBoxSimple";

export default function PntPlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
