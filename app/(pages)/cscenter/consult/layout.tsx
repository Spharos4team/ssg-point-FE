import TabForTabBox from "@/components/atoms/TabForTabBox";
import TabBarTopCont from "@/components/layout/tabbar/TabBarTopCont";
import TabBoxSimple from "@/components/modules/TabBoxSimple";
import { PageProp } from "@/types/LinkProps";

export default function ConsultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pagesInMy: PageProp[] = [
    {
      _id: 1,
      _href: "/cscenter/consult/write",
      name: "1:1 상담 작성",
    },
    {
      _id: 2,
      _href: "/cscenter/consult/list",
      name: "1:1 상담 내역",
    },
  ];

  return (
    <>
      <div className="relative mt-[-57px]">
        <TabBarTopCont
          align="between"
          activeColor="purple"
          lineType="simple"
          bg
          pages={pagesInMy}
        />
      </div>
      <div className="pt-[103px]">{children}</div>
    </>
  );
}
