import TabForTabBox from "@/components/atoms/TabForTabBox";
import TabBoxSimple from "@/components/modules/TabBoxSimple";
import React from "react";

export default function CouponLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="p-0">
        <TabBoxSimple>
          <TabForTabBox href="/benefits/myCoupon">사용가능 쿠폰()</TabForTabBox>
          <TabForTabBox href="/benefits/endCoupon">
            사용완료/기간만료 쿠폰()
          </TabForTabBox>
        </TabBoxSimple>
      </div>
      {children}
    </>
  );
}

