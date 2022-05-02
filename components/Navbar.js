import Link from "next/link";
import { ButtonGroup, Button } from "@mui/material";

export default function Navbar() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <Link href="/events">
        <Button>Events</Button>
      </Link>
      <Link href="/contact">
        <Button>Contact</Button>
      </Link>
    </ButtonGroup>
  );
}
