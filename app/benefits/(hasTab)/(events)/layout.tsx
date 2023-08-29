import TabForTabBox from "@/components/atoms/TabForTabBox";
import TabBoxSimple from "@/components/modules/TabBoxSimple";
import React from "react";

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="p-0">
        <TabBoxSimple>
          <TabForTabBox href="/benefits/myEvent">참여한 이벤트()</TabForTabBox>
          <TabForTabBox href="/benefits/winEvent">
            당첨 확인()
          </TabForTabBox>
        </TabBoxSimple>
      </div>
      {children}
    </>
  );
}

