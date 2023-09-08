import EventList from "@/components/organisam/EventList";
import { hyphenToSlashDate } from "@/utils/FormatHelpers";

export default function EndEventsPage() {
  const today = hyphenToSlashDate(new Date());
  const eventFetchList = [
    {
      name: "종료",
      pathname: "/endevents",
      url: `http://localhost:3030/event?_sort=start_date&_order=desc&end_date_lte=${today}`,
    },
  ];
  return <EventList />;
}
