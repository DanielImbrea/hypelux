import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Fact from "./components/Fact";
import SectionDetails from "@components/SectionDetails";
import SolutionsBgIllustration from "@components/svg/SolutionsBgIllustration";
import ParticleX from "@components/svg/ParticleX";
import ParticleCircle from "@components/svg/ParticleCircle";

import "./Solutions.styles.scss";

const info = [
  {
    number: 30,
    name: "EMPLOYEES",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, corporis.",
  },
  {
    number: 50,
    name: "CLIENTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, corporis.",
  },
  {
    number: 500,
    name: "PROJECTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, corporis.",
  },
];

const Solutions = () => {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__inner">
        <div className="solutions__left-side">
          <SectionDetails
            title="Best Solutions"
            highlightedTitle="For you"
            subTitle="Why Choose us"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sint vitae dolores perspiciatis amet sapiente!"
          />
        </div>
        <div className="solutions__right-side">
          <ParticleX className="solutions__particle-1 anim-xParticlePathVertical" />
          <ParticleX className="solutions__particle-2 anim-xParticlePathHorizontal" />
          <ParticleCircle className="solutions__particle-3 anim-xParticlePathVertical" />
          {info?.map((item, key) => {
            return (
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce={true}
                key={item.name}
              >
                <Fact {...item} />
              </ScrollAnimation>
            );
          })}
        </div>
        <div className="solutions__bg-illustration">
          <SolutionsBgIllustration />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
