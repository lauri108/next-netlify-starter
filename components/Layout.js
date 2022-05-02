import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
