import EventList from "@/components/organisam/EventList";
import { hyphenToSlashDate } from "@/utils/FormatHelpers";

export default function WinEventsPage() {
  const today = hyphenToSlashDate(new Date());
  const winEventList = [
    {
      name: "당첨",
      pathname: "/winevents",
      url: `http://localhost:3030/event?win_date_ne=null`,
    },
  ];
  return <EventList />;
}
