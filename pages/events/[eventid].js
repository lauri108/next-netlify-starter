import { useRouter } from 'next/router'
import Header from "@components/Header";
import {getEventById, getAllEvents} from '@helpers/api-util'
import EventDetail from '@components/event-detail/event-detail';


export default function EventDetailsPage(props) {
  if(!props.foundEvent) {
    return <p>No event found!</p>
  }

  return (
      <EventDetail event={props.foundEvent} />
  );
}

export async function getStaticProps(context){
  const eventId = context.params.eventid
  const event = await getEventById(eventId);
  return {
    props: {
      foundEvent: event
    }
  }
}

export async function getStaticPaths(){
  const events = await getAllEvents();
  const paths = events.map(event => ({params: {eventid: event.id}}))
  return {
    paths: paths,
    fallback: false
  }
}

