import Head from "next/head";
import Hero2 from "../components/hero2";
import Navbar from "../components/navbar";

import PopupWidget from "../components/popupWidget";


export default function Home() {
  return (
    <>
      <Head>
        <title>Symptom Search</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero2 />
      <PopupWidget />
    </>
  );
}
