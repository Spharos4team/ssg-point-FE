<<<<<<< HEAD
import Image from 'next/image'
import Link from "next/link";
import RoundedButton from "@/components/atoms/Button/RoundedButton";
import React from "react";

export default function Home() {
    return (
        <>
            <div className="top_cnt0 al_c px-5 py-10 !text-center">
                <p className="img_area mb-6">
                    <Image
                        className="w-full h-auto"
                        src={"/images/myluck_img.png"}
                        alt={"운수대통"}
                        width={670}
                        height={560}/>
                </p>
                <p className="sp_tit2 font-medium text-[24px] leading-[34px] break-keep">
                     신세계 포인트
                    <span className="fc_gradi bg-gradient-primary-line2 bg-clip-text text-transparent">운세서비스</span>
                </p>
                <p className="sp_tit1 mg_t8 !mt-2 text-[20px] leading-[30px] font-[400] break-keep -tracking-[0.5px]">2023년 무료 신토정비결</p>
                <p className="sp_txt6">
                    오늘의 운세, 오늘의 띠별운세<br/>오늘의 타로, 신년타로 제공
                </p>
            </div>
            <div className="cnt_box0 px-5 pb-10">
                <div className="btn_box ">
                    <RoundedButton className="" backgroundColor="primary">나의 운세 보러가기</RoundedButton>
                </div>
            </div>
            <div className="pt-8 px-5 pb-20 bg-[#fbfbfb]">
                <h3 className="tit pb-2 text-[14px] leading-6 font-[500]">유의사항</h3>
                <ul className="list_cnt list-none">
                    <li className="relative text-[12px] leading-5 text-[#767676] pl-[7px] -tracking-[0.5px]
                    before:content-'·' before:absolute before:leading-5 before:text-[12px] before:text-[(118,118,118)] before:font-[700] before:bg-no-repeat ">
                    운세의 모든 서비스는 신세계포인트와 제휴를 맺은 ㈜고든에서 제공 및 관리합니다.
                    </li>
                    <li className="mt-1 relative text-[12px] leading-5 text-[#767676] pl-[7px] -tracking-[0.5px]
                    before:content-'·' before:absolute before:leading-5 before:text-[12px] before:text-[(118,118,118)] before:font-[700]">
                    서비스 이용 관련 자세한 내용은 ㈜고든으로 문의해주시기 바랍니다.
                    <br/>㈜고든 고객센터 : 070-7600-9624
                    </li>
                </ul>
            </div>
        </>
    )
=======
import Button from '@/components/atom/Button';
import LoginRedirector from '@/components/atom/LoginRedirector';
import Image from 'next/image';
import Link from 'next/link';
import ListBody from '@/components/atom/ListBody';
import ListHeader from '@/components/atom/ListHeader';
import ListItem from '@/components/atom/ListItem';

export default function BenefitMyLuckPage() {
  return (
    <>
      <LoginRedirector />
      <div className="mt-[36px]">
        <div className="px-5 pt-10 pb-14 text-center">
          <div className="relative w-full min-h-[85vw]">
            <Image
              src={'https://storage.googleapis.com/ssg-images/pntPlus/myLuck_banner.png'}
              objectFit="contain"
              fill
              alt=""
            />
          </div>
          <p className="text-[6vw] font-medium pb-2">
            신세계포인트{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">운세서비스</span>
          </p>
          <p className="text-[5vw] pb-2">2023년 무료 신토정비결</p>
          <p className="text-[4vw] text-gray-500">
            오늘의 운세, 오늘의 띠별운세
            <br /> 오늘의 타로, 신년타로 제공
          </p>
        </div>
      </div>
      <div className="px-5 pb-10">
        <Link
          className="block w-full h-12 font-medium text-[14px] text-center py-3 bg-gradient-primary rounded-lg"
          href={'https://shinsegaepoint.sinbiun.com/mobile/'}
          target="_blank"
        >
          나의 운세 보러가기
        </Link>
      </div>
      <ListBody className="px-5 pb-10">
        <ListHeader className="text-sm h-auto leading-7 font-medium bg-[#fbfbfb]">
          유의사항
        </ListHeader>
        <ListItem bullet className="text-xs text-[#767676]">
          운세의 모든 서비스는 신세계포인트와 제휴를 맺은 ㈜고든에서 제공 및 관리합니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          서비스 이용 관련 자세한 내용은 ㈜고든으로 문의해주시기 바랍니다.
        </ListItem>
        <ListItem className="ml-[7px] text-xs text-[#767676]">㈜고든 고객센터 : 070-7600-9624</ListItem>
      </ListBody>
    </>
  );
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
}
