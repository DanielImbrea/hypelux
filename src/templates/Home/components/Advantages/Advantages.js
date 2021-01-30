import React from "react";

import AboutUsBackgroundIllustration from "@components/svg/AboutUsbackgroundIllustration";
import AdvantageBox from "./components/AdvantageBox";
import AdvantageBoxIllustration from "@components/svg/AdvantageBoxIllustration";
import SectionDetails from "@components/SectionDetails";
import Dots from "@components/svg/Dots2";
import Plx from "react-plx";

import "./Advantages.styles.scss";

const items = [
  {
    Icon: AdvantageBoxIllustration,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, maxime.",
  },
  {
    Icon: AdvantageBoxIllustration,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, maxime.",
  },
  {
    Icon: AdvantageBoxIllustration,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, maxime.",
  },
  {
    Icon: AdvantageBoxIllustration,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, maxime.",
  },
];

const parallaxData = [
  {
    start: ".advantages",
    duration: "800px",
    properties: [
      {
        startValue: -100,
        endValue: 50,
        property: "translateX",
      },
    ],
  },
];

const Advantages = () => {
  return (
    <section className="advantages" id="advantages">
      <div className="advantages__inner">
        <AboutUsBackgroundIllustration className="advantages__bg-illustration" />
        <div className="advantages__left-side">
          <div className="advantages__boxes">
            {items.map((item, key) => {
              return <AdvantageBox {...item} index={key} key={key} />;
            })}
          </div>
        </div>
        <div className="advantages__dots">
          <Plx parallaxData={parallaxData}>
            <Dots />
          </Plx>
        </div>

        <div className="advantages__right-side">
          <SectionDetails
            subTitle="About us"
            description="We offer you solutions to save time in gathering helpful informations for a beautiful & colored life"
            title="Best Solutions"
            highlightedTitle="For you"
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
