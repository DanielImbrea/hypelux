import React, { useState, useEffect } from "react";
import _ from "lodash";
import classNames from "classnames";
import { Link, navigate } from "gatsby";
import { Portal } from "react-portal";

import {
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

import NavbarMobile from "./components/NavbarMobile";
import SearchContainer from "@containers/SearchPopup";
import { FiX, FiSearch } from "react-icons/fi";
import StaticImage from "@components/StaticImage";

import "./Navbar.styles.scss";

const Navbar = ({ color, isFixed = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    isScrolled();
    window.addEventListener("scroll", isScrolled);
    window.addEventListener("resize", _.throttle(isScrolled, 150));

    return () => {
      window.removeEventListener(
        "resize",
        _.throttle(checkIfMobile, 150),
        true,
      );
      window.removeEventListener(
        "scroll",
        _.throttle(isScrolled, 150),
        true,
      );
      window.removeEventListener(
        "resize",
        _.throttle(isScrolled, 150),
      );
      enableBodyScroll();
    };
  }, []);

  const handleMenuTrigger = () => {
    if (!isMenuActive) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    setIsMenuActive(!isMenuActive);
  };

  const isScrolled = () => {
    const scrolled = window.pageYOffset;

    if (scrolled > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const checkIfMobile = () => {
    setIsMobile(document.body.clientWidth < 1041);
  };

  const handleScroll = e => {
    e.preventDefault();
    const id = e?.target?.dataset?.section;

    const element = document.querySelector(`#${id}`);

    if (!element) {
      navigate("/");
    }

    element &&
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  return (
    <>
      <nav
        className={classNames(
          "navbar",
          {
            "navbar--scrolled": isVisible,
            "navbar--is-fixed": isFixed,
          },
          `navbar--${color}`,
        )}
      >
        <div className="navbar__inner">
          <div className="navbar__left-side">
            <Link to="/">
              <div className="navbar__logo">
                <StaticImage filename="logo.png" />
              </div>
            </Link>
          </div>
          <div className="navbar__right-side">
            <div className="navbar__links">
              <div
                className="navbar__link"
                data-section="advantages"
                onClick={handleScroll}
              >
                About us
              </div>
              <div
                className="navbar__link"
                onClick={handleScroll}
                data-section="solutions"
              >
                Solutions
              </div>
              <div
                className="navbar__link"
                onClick={handleScroll}
                data-section="projects"
              >
                Projects
              </div>
              <div
                className="navbar__link"
                onClick={handleScroll}
                data-section="pricing"
              >
                Pricing
              </div>
              <div
                className="navbar__link"
                onClick={handleScroll}
                data-section="testimonials"
              >
                Testimonials
              </div>
              <div
                className="navbar__link"
                onClick={handleScroll}
                data-section="contact"
              >
                Contact
              </div>
              <div className="navbar__link">
                <Link to="/blog">Blog</Link>
              </div>
              {!showSearch ? (
                <div
                  className={classNames(
                    "social-icon social-icon--search",
                    { "social-icon--black": color === "black" },
                  )}
                  onClick={() => {
                    setShowSearch(true);
                    disableBodyScroll();
                  }}
                >
                  <FiSearch />
                </div>
              ) : (
                <div
                  className={classNames(
                    "social-icon social-icon--search social-icon--search--close",
                    { "social-icon--black": color === "black" },
                  )}
                  onClick={() => {
                    setShowSearch(false);
                    enableBodyScroll();
                  }}
                >
                  <FiX />
                </div>
              )}
            </div>
            <div
              className="navbar__hamburger"
              onClick={handleMenuTrigger}
            >
              <div
                className={classNames("hamburger hamburger--spin", {
                  "is-active": isMenuActive,
                })}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isMobile && (
        <NavbarMobile
          isVisible={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
      )}
      <Portal className="search-container-portal">
        <SearchContainer showSearch={showSearch} />
      </Portal>
    </>
  );
};

export default Navbar;
