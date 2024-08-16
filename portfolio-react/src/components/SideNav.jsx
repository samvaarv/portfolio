import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  const menuBtnRef = useRef(null);
  const sideNavBlockRef = useRef(null);

  const toggleMenu = () => {
    if (menuBtnRef.current && sideNavBlockRef.current) {
      menuBtnRef.current.classList.toggle("rotate-45");
      sideNavBlockRef.current.classList.toggle("active");
    }
  };

  const toggleBack = () => {
    if (menuBtnRef.current && sideNavBlockRef.current) {
      menuBtnRef.current.classList.toggle("rotate-45");
      sideNavBlockRef.current.classList.toggle("active");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuBtnRef.current) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          menuBtnRef.current.style.transform = "scale(1)";
        } else {
          menuBtnRef.current.style.transform = "scale(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        id="menu-nav-btn"
        onClick={toggleMenu}
        aria-label="Menu Navigation Button"
        ref={menuBtnRef}
      >
        <span className="span"></span>
        <span className="span"></span>
      </button>
      <div className="side-nav-block" id="side_nav_block" ref={sideNavBlockRef}>
        <div className="bg-opacity" onClick={toggleBack}></div>
        <div className="side-nav-content">
          <div className="side-image">
            <img src="images/elements/menusvg.svg" alt="" aria-hidden="true" />
          </div>
          <nav className="side-nav">
            <div className="side-nav-link">
              <span className="side-nav-link-circle"></span>
              <a href="/">Home</a>
            </div>
            <div className="side-nav-link">
              <span className="side-nav-link-circle"></span>
              <a href="/#about">About</a>
            </div>
            <div className="side-nav-link">
              <span className="side-nav-link-circle"></span>
              <a href="/#services">Services</a>
            </div>
            <div className="side-nav-link">
              <span className="side-nav-link-circle"></span>
              <a href="/#works">Works</a>
            </div>
            <div className="side-nav-link">
              <span className="side-nav-link-circle"></span>
              <a href="/#reviews">Reviews</a>
            </div>
            <div className="side-nav-link">
              <span className="side-nav-link-circle"></span>
              <a href="/#contact">Contact</a>
            </div>
          </nav>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/samvaarv" className="nav-link">
                <span className="link1">Facebook</span>
                <span className="link2">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sumin-shrestha/"
                className="nav-link"
              >
                <span className="link1">LinkedIn</span>
                <span className="link2">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/samv_arv/"
                className="nav-link"
              >
                <span className="link1">Instagram</span>
                <span className="link2">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
