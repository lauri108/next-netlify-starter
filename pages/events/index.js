import Header from "@components/Header";
import EventList from "@components/events/event-list";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <main>
      <Header title="Events" />
      <EventList items={events} />
    </main>
  );
}

export default AllEventsPage;
