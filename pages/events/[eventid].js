import { useRouter } from 'next/router'
import Header from "@components/Header";
import {getEventById} from '../../dummy-data'
import EventDetail from '@components/event-detail/event-detail';


function EventDetailsPage() {
  const router = useRouter()
  const eventId = router.query.eventId
  const event = getEventById(eventId)
  if(!event) {
    return <p>No event found!</p>
  }

  return (
      <EventDetail event={event} />
  );
}

export default EventDetailsPage;
