"use client";
import { useEffect, useState } from "react";
import IndexStat from "../atom/IndexStat";
import ListBody from "../atom/ListBody";
import { useSession } from "next-auth/react";

export default function MyPointList() {
  const session = useSession();
  const [thisList, setThisList] = useState();

  const myPointList = async (uuid) => {
    const res = await fetch(
      `http://3.35.193.212:8000/api/v1/point/gift-list?UUID=${uuid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${session.data?.user.access_token}`,
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  };
  useEffect(() => {
    const myUuid = session.data?.user?.user.uuid;
    setThisList(myPointList(myUuid));
  }, []);

  return (
    <ListBody className="!my-0 divide-y border-b">
      {thisList?.content?.map((i) => (
        <li key={i.id} className="flex justify-start py-4">
          <div className="min-w-[90px]">
            <IndexStat type="consumption" textHidden />
          </div>
          <div className="flex flex-col w-full items-center px-2">
            <p className="w-full text-xs text-gray-400">보낸 선물: 수락</p>
            <p className="w-full">{}</p>
          </div>
          <div>
            <p className="text-[11px] min-w-[62px] text-gray-400">2023-08-29</p>
          </div>
        </li>
      ))}
    </ListBody>
  );
}
