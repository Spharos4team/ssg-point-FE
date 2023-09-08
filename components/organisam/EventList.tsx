"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ListHeader from "../atom/ListHeader";
import Dropdown from "../atom/Dropdown";
import ListBody from "../atom/ListBody";
import Image from "next/image";
import Subtitle from "../atom/Subtitle";
import { dateFormatter, hyphenToSlashDate } from "@/utils/FormatHelpers";
import { FetchListByFetchItem } from "@/utils/Fetch";
import { useAppContext } from "@/provider/AppContextProvider";
import Link from "next/link";

type EventType = {
  id: number;
  name: string;
  thumb: string;
  banner_thumb: string;
  win_date: string;
  start_date: string;
  end_date: string;
};

export default function EventList() {
  const currPathname = usePathname();
  const router = useRouter();
  const { appValueList } = useAppContext();
  const [eventList, setEventList] = useState([]);

  const ingFetchValue = appValueList["ingevent"];

  const today = hyphenToSlashDate(new Date());

  const eventFetchList = [
    {
      name: "최신순",
      pathname: "/ingevents",
      url: `http://localhost:3030/event?_sort=start_date&_order=desc&end_date_gte=${today}`,
    },
    {
      name: "마감임박",
      pathname: "/ingevents",
      url: `http://localhost:3030/event?_sort=end_date&_order=asc&end_date_gte=${today}`,
    },
    {
      name: "종료",
      pathname: "/endevents",
      url: `http://localhost:3030/event?_sort=start_date&_order=desc&end_date_lte=${today}`,
    },
    {
      name: "당첨",
      pathname: "/winevents",
      url: `http://localhost:3030/event?win_date_ne=null`,
    },
  ];

  const whiteList = [...new Set(eventFetchList.map((i) => i.pathname))];
  const ingEventList = eventFetchList.filter((i) => i.pathname == whiteList[0]);
  const endEventList = eventFetchList.filter((i) => i.pathname == whiteList[1]);
  const winEventList = eventFetchList.filter((i) => i.pathname == whiteList[2]);

  useEffect(() => {
    if (!whiteList.includes(currPathname)) {
      router.push(whiteList[0]);
    }

    if (currPathname == whiteList[0]) {
      const thisFetchValue = FetchListByFetchItem(
        ingFetchValue as string,
        ingEventList
      );
      thisFetchValue
        .then((v) => {
          setEventList(v);
        })
        .catch((e) => console.log(e));
    } else if (currPathname == whiteList[1]) {
      const thisFetchValue = FetchListByFetchItem("종료", endEventList);
      thisFetchValue
        .then((v) => {
          setEventList(v);
        })
        .catch((e) => console.log(e));
    } else if (currPathname == whiteList[2]) {
      const thisFetchValue = FetchListByFetchItem("당첨", winEventList);
      thisFetchValue
        .then((v) => {
          setEventList(v);
        })
        .catch((e) => console.log(e));
    }
  }, [ingFetchValue]);

  return (
    <>
      <div className={`mt-[36px] `}>
        {currPathname === whiteList[0] ? (
          <>
            {/* list header */}
            <ListHeader>
              {/* dropdown */}
              <Dropdown
                id={"ingevent"}
                options={ingEventList.map((i) => i.name)}
              />
            </ListHeader>
          </>
        ) : (
          <></>
        )}
      </div>

      {/* ------ Event List Body ------ */}
      <ListBody>
        {eventList &&
          eventList.map((item: EventType) => (
            <li key={item.id}>
              <Link
                className="relative"
                href={{ pathname: `/winEvent`, query: { detail: item.name } }}
              >
                {item.end_date < today ? (
                  <div
                    className={`absolute flex items-center h-full w-full bg-black bg-opacity-50 ${
                      item.win_date !== "null"
                        ? "before:absolute before:block before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[120px] before:h-[120px] before:bg-[url('/images/resources/event_info_bg.png')] before:bg-no-repeat before:bg-[100%_auto] before:bg-top"
                        : ""
                    }`}
                  >
                    {item.win_date !== "null" ? (
                      <span className="relative flex justify-center bg-clip-text text-transparent items-center w-[100px] h-[100px] text-[20px] bg-gradient-primary-clip font-semibold mx-auto ">
                        당첨발표
                      </span>
                    ) : (
                      <span className="flex justify-center items-center text-[20px] text-white font-semibold w-[120px] h-[120px] mx-auto bg-[url('/images/resources/event_info_bg.png')] bg-no-repeat bg-[100%_auto] bg-bottom">
                        종료
                      </span>
                    )}
                  </div>
                ) : (
                  <></>
                )}
                <Image
                  src={`https://storage.googleapis.com/ssg-images${item.thumb}`}
                  width={750}
                  height={450}
                  alt=""
                />
              </Link>
              <div className="px-5 pt-2 pb-5">
                <p className="text-base font-medium text-left whitespace-nowrap text-ellipsis overflow-hidden">
                  {item.name}
                </p>
                <Subtitle className="!pt-1">
                  {`${dateFormatter(item.start_date)} ~ ${dateFormatter(
                    item.end_date
                  )}`}
                </Subtitle>
              </div>
            </li>
          ))}
      </ListBody>
    </>
  );
}
