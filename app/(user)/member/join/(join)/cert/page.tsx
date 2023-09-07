import CertNavigation from "@/components/atoms/CertNavigation";
import ContentHeader from "@/components/atoms/ContentHeader";
import UserCertPage from "@/components/pages/UserCertPage";
import ContentTitle from "@/components/atoms/ContentTitle";
import Subtitle from "@/components/atoms/Subtitle";
import React from "react";

export default function CertPage() {
  return (
    <>
        <div className="px-5 py-10">
            <CertNavigation/>
            <ContentTitle
                className="font-medium"
            >
                본인인증
            </ContentTitle>
            <Subtitle
                className="!text-[13px] leading-[21px] font-normal mt-2 !pt-0"
                type="small"
            >
                본인인증 수단을 선택해주세요.
            </Subtitle>
        </div>
      <UserCertPage />
    </>
  );
}
