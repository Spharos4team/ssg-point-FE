"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import Card from "../atom/Card";
import Tab from "../atom/Tab";
import Tabs from "../atom/Tabs";
import Input from "../atom/Input";
import Dropdown from "../atom/Dropdown";
import ListHeader from "../atom/ListHeader";
import Checkbox from "../atom/Checkbox";
import ListBody from "../atom/ListBody";
import Button from "../atom/Button";
import Modal from "../atom/Modal";
import { useEffect, useRef } from "react";
import DetailArrow from "../atom/DetailArrow";
import TabPannel from "../atom/TabPannel";
import ContentTitle from "../atom/ContentTitle";

export default function FormCert() {
  const { appValueList, handleAppRecord } = useAppContext();

  const phoneIcon =
    "before:absolute before:left-1/2 before:top-[15px] before:ml-[-18px] before:w-[35px] before:h-[40px] before:bg-[url('/images/resources/cert/ico_find_tab.png')] before:bg-[85px_auto] before:bg-[top_left_5px]";
  const phoneSelected = "before:bg-[top_right_-5px]";
  const cardIcon =
    "before:absolute before:left-1/2 before:top-[15px] before:ml-[-18px] before:w-[35px] before:h-[40px] before:bg-[url('/images/resources/cert/ico_find_tab.png')] before:bg-[85px_auto] before:bg-[center_left]";

  const checkIcon =
    "before:relative before:left-0 before:w-[11px] before:h-2 before:bg-[url(/images/icon_check.png)] before:bg-[11px_auto]";
  const certId = "cert_by";

  const phoneAfilliOptions = [
    { id: 1, name: "SKT" },
    { id: 2, name: "KT" },
    { id: 3, name: "LG U+" },
    { id: 4, name: "SKT 알뜰폰" },
    { id: 5, name: "KT 알뜰폰" },
    { id: 6, name: "LG U+ 알뜰폰" },
  ];

  const termsList = [
    {
      id: "terms_01",
      name: "휴대전화 인증 서비스 이용약관",
      required: true,
      content_url: "",
    },
    {
      id: "terms_02",
      name: "고유식별정보 처리 동의",
      required: true,
      content_url: "",
    },
    {
      id: "terms_03",
      name: "통신사 이용약관 동의",
      required: true,
      content_url: "",
    },
    {
      id: "terms_04",
      name: "개인정보 수집/이용동의",
      required: true,
      content_url: "",
    },
  ];

  // TODO: 현재 Form 내 모든 KEY 관리 필요...
  const allCheckId = "terms_all";
  const chkList = termsList.map((term) => appValueList[term.id + "_chk"]);

  // TODO: NOTE//전체 토글, 개별 토글
  useEffect(() => {
    if (chkList.every((term) => term == true)) {
      handleAppRecord(allCheckId, true);
    } else handleAppRecord(allCheckId, false);
  }, [chkList[0], chkList[1], chkList[2], chkList[3]]);

  const handleAllCheck = () => {
    const allChecked = !chkList.every((term) => term === true);
    termsList.map((item) => handleAppRecord(item.id + "_chk", allChecked));
  };

  const handleSubmit = () => {
    // null validation
    if (!appValueList["userName"]) {
      console.log(appValueList["userName"]);
      document.getElementById("userName")?.focus();
    } else if (!appValueList["userBirth"]) {
      console.log(appValueList["userName"]);
      document.getElementById("userBirth")?.focus();
    } else if (!appValueList["userPhone"]) {
      console.log(appValueList["userPhone"]);
      document.getElementById("userPhone")?.focus();
    }

    // terms validation
    else if (!appValueList["terms_01_chk"]) {
      handleAppRecord("terms_01_valid", true);
    } else if (!appValueList["terms_02_chk"]) {
      handleAppRecord("terms_02_valid", true);
    } else if (!appValueList["terms_03_chk"]) {
      handleAppRecord("terms_03_valid", true);
    } else if (!appValueList["terms_04_chk"]) {
      handleAppRecord("terms_04_valid", true);
    }

    // TODO: POST fetching
  };

  return (
    <div className="mx-5">
      <Card border fit>
        <Tabs>
          <Tab
            className={`relative p-[2px]`}
            id={certId}
            label="phone"
            activeColor="primary"
            initValue
          >
            <div
              className={`bg-white w-full h-full pt-12 pb-3 rounded-md ${phoneIcon}`}
            >
              휴대폰인증
            </div>
          </Tab>
          <Tab
            className="relative p-[2px]"
            id={certId}
            label="card"
            activeColor="primary"
          >
            <div
              className={`bg-white w-full h-full pt-12 pb-3 rounded-md ${cardIcon}`}
            >
              카드인증
            </div>
          </Tab>
        </Tabs>
      </Card>

      <TabPannel className="p-0" id={certId} label="phone">
        <div className="flex flex-col gap-y-5 py-10">
          <Input
            className="rounded-lg"
            id="userName"
            title={"이름을 입력해주세요."}
          >
            이름 입력
          </Input>

          <Tabs className="gap-x-2" title={"성별을 선택해 주세요."}>
            <Tab id="userGender" label="male" className="bg-gray-200" initValue>
              <span
                className={`relative flex gap-x-2 justify-center items-center ${checkIcon}`}
              >
                남자
              </span>
            </Tab>
            <Tab id="userGender" label="female" className="bg-gray-200">
              <span
                className={`relative flex gap-x-2 justify-center items-center ${checkIcon}`}
              >
                여자
              </span>
            </Tab>
          </Tabs>

          <Tabs className="gap-x-2" title={"외국인 이신가요?"}>
            <Tab id="userNation" label="male" className="bg-gray-200" initValue>
              <span
                className={`relative flex gap-x-2 justify-center items-center ${checkIcon}`}
              >
                내국인
              </span>
            </Tab>
            <Tab id="userNation" label="female" className="bg-gray-200">
              <span
                className={`relative flex gap-x-2 justify-center items-center ${checkIcon}`}
              >
                외국인
              </span>
            </Tab>
          </Tabs>

          <Input
            className="rounded-lg"
            id="userBirth"
            type="birth"
            birthFormat="yyyymmdd"
            title={"생년월일을 입력해주세요.(예: 19990101)"}
          >
            법정생년월일 8자리
          </Input>

          <div className="space-y-2">
            <Dropdown
              className="w-full h-12 border rounded-lg"
              id="userPhoneAffili"
              options={phoneAfilliOptions.map((item) => item.name)}
            ></Dropdown>
            <Input className="rounded-lg" id="userPhone" type="phone">
              -없이 휴대폰 번호 입력
            </Input>
          </div>
        </div>

        <div>
          <ListHeader
            border
            className="flex-col h-full !items-start border-gray-400"
          >
            <h3 className="pb-4 font-semibold">휴대전화 인증 약관</h3>
            <Checkbox
              className="mb-2 text-sm"
              id={allCheckId}
              name={"모든 약관에 동의합니다."}
              onClick={handleAllCheck}
            />
          </ListHeader>

          <ListBody className="py-4 space-y-4">
            {termsList.map((term) => (
              <li key={term.id} className="flex items-center justify-between">
                <Checkbox
                  className="text-sm"
                  id={term.id + "_chk"}
                  name={`${term.required ? "[필수]" : "[선택]"} ${term.name}`}
                />
                <Button
                  id="termsbtn_1"
                  className="h-[22px]"
                  type="simple"
                  onClick={() => handleAppRecord(term.id, true)}
                >
                  <DetailArrow />
                </Button>
                {/* --- Terms Content Modal --- */}
                <Modal id={term.id} center>
                  {term.content_url}test
                </Modal>
                {/* --- Validate Modal --- */}
                <Modal id={`${term.id}_valid`} center>
                  <p className="text-sm tracking-[-.3px]">
                    {term.required ? "[필수]" : "[선택]"} {term.name}에
                    동의해주세요.
                  </p>
                  <Button
                    className="mt-5 !h-10"
                    bgColor="black"
                    onClick={() => handleAppRecord(`${term.id}_valid`, false)}
                  >
                    확인
                  </Button>
                </Modal>
              </li>
            ))}
          </ListBody>
        </div>

        <Button
          className="relative my-10"
          bgColor="primary"
          onClick={handleSubmit}
        >
          인증번호 요청
        </Button>
      </TabPannel>

      <TabPannel className="p-0 pb-10" id={certId} label="card">
        <ContentTitle className="py-10 !text-base text-center">
          보유하신 신용/체크카드로
          <br />
          본인인증이 가능합니다.
        </ContentTitle>
        <Input
          className="rounded-lg"
          id="idForCardCert"
          title={`아이디를 입력해주세요.`}
        >
          아이디 입력
        </Input>
        <Button className="my-5" bgColor="primary">
          신용/체크카드 인증
        </Button>
      </TabPannel>
    </div>
  );
}
