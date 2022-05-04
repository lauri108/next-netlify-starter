import Header from "@components/Header";
import EventList from "@components/events/event-list";
import { getAllEvents } from "@helpers/api-util";

function AllEventsPage(props) {
  return (
    <main>
      <Header title="Events" />
      <EventList items={props.events} />
    </main>
  );
}

export async function getStaticProps(){
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents
    }
  }
}

export default AllEventsPage;
