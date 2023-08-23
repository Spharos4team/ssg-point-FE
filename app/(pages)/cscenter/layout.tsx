import TabBarTopCont from "@/components/layout/tabbar/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";

export default function CscenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pagesInMy: PageProp[] = [
    {
      _id: 1,
      _href: "/cscenter/notice",
      name: "공지사항",
    },
    {
      _id: 2,
      _href: "/cscenter/faq",
      name: "FAQ",
    },
    {
      _id: 3,
      _href: ["/cscenter/consult/write", "/cscenter/consult/list"],
      name: "1:1 상담",
    },
  ];

  return (
    <div className="mt-12">
      <TabBarTopCont
        align="between"
        activeColor="purple"
        lineType="primary"
        pages={pagesInMy}
      />
      {children}
    </div>
  );
}
