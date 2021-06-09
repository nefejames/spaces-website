import Head from "next/head";
import {
  Header,
  Process,
  Hero,
  Team,
  Testimonials,
  CallToAction,
  Footer,
} from "../sections";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spaces Website</title>
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
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
