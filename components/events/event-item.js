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
  function goToEventDetailPage() {
    router.push(eventLink);
  }
  return (
    <Card sx={{ maxWidth: 260, minHeight: 340 }} onClick={goToEventDetailPage}>
      <CardMedia component="img" height="140" image={`/${image}`} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <time>{humanDate}</time>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <address>{formattedAddress}</address>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href={eventLink}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default EventItem;
