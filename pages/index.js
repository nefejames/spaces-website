import Head from "next/head";
import { Header, Process, Hero, Team, CallToAction, Footer } from "../sections";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta
          name="description"
          content="Landing page developed by Emadamerho-Atori Nefe aka daddynefs aka nefejames"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Process />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}
