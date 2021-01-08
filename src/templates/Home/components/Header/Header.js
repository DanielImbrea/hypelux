import React from "react";
import Button from "@components/Button";
import HeaderIllustration from "@components/svg/HeaderIllustration";
import HeaderIcons from "./components/HeaderIcons";
import HeaderBackgroundIllustration from "@components/svg/HeaderBackgroundIllustration";
import ScrollDownElement from "@containers/ScrollElement";
import ParticleX from "@components/svg/ParticleX";
import ParticleCircle from "@components/svg/ParticleCircle";

import "./Header.styles.scss";

const icons = [
  {
    type: "facebook",
    link: "https://reactemplates.com",
  },
  {
    type: "instagram",
    link: "",
  },
  {
    type: "twitter",

    link: "",
  },
];

const Header = () => {
  return (
    <div className="header">
      <ScrollDownElement element=".advantages" />
      <ParticleX className="header__particle-1 anim-xParticlePathVertical" />
      <ParticleX className="header__particle-2 anim-xParticlePathHorizontal" />
      <ParticleX className="header__particle-3 anim-xParticlePathHorizontal" />
      <ParticleCircle className="header__particle-4 anim-xParticlePathHorizontal" />
      <div className="header__left-side">
        <div className="header__details">
          <h1 className="title">Digital Agency Template.</h1>
          <p className="description">
            Search through a variety of react templates, react blogs,
            dashboards, landing pages, react portfolios, stores and
            many more. Check it out!
          </p>
          <div className="header__buttons">
            <Button>Check our services</Button>
            <Button hasOutline>Contact</Button>
          </div>
        </div>
      </div>
      <div className="header__right-side">
        <HeaderBackgroundIllustration className="header__background-illustration" />
        <HeaderIllustration className="header__illustration" />
        {/* <HeaderIcons icons={icons} /> */}
      </div>
    </div>
  );
};

export default Header;
