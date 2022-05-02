import EventList from "@components/events/event-list";
import Header from "@components/Header";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <main>
      <Header title="Event guide" />
      <h3>Featured events</h3>
      <EventList items={featuredEvents} />
    </main>
  );
}
