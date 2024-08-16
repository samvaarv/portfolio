import { Link } from "react-router-dom";
import LocalTime from "./LocalTime";
import { useState, useEffect } from "react";

export default function Header() {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <footer id="footer" className="relative">
      <img
        className="bg-eclipse"
        src="images/elements/eclipse.png"
        alt=""
        aria-hidden="true"
      />
      <div className="footer-link-block">
        <div className="footer-nav-link">
          <span>Navigation</span>
          <div className="nav-link-block">
            <a href="/" className="nav-link">
              <span className="link1">Home</span>
              <span className="link2">Home</span>
            </a>
            <a href="/#about" className="nav-link">
              <span className="link1">About</span>
              <span className="link2">About</span>
            </a>
            <a href="/#services" className="nav-link">
              <span className="link1">Services</span>
              <span className="link2">Services</span>
            </a>
            <a href="/#works" className="nav-link">
              <span className="link1">Works</span>
              <span className="link2">Works</span>
            </a>
            <a href="/#reviews" className="nav-link">
              <span className="link1">Reviews</span>
              <span className="link2">Reviews</span>
            </a>
            <a href="/contact" className="nav-link">
              <span className="link1">Contact</span>
              <span className="link2">Contact</span>
            </a>
          </div>
        </div>
        <div className="footer-nav-link">
          <span>Socials</span>
          <div className="nav-link-block">
            {socialmedia.map((socialmedias) => (
              <div key={socialmedias.id}>
                <a href={socialmedias.url} className="nav-link">
                  <span className="link1">{socialmedias.name}</span>
                  <span className="link2">{socialmedias.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-sub">
        <div className="copyright">
          <span>&copy; 2024</span>
          <span>Sumin Shrestha</span>
        </div>
        <LocalTime />
        <div className="btn-block">
          <button id="go-to-top" onClick={goToTop}>
            <span>
              <img src="images/elements/arrow.svg" alt="" aria-hidden="true" />
            </span>
            <span>
              <img src="images/elements/arrow.svg" alt="" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
