import React from "react";
import { Link, navigate } from "gatsby";
import { FiArrowRight } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";

import FooterBgIllustration from "@components/svg/FooterBgIllustration";
import FooterSocial from "./components/FooterSocial";
import FooterBox from "./components/FooterBox";
import SectionDetails from "@components/SectionDetails";

import "./Footer.styles.scss";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer__inner">
        <FooterBgIllustration className="footer__bg" />
        <div className="footer__content container">
          <div className="footer__subscribe">
            <SectionDetails
              title="Subscribe Newsletter & get"
              highlightedTitle="Company News."
              isCentered
            />

            <ScrollAnimation
              className="footer__input"
              animateIn="fadeIn"
              animateOnce={true}
              delay={100}
            >
              <input type="email" placeholder="Email" />
              <FiArrowRight className="footer__arrow" />
            </ScrollAnimation>
          </div>
          <div className="footer__main">
            <ScrollAnimation
              className="footer__left-side"
              animateIn="fadeInLeft"
              animateOnce={true}
              delay={100}
            >
              <FooterSocial />
              <div className="footer__contact">
                <p>colors_frame@gmail.com</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              className="footer__right-side"
              animateIn="fadeInUp"
              animateOnce={true}
              delay={100}
            >
              <FooterBox title="Pages">
                <div
                  onClick={handleScroll}
                  data-section="about"
                  className="footer__link"
                >
                  About us
                </div>
                {/* <div
                  onClick={handleScroll}
                  data-section="projects"
                  className="footer__link"
                >
                  Projects
                </div> */}
                {/* <div
                  onClick={handleScroll}
                  data-section="pricing"
                  className="footer__link"
                >
                  Pricing
                </div> */}
                {/* <div
                  onClick={handleScroll}
                  data-section="testimonials"
                  className="footer__link"
                >
                  Testimonials
                </div> */}
                <div
                  onClick={handleScroll}
                  data-section="contact"
                  className="footer__link"
                >
                  Contact
                </div>
                <Link to="/blog" className="footer__link">
                  Blog
                </Link>
              </FooterBox>
              <FooterBox title="Legal">
                <Link
                  to="/legal/privacy-policy"
                  className="footer__link"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/legal/privacy-policy"
                  className="footer__link"
                >
                  Copyright
                </Link>
                <Link
                  to="/legal/privacy-policy"
                  className="footer__link"
                >
                  Terms and conditions
                </Link>
              </FooterBox>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
