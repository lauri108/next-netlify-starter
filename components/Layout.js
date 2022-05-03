import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "@mui/material";
import classes from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
