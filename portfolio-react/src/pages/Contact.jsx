import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

export default function Contact() {
  const [socialmedia, setSocialMedia] = useState([]);
  useEffect(() => {
    const getSocialMedia = async () => {
      let response = await fetch("http://localhost:8888/api/socialmedia");
      let data = await response.json();
      setSocialMedia(data);
    };
    getSocialMedia();
  }, []);
  return (
    <>
      <main id="main">
        <section id="hero" className="contact-hero relative section-padding">
          <img src="images/elements/eclipse.png" alt="" aria-hidden="true" />
          <div className="title-block relative">
            <div className="title-block-inside">
              <h1 className="h1">
                Say no more. Let's bring your project to life.
              </h1>
            </div>
          </div>
        </section>
        <div className="section-padding">
          <div className="contact-form-block">
            <ContactForm />
            <aside className="link-list">
              <div className="side-block">
                <h2 className="text-bold">
                  Further enquiries or collaboration
                </h2>
                <a href="mailto:samvaarv.vid@gmail.com" className="nav-link">
                  <span className="link1">samvaarv.vid@gmail.com</span>
                  <span className="link2">samvaarv.vid@gmail.com</span>
                </a>
              </div>
              <div className="side-block">
                <h2 className="text-bold">Socials</h2>
                {socialmedia.map((socialmedias) => (
                  <div key={socialmedias.id}>
                    <a href={socialmedias.url} className="nav-link">
                      <span className="link1">{socialmedias.name}</span>
                      <span className="link2">{socialmedias.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
