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
import { makeStyles } from "@mui/material/styles";

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
        ":hover": { cursor: "pointer", background: "#f5f5f5", borderColor: "#575757" },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`/${image}`}
        alt={title}
        onClick={goToEventDetailPage}
      />
      <CardContent onClick={goToEventDetailPage} sx={{ height: "100%" }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <time>{humanDate}</time>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <address>{formattedAddress}</address>
        </Typography>
      </CardContent>
      <CardActions sx={{ borderTop: "1px #eee solid" }}>
        <Button sx={buttonStyle} size="small">
          Share
        </Button>
        <Link href={eventLink}>
          <Button sx={buttonStyle} size="small">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default EventItem;
