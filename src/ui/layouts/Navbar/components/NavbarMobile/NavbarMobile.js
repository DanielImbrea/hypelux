import React from "react";
import { Link, navigate } from "gatsby";
import classNames from "classnames";
import "./NavbarMobile.styles.scss";

const NavbarMobile = ({ isVisible, setIsMenuActive }) => {
  const handleScroll = e => {
    e.preventDefault();
    const id = e?.target?.dataset?.section;

    const element = document.querySelector(`#${id}`);

    if (!element) {
      navigate("/");
    }

    setIsMenuActive(false);

    element &&
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  return (
    <div
      className={classNames("navbar-mobile", {
        "navbar-mobile--active": isVisible,
      })}
    >
      <div className="navbar-mobile__inner">
        <div className="navbar-mobile__links">
          <div
            className="navbar-mobile__link"
            data-section="advantages"
            onClick={handleScroll}
          >
            About us
          </div>
          {/* <div
            className="navbar-mobile__link"
            onClick={handleScroll}
            data-section="solutions"
          >
            Solutions
          </div> */}
          {/* <div
            className="navbar-mobile__link"
            onClick={handleScroll}
            data-section="projects"
          >
            Projects
          </div>
          <div
            className="navbar-mobile__link"
            onClick={handleScroll}
            data-section="pricing"
          >
            Pricing
          </div> */}
          {/* <div
            className="navbar-mobile__link"
            onClick={handleScroll}
            data-section="testimonials"
          >
            Testimonials
          </div> */}
          <div
            className="navbar-mobile__link"
            onClick={handleScroll}
            data-section="contact"
          >
            Contact
          </div>
          <div className="navbar-mobile__link">
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
