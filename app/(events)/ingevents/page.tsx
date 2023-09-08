import EventList from "@/components/organisam/EventList";
import { hyphenToSlashDate } from "@/utils/FormatHelpers";

export default function IngEventsPage() {
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
  ];
  return <EventList />;
}
