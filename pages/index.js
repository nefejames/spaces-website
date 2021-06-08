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

// use same padding for header like rest of SemiBoldText
//remove box colors. est stuff on content layout shift with images

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
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
