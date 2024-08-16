import About from "../components/About";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Works from "../components/Works";

export default function Index() {
  return (
    <>
    <main id="main">
      <Hero />
      <div className="content-block relative">
        <About />
        <Services />
        <Works />
      </div>
      <div className="content-block-second">
        <div aria-hidden="true" className="relative h-svh"></div>
        <Reviews />
      </div>
      <Contacts />
    </main>
    </>
  );
}
