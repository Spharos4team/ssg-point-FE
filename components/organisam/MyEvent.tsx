'use client';
import {usePathname} from "next/navigation";
import NoTxt from "@/components/atom/NoTxt";
import Box from "@/components/atom/Box";
import Paper from "@/components/atom/Paper";

type EventType = {
  id: number;
  name: string;
  thumb: string;
  banner_thumb: string;
  win_date: string;
  start_date: string;
  end_date: string;
};

export default function MyEvent() {
  const currPathname = usePathname();
  const getMessage = (currPathname: any) => {
    switch (currPathname) {
      case "/benefits/myEvent":
        return "참여 이벤트가 없습니다.";
      case "/benefits/winEvent":
        return "당첨 이벤트가 없습니다.";
    }
  };
  const state = getMessage(currPathname);
  return (
      <>
        <div className="pt-4 pb-20 px-5">
        <Paper className="py-10 border-[1px] border-dashed border-[#bababa] bg-white">
        <NoTxt className="text-[13px] ">{state}</NoTxt>
        </Paper>
        </div>

      </>
  );
}
