import ContentHeader from "@/components/atoms/ContentHeader";
import PrimaryButtonBasic from "@/components/atoms/ButtonPrimary";
import TextBox from "@/components/atoms/TextBox";

//TODO: slug 받아서 표시
export default function leavePassword() {
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
      <div className="box-border px-5 pb-10">
        <div className="pb-[25px]">
          <p className="pb-2 text-xs">비밀번호</p>
          <TextBox id="name" type="text">
            비밀번호를 입력해주세요.
          </TextBox>
        </div>

        <PrimaryButtonBasic round="rounded-lg">확인</PrimaryButtonBasic>
      </div>
    </>
  );
}
