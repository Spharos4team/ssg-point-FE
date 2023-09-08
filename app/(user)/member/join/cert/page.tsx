import FormCert from "@/components/organisam/FormCert";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";

export default function CertPage() {
  return (
    <>
      <ContentHeader>
        {/* TODO: page navigation component */}
        <ol></ol>
        <ContentTitle>본인인증</ContentTitle>
        <Subtitle>본인인증 수단을 선택해주세요.</Subtitle>
      </ContentHeader>

      <FormCert />
    </>
  );
}
