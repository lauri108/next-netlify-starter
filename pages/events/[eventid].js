import Header from "@components/Header";
import {getEventId} from '../../dummy-data'
function EventDetailsPage() {
  const router = useRouter()
  const eventId = router.query.eventId
  const event = getEventId(eventId)
  if(!event) {
    return <p>No event found!</p>
  }

  return (
    <main>
      <Header title="Event detail" />
      <p className="description">Event detail</p>
    </main>
  );
}

export default EventDetailsPage;
