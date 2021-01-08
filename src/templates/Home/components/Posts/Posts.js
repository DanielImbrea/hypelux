import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Plx from "react-plx";

import BlogBackgroundIllustration from "@components/svg/BlogBackgroundIllustration";
import BlogBackgroundRightIllustration from "@components/svg/BlogBackgroundRightIllustration";
import SectionDetails from "@components/SectionDetails";
import PostPreview from "./components/PostPreview";
import ParticleX from "@components/svg/ParticleX";
import ParticleCircle from "@components/svg/ParticleCircle";

import "./Posts.styles.scss";

const parallaxData = [
  {
    start: ".posts",
    duration: "700px",
    properties: [
      {
        startValue: -100,
        endValue: -150,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 90,
        property: "rotate",
      },
    ],
  },
];
const parallaxData2 = [
  {
    start: ".posts",
    duration: "700px",
    properties: [
      {
        startValue: -100,
        endValue: -200,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 90,
        property: "rotate",
      },
    ],
  },
];

const parallaxData3 = [
  {
    start: ".posts",
    duration: "700px",
    properties: [
      {
        startValue: -100,
        endValue: -250,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 90,
        property: "rotate",
      },
    ],
  },
];

const Posts = () => {
  return (
    <section className="posts" id="posts">
      <SectionDetails
        subTitle="Blog"
        title="Read our latest"
        highlightedTitle="News"
        isCentered={true}
      />
      <Plx className="posts__particle-1" parallaxData={parallaxData}>
        <ParticleX />
      </Plx>
      <Plx className="posts__particle-2" parallaxData={parallaxData2}>
        <ParticleCircle />
      </Plx>
      <Plx className="posts__particle-3" parallaxData={parallaxData3}>
        <ParticleX />
      </Plx>
      <BlogBackgroundIllustration className="posts__illustration" />
      <BlogBackgroundRightIllustration className="posts__illustration posts__illustration--right" />
      <div className="posts__boxes">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <PostPreview
            title="Lorem ipsum dolor"
            author="John Doe"
            date="15 June"
            slug="lorem-ipsum"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          delay={300}
        >
          <PostPreview
            title="Lorem ipsum dolor"
            author="John Doe"
            date="15 June"
            slug="lorem-ipsum"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          delay={500}
        >
          <PostPreview
            title="Lorem ipsum dolor"
            author="John Doe"
            date="15 June"
            slug="lorem-ipsum"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Posts;
