import { staticPageFetch } from "@/utils/StaticFetch";
import Title from "./Title";
import SidebarMenuList from "./SidebarMenuList";
import CollapseBox from "./CollapseBox";

const getChildrenPageByParentName = staticPageFetch.getChildrenPageByParentName;

export default function SidebarMenu() {
  return (
    <>
      <div className="flex flex-col gap-5 pt-6 px-5">
        <div className="pb-2 font-medium text-base leading-[26px]">
          <Title>마이페이지</Title>

          <CollapseBox id="sidebar_myPoint" title="마이 포인트" open>
            <SidebarMenuList
              pages={getChildrenPageByParentName("마이 포인트")}
            />
          </CollapseBox>

          <CollapseBox id="sidebar_myBenefits" title="마이 혜택">
            <SidebarMenuList pages={getChildrenPageByParentName("마이 혜택")} />
          </CollapseBox>

          <CollapseBox id="sidebar_myLounge" title="마이 라운지">
            <SidebarMenuList
              pages={getChildrenPageByParentName("마이 라운지")}
            />
          </CollapseBox>

          <CollapseBox id="sidebar_myInfo" title="마이 회원정보">
            <SidebarMenuList
              pages={getChildrenPageByParentName("마이 회원정보")}
            />
          </CollapseBox>
        </div>
      </div>
      <div className="pt-6 px-5">
        {/* 신세계포인트 */}
        <Title>신세계포인트</Title>
        <SidebarMenuList pages={getChildrenPageByParentName("신세계포인트")} />

        {/* 멤버십 서비스 */}
        <Title>멤버십 서비스</Title>
        <SidebarMenuList pages={getChildrenPageByParentName("멤버십 서비스")} />

        {/* 고객센터 */}
        <Title>고객센터</Title>
        <SidebarMenuList pages={getChildrenPageByParentName("고객센터")} />
      </div>
    </>
  );
}
