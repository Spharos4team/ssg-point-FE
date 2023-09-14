<<<<<<< HEAD
import CertNavigation from "@/components/atoms/CertNavigation";
import ContentHeader from "@/components/atoms/ContentHeader";
import UserCertPage from "@/components/pages/UserCertPage";
=======
import FormCert from "@/components/organisam/FormCert";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import StepNavigation from "@/components/atom/StepNavigation";
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12

export default function CertPage() {
  return (
    <>
<<<<<<< HEAD
      <ContentHeader
        type="hasTop"
        top={<CertNavigation />}
        main={<strong className="font-bold">본인인증</strong>}
        sub="본인인증 수단을 선택해주세요."
      />
      <UserCertPage />
=======
      <ContentHeader>
        <StepNavigation />
        <ContentTitle>본인인증</ContentTitle>
        <Subtitle>본인인증 수단을 선택해주세요.</Subtitle>
      </ContentHeader>

      <FormCert />
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
    </>
  );
}
