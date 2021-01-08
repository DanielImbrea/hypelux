import React from "react";
import ExamplesBgIllustration from "@components/svg/ExamplesBgIllustration";
import SectionDetails from "@components/SectionDetails";
import StaticImage from "@components/StaticImage";
import ParticleCurve from "@components/svg/ParticleCurve";
import ParticleCurve2 from "@components/svg/ParticleCurve2";
import ParticleX from "@components/svg/ParticleX";
import ParticleCircle from "@components/svg/ParticleCircle";

import "./Examples.styles.scss";

const Examples = () => {
  return (
    <section className="examples" id="posts">
      <ExamplesBgIllustration className="examples__bg-illustration" />
      <ParticleCurve className="examples__particle-1" />
      <ParticleCurve2 className="examples__particle-2" />
      <ParticleX className="examples__particle-3 anim-xParticlePathHorizontal" />
      <ParticleX className="examples__particle-4 anim-xParticlePathHorizontal" />
      <ParticleCircle className="examples__particle-5 anim-xParticlePathVertical" />
      <div className="examples__inner">
        <div className="examples__details">
          <SectionDetails
            subTitle="About us"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sint vitae dolores perspiciatis amet sapiente!"
            title="Our Provided"
            highlightedTitle="Solutions."
            isWhite
          />
        </div>
        <div className="examples__images">
          <StaticImage filename="examples-images.png" />
        </div>
      </div>
    </section>
  );
};

export default Examples;
