"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Modal from "../atom/Modal";
import ContentTitle from "../atom/ContentTitle";
import Subtitle from "../atom/Subtitle";

export default function FormPntGift() {
  const { appValueList, handleAppRecord } = useAppContext();
  const handleAddressBook = () => {
    handleAppRecord("AddressBook", true);
  };
  return (
    <>
      <div className="px-5">
        <div className="flex gap-x-2 pb-2">
          <Input className="rounded-lg" id="addressBook" type="phone">
            - 없이 휴대폰 번호를 입력해주세요.
          </Input>
          <div>
            {/* TODO: 선물하기 api 확인 후 기능 추가 */}
            <Button className="w-1/4 min-w-[110px]" onClick={handleAddressBook}>
              주소록
            </Button>
          </div>
        </div>
        <Input className="rounded-lg" id="tagetUser">
          실명을 정확하게 입력해주세요.
        </Input>
      </div>

      <div className="px-5 py-10">
        <Button bgColor="black">조회하기</Button>
      </div>

      <Modal id="AddressBook" center>
        <ContentTitle>
          현재 선물하기를 위한 주소록 기능을 사용할 수 없습니다.
        </ContentTitle>
        <Subtitle>모바일에서 이용해 주세요.</Subtitle>
      </Modal>
    </>
  );
}
