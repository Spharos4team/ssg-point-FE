import ContentHeader from "@/components/atoms/ContentHeader";
import { FormProvider } from "@/components/hooks/FormProvider";
import SubmitForLeave from "@/components/organisms/SubmitForLeave";

//TODO: slug 받아서 표시
export default function leavePasswordPage() {
  return (
    <>
      <ContentHeader
        main={
          <strong className="font-medium">
            개인정보 보호를 위해
            <br />
            <span className="text-[#ea035c]">비밀번호를 확인</span>하고
            있습니다.
          </strong>
        }
        sub="현재 사용 중인 비밀번호를 입력해주세요."
      />
      <FormProvider>
        <SubmitForLeave />
      </FormProvider>
    </>
  );
}
