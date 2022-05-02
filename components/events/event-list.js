import { Grid } from "@mui/material";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <Grid container spacing={4}>
      {items.map((event) => (
        <Grid item>
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
