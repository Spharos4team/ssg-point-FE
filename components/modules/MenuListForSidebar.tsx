import { PageProps } from "@/types/PageProps";

import realJsonPages from "@/datas/page.data.json";
import MenuButton from "../atoms/MenuButton";
import CollapseForMenuList from "./CollapseForMenuList";

const MenuListForSidebar = () => {
  const parentChildMap: Record<string | number, PageProps[]> = {};

  realJsonPages.forEach((item) => {
    if (!parentChildMap[item.parent_id]) {
      parentChildMap[item.parent_id] = [];
    }
    parentChildMap[item.parent_id].push(item);
  });

  console.log("parentChildMap", parentChildMap);

  return (
    <div className="flex flex-col gap-5 pt-6 px-5">
      {realJsonPages &&
        realJsonPages
          .filter((item) => item.parent_id === "")
          .map((parent) => (
            <div
              key={parent.id}
              className="pb-2 font-medium text-base leading-[26px]"
            >
              <h3 className="text-base leading-[24px] font-medium pb-2 border-b border-black">
                {parent.name}
              </h3>
              {parentChildMap[parent.id] &&
              parentChildMap[parent.id].some((item) => item.href) ? (
                <ul className="grid grid-cols-2 gap-x-1 gap-y-5 pb-[34px] mt-5">
                  {parentChildMap[parent.id].map((child) => (
                    <MenuButton key={child.id} aPage={child} />
                  ))}
                </ul>
              ) : (
                parentChildMap[parent.id].map((parent) => (
                  <CollapseForMenuList
                    key={parent.id}
                    parent={parent}
                    parentChildMap={parentChildMap}
                  />
                ))
              )}
            </div>
          ))}
    </div>
  );
};

export default MenuListForSidebar;
