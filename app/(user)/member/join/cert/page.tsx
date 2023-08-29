import CertNavigation from "@/components/atoms/CertNavigation";
import ContentHeader from "@/components/atoms/ContentHeader";
import UserCertPage from "@/components/pages/UserCertPage";

export default function CertPage() {
  return (
    <>
      <ContentHeader
        type="hasTop"
        top={<CertNavigation />}
        main={<strong className="font-bold">본인인증</strong>}
        sub="본인인증 수단을 선택해주세요."
      />
      <UserCertPage />
    </>
  );
}
