import { CalendarMonth, LocationOn, EventNote, Share } from "@mui/icons-material";
import { Card, Grid, CardContent, Typography } from "@mui/material";
import classes from "./event-detail.module.css";

function EventDetail(props) {
  const { event } = props;
  const title = event.title;
  const description = event.description;
  const address = event.location;
  const date = event.date;
  const image = event.image;
  const imageAlt = event.title;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item>
        <div className={classes.image}>
          <img src={`/${image}`} alt={imageAlt} />
        </div>
      </Grid>
      <Grid item className={classes.eventInfo}>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item>
                <CalendarMonth className={classes.eventIcon} />
              </Grid>
              <Grid item>
                <Typography variant="body1" color="text.primary" className={classes.eventDetails}>
                  {humanReadableDate}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <LocationOn className={classes.eventIcon} />
              </Grid>
              <Grid item>
                <Typography variant="body1" color="text.primary" className={classes.eventDetails}>
                  {addressText}
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{flexWrap: 'nowrap'}}>
              <Grid item>
                <EventNote className={classes.eventIcon} />
              </Grid>
              <Grid item>
                <Typography variant="body1" color="text.secondary" className={classes.eventDescription}>
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EventDetail;
