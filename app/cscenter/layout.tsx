<<<<<<< HEAD
import TabBarTopCont from "@/components/templates/TabBarTopCont";
import { PageProp } from "@/types/LinkProps";
=======
import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12

export default function CscenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
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
=======
  return (
    <>
      <TabbarHeader
        hideByScroll
        justify="between"
        pages={staticPageFetch.getPageListByEachName([
          "공지사항",
          "FAQ",
          "1:1상담",
        ])}
        activeTab="underline-primary"
        activeColor="cscenter"
      />
      {children}
    </>
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
  );
}
