import EventList from "@components/events/event-list";
import Header from "@components/Header";
import { getFeaturedEvents } from "@helpers/api-util";

export default function Home(props) {
  return (
    <main>
      <h3>Featured events</h3>
      <EventList items={props.events} />
    </main>
  );
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    }
  }
}
