import { useRouter } from 'next/router'
import Header from "@components/Header";
function EventDetailsPage() {
  const router = useRouter()
  return (
    <main>
      <Header title="Event detail" />
      <p className="description">Event detail</p>
    </main>
  );
}

export default EventDetailsPage;
