import CertNavigation from "@/components/atoms/CertNavigation";
import ContentHeader from "@/components/atoms/ContentHeader";
import UserCertPage from "@/components/pages/UserCertPage";
import SingUpSuccess from "@/app/tochange/SingUpSuccess";
import ContentTitle from "@/components/atoms/ContentTitle";
import SpecialTitle from "@/components/atoms/SpecialTitle";
import Underline from "@/components/atoms/Underline";

export default function SuccessPage() {
    const underline =
        "after:content-[''] after:inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[12px] after:bg-[#ffdfb5] after:z-[-1]";

    return (
    <>
      <div className="px-5 pt-10">
        <CertNavigation/>
        <ContentTitle
            className="font-medium"
        >
          가입완료
        </ContentTitle>
      </div>
        <div className="px-5 py-5">
          <SpecialTitle name={"박*민"} color={'orange'}>
             님, pjm127 ID로
            <br/> 신세계포인트 통합 회원 가입이
            <br/> 완료되었습니다.
          </SpecialTitle>
        </div>
      <div className="px-5 py-5">
          <h3 className="text-xl leading-[24px] font-medium pb-5 border-b border-black">
              회원정보
          </h3>
          <p className="text-base font-medium pt-5">
              휴대폰 번호
          </p>
          <p className="text-base font-normal text-gray-500">
              010-95**-50**
          </p>
          <p className="text-base font-medium pt-5">
              주소
          </p>
          <p className="text-base font-normal text-gray-500">
              부산 북구 금곡대로, *****
          </p>
          <p className="text-base font-medium pt-5">
              이메일
          </p>
          <p className="text-base font-normal text-gray-500">
              없음
          </p>
      </div>
        <div className="px-5 py-5">
            <h3 className="text-xl leading-[36px] font-medium pb-5 border-b border-black">
                광고정보 수신동의
                <br/> 동의일자 2023.08.30
            </h3>
            <p className="text-base font-medium pt-5">
                동의
            </p>
            <p className="text-base font-normal text-gray-500">
                이메일, 문자, DM, TM, APP PUSH
            </p>
        </div>
    </>
  );
}
