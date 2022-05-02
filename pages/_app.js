import "@styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Footer from "@components/Footer";

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
