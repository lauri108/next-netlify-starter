import { Grid } from "@mui/material";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <Grid container spacing={4} alignItems="stretch">
      {items.map((event, index) => (
        <Grid item key={event.id} style={{ display: "flex" }}>
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
            location={event.location}
            date={event.date}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default EventList;
