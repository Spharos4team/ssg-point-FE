"use client";
import { useRouter } from "next/navigation";
import Button from "../atoms/Button/Button";
import { InputText } from "../atoms/InputText";
import { useFormContext } from "../hooks/FormProvider";

const SubmitForLeave = () => {
  const { valueList } = useFormContext();
  const router = useRouter();

  const handleSubmit = () => {
    console.log(valueList);
    if (!valueList["password"]) {
      alert("비밀번호를 입력해 주세요.");
    } else {
      // get 요청
      router.push("/withdrawal/leaveUsingService");
    }
  };
  return (
    <div className="box-border px-5 pb-10">
      <div className="pb-[25px]">
        <p className="pb-2 text-xs">비밀번호</p>
        <InputText
          className="!rounded-lg"
          type="form"
          id="password"
          title="비밀번호"
          inputType="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>

      <Button
        type="context"
        className="h-12"
        backgroundColor="primary"
        onClick={handleSubmit}
      >
        확인
      </Button>
    </div>
  );
};

export default SubmitForLeave;
