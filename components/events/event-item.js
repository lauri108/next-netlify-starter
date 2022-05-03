import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { CalendarMonth, LocationOn, EventNote, Share } from "@mui/icons-material";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const router = useRouter();
  const humanDate = new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const eventLink = `/events/${id}`;

  const buttonStyle = {
    ":hover": { background: "#eee" },
  };

  function goToEventDetailPage() {
    router.push(eventLink);
  }
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        maxWidth: 260,
        lineHeight: 0,
        ":hover": { background: "#f5f5f5", boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`/${image}`}
        alt={title}
        onClick={goToEventDetailPage}
        sx={{ ":hover": { cursor: "pointer" } }}
      />
      <CardContent onClick={goToEventDetailPage} sx={{ height: "100%", ":hover": { cursor: "pointer", background: "#f5f5f5", borderColor: "#575757" }, }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: 1, minHeight: "2.5em" }}>
          {title}
        </Typography>
        <Grid container alignItems="center" spacing={1}>
          <Grid item key="dateicon">
            <CalendarMonth />
          </Grid>
          <Grid item key="date">
            <Typography variant="body2" color="text.secondary">
              <time>{humanDate}</time>
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="top" flexWrap="nowrap" spacing={1}>
          <Grid item key="locationicon">
            <LocationOn />
          </Grid>
          <Grid item key="location">
            <Typography variant="body2" color="text.secondary">
              <address>{formattedAddress}</address>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ borderTop: "1px #eee solid" }}>
        <Button sx={buttonStyle} size="small">
          <Share />
          Share
        </Button>
        <Link href={eventLink}>
          <Button sx={buttonStyle} size="small">
            <EventNote />
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default EventItem;
