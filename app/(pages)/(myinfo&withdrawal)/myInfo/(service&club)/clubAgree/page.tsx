import ContentStrong from "@/app/components/atoms/ContentStrong";
import { InputText } from "@/app/components/atoms/InputText";
import ListForNoticeBox from "@/app/components/atoms/ListForNoticeBox";
import PrimaryButtonBasic from "@/app/components/atoms/PrimaryButtonBasic";
import RadioBox from "@/app/components/atoms/RadioBox";
import TextBox from "@/app/components/atoms/TextBox";
import RadioBoxContainer from "@/app/components/modules/RadioBoxContainer";
import ToggleCard from "@/app/components/modules/ToggleCard";

export default function clubAgree() {
  return (
    <div>
      <h3 className="hidden">클럽 동의</h3>
      <div className="pb-10">
        <p className="ml-5 mt-5 text-[#eb0000] text-xs leading-5">
          ※ 각 클럽 서비스별 하단 확인 버튼을 눌러야 변경 내용이 저장됩니다.
        </p>
        <ContentStrong>맘키즈 클럽</ContentStrong>
        <ToggleCard
          title="[선택] 맘키즈 클럽 혜택을 위한 부가 정보 수집 및 이용 동의"
          toggleId="toggle04"
          modified=""
        />
        <div className="relative mx-5 min-h-[48px] border-b bg-[#fbfbfb]">
          <div className="w-full px-4 pt-[26px] pb-[52px]">
            <RadioBoxContainer title="자녀1">
              <RadioBox id="male01" name="child1" value="01">
                남자
              </RadioBox>
              <RadioBox id="female01" name="child1" value="02">
                여자
              </RadioBox>
              <TextBox
                className="w-[calc(100%-60px)] mt-2 ml-[60px]"
                id="birth"
                type="number"
              >
                생년월일<em>ex)20170201</em>
              </TextBox>
            </RadioBoxContainer>

            <RadioBoxContainer title="자녀2">
              <RadioBox id="male02" name="child2" value="01">
                남자
              </RadioBox>
              <RadioBox id="female02" name="child2" value="02">
                여자
              </RadioBox>
              <TextBox
                className="w-[calc(100%-60px)] mt-2 ml-[60px]"
                id="birth"
                type="number"
              >
                생년월일<em>ex)20170201</em>
              </TextBox>
            </RadioBoxContainer>
          </div>
          <button
            className="absolute left-1/2 bottom-3 block translate-x-[-50%] text-[#000] font-medium
          after:content-[''] after:bg-[url('/images/arrow_down.png')] after:bg-[length:10px_auto] after:bg-no-repeat after:inline-block after:align-top after:w-[10px] after:h-[7px] after:mt-[10px] after:ml-[10px]"
          >
            {/* TODO: 폴딩박스만들어서 모듈로. */}
            나의 자녀 정보 열기
          </button>
        </div>
        <ul className="pt-[16px] pb-6 px-6">
          <ListForNoticeBox level={2}>
            맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            자녀 정보는 최대 2명까지 입력하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.
            <br />
            (온·오프라인 옴니동의 시 SSG.COM 이용 가능)
          </ListForNoticeBox>
        </ul>

        <PrimaryButtonBasic>확인</PrimaryButtonBasic>

        <ContentStrong>차량 서비스</ContentStrong>
        <ToggleCard
          title="[선택] 차량 서비스 제공을 위한 부가 정보 수집 및 이용동의"
          toggleId="toggle02"
          modified=""
        />
        <ToggleCard
          className="border-t"
          title="[선택] 차량서비스 제공을 위한 이마트, 신세계 공동 부가 정보 수집 및 이용동의"
          toggleId="toggle03"
          modified=""
        />
      </div>
    </div>
  );
}
