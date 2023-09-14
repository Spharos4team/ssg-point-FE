<<<<<<< HEAD
import UserCertPage from "@/components/pages/UserCertPage";

export default function FindPwPage() {
  return <UserCertPage />;
=======
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import FormCert from "@/components/organisam/FormCert";

export default function FindPwPage() {
  return (
    <>
      <ContentHeader>
        <ContentTitle>
          비밀번호가
          <br /> 생각나지 않으세요?
        </ContentTitle>
        <Subtitle>본인인증 후 비밀번호를 변경하실 수 있습니다.</Subtitle>
      </ContentHeader>

      <FormCert />
    </>
  );
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
}
