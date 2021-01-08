import React, { useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollAnimation from "react-animate-on-scroll";

import Project from "./components/Project";
import ProjectsBackgroundIllustration from "@components/svg/ProjectsBackgroundIllustration";
import SectionDetails from "@components/SectionDetails";

import "./Projects.styles.scss";

const params = {
  slidesPerView: "auto",
  speed: 800,
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
    700: {
      centeredSlides: true,
      // centeredSlidesBounds: true,
      spaceBetween: 50,
      slidesPerView: "auto",
    },
  },
};

const projects = [
  { image: "slider" },
  { image: "slider1" },
  { image: "slider2" },
  { image: "slider3" },
  { image: "slider4" },
  { image: "slider5" },
];

const Projects = () => {
  const [swiper, updateSwiper] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleChangeActiveKey = key => {
    swiper && swiper.slideTo(key);
    setActiveStep(key);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__details">
        <SectionDetails
          subTitle="Projects"
          title="Checkout our"
          highlightedTitle="Work."
          hasBr={false}
          isCentered
        />
      </div>
      <ProjectsBackgroundIllustration className="projects__illustration" />
      <div className="projects__slider">
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={100}
          animateOnce={true}
        >
          <Swiper
            {...params}
            onSlideChange={item => {
              handleChangeActiveKey(item.realIndex);
            }}
            onSwiper={updateSwiper}
          >
            {projects.map(item => (
              <SwiperSlide>
                <Project {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={100}
          className="projects__bullets"
        >
          {new Array(projects.length).fill(0).map((item, key) => {
            return (
              <div
                className={classNames("bullet", {
                  "bullet--active": key === activeStep,
                })}
                onClick={() => handleChangeActiveKey(key)}
              />
            );
          })}
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
