"use client";
import Input from "@/components/atoms/Input";
import {KEY} from "@/utils/KeyHelper";
import Button from "@/components/atoms/Button/Button";
import React, {useState} from "react";
import PostCodeDaum from "@/components/atoms/PostCodeDaum";
import {DaumAddressType} from "@/types/DaumAddressType";

export default function SignUpForm(

) {
// input data 입력값 저장
    const [formData, setFormData] = React.useState({
        [KEY.USERID]: '',
        [KEY.USERPASSWORD]: '',
        [KEY.NAME]: '',
        [KEY.PHONE]: '',
        [KEY.POSTCODE]: '',
        [KEY.ADRESS]: '',
        [KEY.DETAILADRESS]: '',
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        console.log("Changed ID:", id);
        console.log("Changed Value:", value);
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    }
    const [isView, setIsView] = useState<boolean>(true);
    const [address, setAddress] = useState<DaumAddressType>();

    return(
        <>
            <div className="flex mb-4">
                {/*아이디*/}
                <div className="w-full">
                    <Input
                        className="rounded-lg"
                        titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
                        id={KEY.USERID}
                        type={'text'}
                        title="아이디"
                        onChange={handleInputChange}
                    >
                        {/*place holder 안사라짐*/}
                        영문, 숫자 6~20자리 입력해주세요.
                    </Input>
                </div>
                <Button
                    backgroundColor={'white'}
                    className={'h-12 text-sm font-normal ml-[5px] block !w-auto break-keep p-3 translate-y-[60%]'}>
                    중복확인
                </Button>
            </div>
            {/*비밀번호*/}
            <Input
                className="rounded-lg mb-4"
                titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
                id={KEY.USERPASSWORD}
                type={'password'}
                title="비밀번호"
            >
                영문 대/소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해 주세요.
            </Input>
            <Input
                className="rounded-lg mb-4"
                titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
                id={KEY.USERPASSWORDCHECK}
                type={'password'}
                title="비밀번호 확인"
            >
                입력하신 비밀번호를 다시 한번 입력해주세요.
            </Input>
            {/*이름*/}
            <Input
                className="rounded-lg mb-4"
                titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
                id={KEY.NAME}
                type={'text'}
                title="이름"
            >
                {/* 폱 번호 */}
            </Input>
            <Input
                className="rounded-lg mb-4"
                titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
                id={KEY.PHONE}
                type={'phone'}
                title="휴대폰 번호"
            >
                {/* 우편번호 */}
            </Input>
            <div className="flex mb-2">
                <div className="w-full">
                    <Input
                        className="rounded-lg"
                        titleClass="after:content-['*'] after:inline-block after:text-[#eb0000]"
                        id={KEY.POSTCODE}
                        title="자택주소"
                        disabled
                    >
                        우편번호
                    </Input>
                </div>
                <Button
                    backgroundColor={'white'}
                    className={'h-12 text-sm font-normal ml-[5px] block !w-auto break-all p-3 translate-y-[60%]'}>
                    우편번호 찾기
                </Button>
            </div>
            <PostCodeDaum isView={isView} setIsView={setIsView} setAddress={setAddress}/>

            {/*주소찾기*/}
            <Input
                className="rounded-lg mb-2"
                id={KEY.ADRESS}
                disabled
            />
            {/*상세주소*/}
            <Input
                className="rounded-lg mb-4"
                id={KEY.DETAILADRESS}
            >
                상세주소
            </Input>
        </>
    );
};
