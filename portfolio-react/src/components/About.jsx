export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="relative">
        <h2 className="section-heading relative">About Me.</h2>
        <img
          className="rectangle rectangle-one"
          src="images/elements/rectangle-one.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="rectangle rectangle-two"
          src="images/elements/rectangle-two.png"
          alt=""
          aria-hidden="true"
        />
        <div className="user-image">
          <img
            srcSet="images/sumin@1x.png 1x, images/sumin@2x.png 2x"
            src="images/sumin.png"
            alt="Sumin Shrestha"
          />
          <div className="opac w-100"></div>
        </div>
      </div>
      <div className="body-text relative">
        <p>
          Empowering brands to thrive digitally is my expertise. With my skills
          in web development, graphic design, and illustration, I enable my
          clients with result-driven captivating solutions. From engaging web
          experiences to enchanting illustrations and helping my clients stand
          out, gain a competitive edge, and maximize profitability.
        </p>
      </div>
    </section>
  );
}
