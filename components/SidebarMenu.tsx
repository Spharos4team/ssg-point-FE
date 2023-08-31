import SidebarMenuBox from "./SidebarMenuBox";

import { staticPageFetch } from "@/utils/StaticFetch";
import { PageType } from "@/type/Page";

const getPageSetByParentId = staticPageFetch.getPageSetByParentId;

export default function SidebarMenu() {
  const myPoint = getPageSetByParentId(
    Number(process.env.NEXT_PUBLIC_PAGE_MYPOINT)
  );
  const myBenefits = getPageSetByParentId(
    Number(process.env.NEXT_PUBLIC_PAGE_MYBENEFIT)
  );
  const myLounge = getPageSetByParentId(
    Number(process.env.NEXT_PUBLIC_PAGE_MYLOUNGE)
  );
  const myInfo = getPageSetByParentId(
    Number(process.env.NEXT_PUBLIC_PAGE_MYINFO)
  );

  const ssgPoint = getPageSetByParentId(
    Number(process.env.NEXT_PUBLIC_PAGE_SSGPOINT)
  );
  const membership = getPageSetByParentId(
    Number(process.env.NEXT_PUBLIC_PAGE_MEMSRVCE)
  );
  const csCenter = getPageSetByParentId(
    Number(process.env.NEXT_PUBLIC_PAGE_CSCENTER)
  );

  return (
    <>
      <div className="flex flex-col gap-5 pt-6 px-5">
        <div className="pb-2 font-medium text-base leading-[26px]">
          <h3 className="text-base leading-[24px] font-medium pb-2 border-b border-black">
            마이페이지
          </h3>
          <SidebarMenuBox
            type="collapse"
            pages={myPoint as PageType[]}
            defaultValue
          />
          <SidebarMenuBox type="collapse" pages={myBenefits as PageType[]} />
          <SidebarMenuBox type="collapse" pages={myLounge as PageType[]} />
          <SidebarMenuBox type="collapse" pages={myInfo as PageType[]} />
        </div>
      </div>
      <div className="pt-6 px-5">
        {/* 신세계포인트 */}
        <SidebarMenuBox pages={ssgPoint as PageType[]} />

        {/* 멤버십 서비스 */}
        <SidebarMenuBox pages={membership as PageType[]} />

        {/* 고객센터 */}
        <SidebarMenuBox pages={csCenter as PageType[]} />
      </div>
    </>
  );
}
