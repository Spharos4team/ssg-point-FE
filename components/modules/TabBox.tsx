import TabBoxSimple from "@/components/modules/TabBoxSimple";
import TabForTabBox from "@/components/atoms/TabForTabBox";
const TabBox = ({
    children, Linknme
} : {
    children: React.ReactNode, Linknme: string
}) => (
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


export default TabBox;