"use client";
import Dropdown from "@/components/atom/Dropdown";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import Subtitle from "@/components/atom/Subtitle";
import { useAppContext } from "@/provider/AppContextProvider";
import { FetchListByFetchItem } from "@/utils/Fetch";
import { dateFormatter, hyphenToSlashDate } from "@/utils/FormatHelpers";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type EventType = {
  id: number;
  name: string;
  thumb: string;
  banner_thumb: string;
  win_date: string;
  start_date: string;
  end_date: string;
};

export default function EventStatusPage() {
  const whiteList = ["ingevents", "endevents", "winevents"];
  // TODO: 위 whiteList 외의 경로는 차단

  const byFetchingId = "coupon_sort";
  const { appValueList, handleAppRecord } = useAppContext();
  const [eventList, setEventList] = useState([]);
  const fetchValue = appValueList[byFetchingId];

  const today = hyphenToSlashDate(new Date());
  const currPathname = usePathname();

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

  useEffect(() => {
    console.log(
      "test",
      eventFetchList.filter((i) => i.pathname == currPathname)
    );
  }, []);

  const thisFetchValue = FetchListByFetchItem(
    fetchValue as string,
    eventFetchList.filter((i) => i.pathname == currPathname)
  );

  useEffect(() => {
    // /ingevents가 아니라면 fetchValue를 자동으로 업데이트해야 함
    thisFetchValue
      .then((v) => {
        setEventList(v);
        console.log(today, currPathname);
      })
      .catch((e) => console.log(e));
  }, [fetchValue]);

  return (
    <>
      <div className={`mt-[36px] `}>
        {currPathname === "/ingevents" ? (
          <>
            {/* list header */}
            <ListHeader>
              {/* dropdown */}
              <Dropdown
                id={byFetchingId}
                name={byFetchingId}
                options={eventFetchList
                  .filter((i) => i.pathname == currPathname)
                  .map((i) => i.name)}
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
            <li>
              <Image
                className="w-full"
                src={`https://storage.googleapis.com/ssg-images${item.thumb}`}
                width={750}
                height={450}
                alt=""
              />
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
