import { PageType } from "@/type/Page";
import SidebarMenuList from "./SidebarMenuList";
import Button from "./Button";
import { useEffect } from "react";
import { useAppContext } from "@/provider/AppContextProvider";

export default function SidebarMenuBox({
  className,
  type = "basic",
  pages,
  defaultValue = false,
}: {
  className?: string;
  type?: "basic" | "collapse";
  pages: PageType[];
  defaultValue?: boolean;
}) {
  const { appValueList, handleAppRecord } = useAppContext();
  const parent = pages.find((page) => !page?.parent_id);
  const parentId = String(parent?.id);

  useEffect(() => {
    if (defaultValue) {
      handleAppRecord(parentId, defaultValue);
    }
  }, [defaultValue]);

  switch (type) {
    case "basic": {
      return (
        <>
          <h3 className="text-base leading-[24px] font-medium pb-2 border-b border-black">
            {parent?.name}
          </h3>
          <SidebarMenuList pages={pages as PageType[]} />
        </>
      );
    }
    case "collapse": {
      return (
        <div className="border-b">
          <Button
            id={parentId}
            type="collapse"
            open={appValueList[parentId] as boolean}
            onClick={() => handleAppRecord(parentId, !appValueList[parentId])}
          >
            {parent?.name}
          </Button>
          <div className={appValueList[parentId] ? "" : "hidden"}>
            <SidebarMenuList pages={pages as PageType[]} />
          </div>
        </div>
      );
    }
  }
}
