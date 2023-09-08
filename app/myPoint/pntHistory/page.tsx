"use client";
import ListBody from "@/components/atom/ListBody";
import Paper from "@/components/atom/Paper";
import Tab from "@/components/atom/Tab";
import TabPannel from "@/components/atom/TabPannel";
import Tabs from "@/components/atom/Tabs";
import PointCard from "@/components/module/PointCard";
import BoardListHeader from "@/components/module/BoardListHeader";
import Image from "next/image";
import IndexStat from "@/components/atom/IndexStat";
import IndexIcon from "@/components/atom/IndexIcon";
import Subtitle from "@/components/atom/Subtitle";

import { KEY } from "@/utils/KeyHelper";
import pntHistoryJson from "@/data/pointTest.json";

export default function PntHistoryPage() {
  const linkRightArrow =
    "before:absolute before:right-0 before:top-1/2 before:w-[6px] before:h-[10px] before:mt-[-4.5px] before:bg-[url('/images/arrow_left.png')] before:bg-[100%_auto] before:rotate-180 before:opacity-40";

  const thisFetchList = [
    {
      name: "1주일",
      pathname: "",
      url: `http://localhost:3030/coupon?_sort=start_date&_order=desc`,
    },
    {
      name: "1개월",
      pathname: "",
      url: `http://localhost:3030/coupon?_sort=end_date&_order=asc`,
    },
    {
      name: "3개월",
      pathname: "",
      url: `http://localhost:3030/coupon?_sort=start_date&_order=desc`,
    },
    {
      name: "6개월",
      pathname: "",
      url: `http://localhost:3030/coupon?_sort=start_date&_order=desc`,
    },
    {
      name: "직접입력",
      pathname: "",
      url: ``,
    },
  ];

  return (
    <>
      <div className="mt-[36px]">
        <PointCard type="simple" />
      </div>
      <Paper className="flex justify-center " bgColor="bg-[#fcebf1]">
        <div className="flex gap-x-2 w-[308px] py-4">
          <Image
            className="my-auto"
            src={"/images/resources/myPoint/icon_history.png"}
            width={40}
            height={40}
            alt=""
          />
          <div className="relative flex flex-col">
            <p className="text-[13px] text-mypoint font-medium">
              내가 어디서 뭘 샀더라
            </p>
            <button className={`relative text-xs pr-3 ${linkRightArrow}`}>
              신세계포인트 영수증 한 번에 모아보기
            </button>
          </div>
        </div>
      </Paper>

      {/* --- Point History List --- */}
      <div className="pt-5 px-5">
        <Tabs className="border-gray-500 border-b -z-10">
          <Tab
            id="pntHistorySort"
            label="pntHistoryAll"
            activeColor="benefits"
            initValue
            noBg
          >
            전체
          </Tab>
          <Tab
            id="pntHistorySort"
            label="pntHistoryAccum"
            activeColor="benefits"
            noBg
          >
            적립/사용
          </Tab>
          <Tab
            id="pntHistorySort"
            label="pntHistoryGift"
            activeColor="benefits"
            noBg
          >
            선물
          </Tab>
          <Tab
            id="pntHistorySort"
            label="pntHistoryConv"
            activeColor="benefits"
            noBg
          >
            전환
          </Tab>
        </Tabs>

        <BoardListHeader
          dropdownId={KEY.PNTDROPDOWN}
          options={thisFetchList.map((i) => i.name)}
          rightButton
          buttonUrl="/images/icon_filter.png"
        />

        <TabPannel className="!p-0" id="pntHistorySort" label="pntHistoryAll">
          <Paper className="felx py-3 !px-0" bgColor="bg-[#f8f8f8]">
            {/* TODO: 적립, 사용 포인트 props */}
            <IndexStat className="inline-flex" type="accumulate" />
            <IndexStat className="inline-flex" type="consumption" />
          </Paper>

          <ListBody className="pb-20">
            {pntHistoryJson.content.map((content) => (
              <li
                key={content.pointId}
                className="flex justify-between py-3 border-b"
              >
                <div className={`flex gap-x-2 text-benefits`}>
                  <IndexIcon className="mt-1" type="accumulate" />
                  <p className="text-[13px] leading-[21px] font-medium w-[80px]">
                    {content.point}P
                    <span className="block text-[11px]">
                      {content.type}
                      {content.statusType}
                    </span>
                  </p>
                </div>

                <div className="w-4/6">
                  <p className="text-sm">{content.title}</p>
                  <Subtitle className="!pt-1 !text-[10px]">
                    {content.content}
                  </Subtitle>
                </div>

                <div className="min-w-[62px]">
                  <Subtitle className="!pt-1 !text-[10px]">
                    {content.createdDate.split("T")[0]}
                  </Subtitle>
                </div>
              </li>
            ))}
          </ListBody>
        </TabPannel>
      </div>
    </>
  );
}
