"use client";
import { useSession } from "next-auth/react";
import Card from "../atom/Card";
import ContentTitle from "../atom/ContentTitle";
import { useEffect, useState } from "react";
import IndexStat from "../atom/IndexStat";
import Button from "../atom/Button";
import ListItem from "../atom/ListItem";

/**
 * @type myPoint
 * @returns ReactNode
 */
export default function MyPointGift() {
  const [fromUserId, setFromUserId] = useState("");
  const session = useSession();
  const [thisGift, setThisGift] = useState();

  const myPointGift = async (name) => {
    const res = await fetch(
      `http://3.35.193.212:8000/api/v1/point/gift-check?name=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${session.data?.user.access_token}`,
        },
        next: {
          revalidate: 1000,
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  };

  const pointAcceptOrDeny = async (id, status) => {
    const res = await fetch(
      `http://3.35.193.212:8000/api/v1/point/gift?id=${id}&status=${status}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
          Accept: "application/json",
          Authorization: `Bearer ${session.data?.user.access_token}`,
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  };

  useEffect(() => {
    const myGift = myPointGift(session.data?.user?.user?.name);
    myGift.then((i) => {
      setThisGift(i);
      setFromUserId(i.id);
    });
  }, []);

  const plus =
    "before:w-[20px] before:h-[20px] before:rounded-full before:bg-[#ea035c] before:bg-[url('/images/plus.png')] before:bg-[10px_auto] before:bg-center before:bg-no-repeat";

  const handleAccept = async () => {
    const id = fromUserId;
    const status = 1;
    pointAcceptOrDeny(id, status);
    setThisGift();
  };
  const handleDeny = () => {
    const id = fromUserId;
    const status = 2;
    pointAcceptOrDeny(id, status);
    setThisGift();
  };
  return thisGift ? (
    <div className="px-5">
      <h3 className="text-benefits text-lg font-medium pb-2">
        🎉 포인트 선물 수랑을 기다리고 있어요!
      </h3>
      <Card className="border-benefits" border shadow>
        <div className="flex justify-between text-[12px] text-gray-500">
          <p>보낸사람:</p>
          <p>{thisGift.localDate}</p>
        </div>
        <p className="text-[16px] pt-2">{`${thisGift.name}(ID:${thisGift.loginId})`}</p>
        <div className="flex gap-x-2 items-center w-full">
          {" "}
          {/* <IndexStat type="accumulate" textHidden /> */}
          <p
            className={`flex w-full items-center gap-x-1 h-[20px] text-[20px] font-bold text-[#ea035c] ${plus}`}
          >
            <span className="pl-1">{`${thisGift.point}P`}</span>
          </p>
          <Button
            className="w-full !bg-benefits border-0 text-white"
            onClick={handleAccept}
          >
            수락
          </Button>
          <Button className="w-full" onClick={handleDeny}>
            거절
          </Button>
        </div>
        <ul className="pt-5">
          <ListItem bullet>
            수락 유효기간은 보낸 날짜로부터 15일 입니다.
          </ListItem>
        </ul>
      </Card>
    </div>
  ) : (
    <></>
  );
}
