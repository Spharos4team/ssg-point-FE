import Collapse from "@/components/atom/Collapse";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Dropdown from "@/components/atom/Dropdown";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import PageNavigator from "@/components/module/PageNavigator";
import Image from "next/image";

export default function FaqPage() {
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="text-xl !leading-8 tracking-[-.5px]">
          자주 묻는 <span className="font-bold text-cscenter">질문과 답변</span>
          을
          <br />
          모아 두었어요.
        </ContentTitle>
      </ContentHeader>

      <ListHeader className="flex-col !items-start px-5">
        <p className="pb-4">질문 분류를 선택해주세요.</p>
        <div className="flex justify-between w-full gap-x-2">
          <Dropdown
            className="h-12 w-full border rounded-lg"
            wrapper="flex-1"
            id="faqBoardMainCate"
            options={[]}
          />
          <Dropdown
            className="h-12 w-full border rounded-lg"
            wrapper="flex-1"
            id="faqBoardSubCate"
            options={[]}
          />
        </div>
      </ListHeader>

      <ListBody className="!pt-12">
        <li className="">
          <Collapse
            className="px-6"
            buttonClass="h-full"
            id="1"
            title={
              <div className="flex gap-x-3 pt-5 pb-5">
                <Image
                  className="my-auto mt-1"
                  src={"/images/resources/cscenter/q_mark.png"}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className="text-[13px] w-5/6 text-ellipsis overflow-hidden">
                  <p>[이마트 EV 클럽]</p>
                  <p className="text-gray-600">
                    [EV 클럽 문의] 이마트 EV클럽 이용 문의는 어디로 하나요?
                  </p>
                </div>
              </div>
            }
          >
            <div className="flex gap-x-3 pb-5">
              <Image
                className="my-auto mt-0"
                src={"/images/resources/cscenter/a_mark.png"}
                width={24}
                height={24}
                alt=""
              />
              <div className="text-[13px] text-ellipsis overflow-hidden ">
                <p>
                  • EV클럽 전문 고객센터 또는 1:1 문의를 통해 확인하실 수
                  있습니다.{" "}
                </p>
                <p className="text-gray-600 pt-4">
                  [EV클럽 고객센터]
                  <br />
                  1670-2143 ｜ 운영시간 10:00~22:00
                </p>
              </div>
            </div>
          </Collapse>
        </li>

        <li className="">
          <Collapse
            className="px-6"
            buttonClass="h-full"
            id="2"
            title={
              <div className="flex gap-x-3 pt-5 pb-5">
                <Image
                  className="my-auto mt-1"
                  src={"/images/resources/cscenter/q_mark.png"}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className="text-[13px] w-5/6 text-ellipsis overflow-hidden">
                  <p>[이마트 EV 클럽]</p>
                  <p className="text-gray-600">
                    [EV 클럽 문의] 이마트 EV클럽 이용 문의는 어디로 하나요?
                  </p>
                </div>
              </div>
            }
          >
            <div className="flex gap-x-3 pb-5">
              <Image
                className="my-auto mt-0"
                src={"/images/resources/cscenter/a_mark.png"}
                width={24}
                height={24}
                alt=""
              />
              <div className="text-[13px] text-ellipsis overflow-hidden ">
                <p>
                  • EV클럽 전문 고객센터 또는 1:1 문의를 통해 확인하실 수
                  있습니다.{" "}
                </p>
                <p className="text-gray-600 pt-4">
                  [EV클럽 고객센터]
                  <br />
                  1670-2143 ｜ 운영시간 10:00~22:00
                </p>
              </div>
            </div>
          </Collapse>
        </li>

        <li className="">
          <Collapse
            className="px-6"
            buttonClass="h-full"
            id="3"
            title={
              <div className="flex gap-x-3 pt-5 pb-5">
                <Image
                  className="my-auto mt-1"
                  src={"/images/resources/cscenter/q_mark.png"}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className="text-[13px] w-5/6 text-ellipsis overflow-hidden">
                  <p>[이마트 EV 클럽]</p>
                  <p className="text-gray-600">
                    [EV 클럽 문의] 이마트 EV클럽 이용 문의는 어디로 하나요?
                  </p>
                </div>
              </div>
            }
          >
            <div className="flex gap-x-3 pb-5">
              <Image
                className="my-auto mt-0"
                src={"/images/resources/cscenter/a_mark.png"}
                width={24}
                height={24}
                alt=""
              />
              <div className="text-[13px] text-ellipsis overflow-hidden ">
                <p>
                  • EV클럽 전문 고객센터 또는 1:1 문의를 통해 확인하실 수
                  있습니다.{" "}
                </p>
                <p className="text-gray-600 pt-4">
                  [EV클럽 고객센터]
                  <br />
                  1670-2143 ｜ 운영시간 10:00~22:00
                </p>
              </div>
            </div>
          </Collapse>
        </li>
      </ListBody>

      <PageNavigator />
    </>
  );
}
