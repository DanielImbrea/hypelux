import React, { useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollAnimation from "react-animate-on-scroll";
import Plx from "react-plx";

import Dots from "@components/svg/Dots2";
import SectionDetails from "@components/SectionDetails";
import Testimonial from "./components/Testimonial";
import TestimonialsBgIllustration from "@components/svg/TestimonialsBgIllustration";

import "./Testimonials.styles.scss";

const params = {
  spaceBetween: 50,
  speed: 800,
  slidesPerView: "auto",
  loop: true,
};

const parallaxData = [
  {
    start: ".testimonials",
    duration: "800px",
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: "translateX",
      },
    ],
  },
];

const testimonials = [
  {
    logo: "microsoft.png",
    user: {
      name: "Bill Gates",
      location: "USA",
      image: "bill-gates.png",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem adipisci debitis tempora omnis odio!",
  },
  {
    logo: "facebook.png",
    user: {
      name: "Mark Zuckerberg",
      location: "USA",
      image: "mark-zuckerberg.jpg",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem adipisci debitis tempora omnis odio!",
  },
  {
    logo: "microsoft.png",
    user: {
      name: "Bill Gates",
      location: "USA",
      image: "bill-gates.png",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem adipisci debitis tempora omnis odio!",
  },
];

const Testimonials = () => {
  const [swiper, updateSwiper] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleChangeActiveKey = key => {
    swiper && swiper.slideTo(key);
    setActiveStep(key);
  };

  return (
    <section className="testimonials" id="testimonials">
      <Plx
        className="testimonials__illustration"
        parallaxData={parallaxData}
      >
        <Dots />
      </Plx>
      <div className="testimonials__inner">
        <div className="testimonials__left-side">
          <SectionDetails
            subTitle="Testimonials"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sint vitae dolores perspiciatis amet sapiente!"
            title="Our Customers"
            highlightedTitle="Feedback."
          />
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            className="testimonials__bullets"
            delay={200}
          >
            {new Array(4).fill(0).map((item, key) => {
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

        <div className="testimonials__right-side">
          <TestimonialsBgIllustration className="testimonials__bg-illustration" />
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
            className="testimonials__slider"
            delay={300}
          >
            <Swiper
              {...params}
              onSlideChange={item => {
                handleChangeActiveKey(item.realIndex);
              }}
              onSwiper={updateSwiper}
            >
              {testimonials?.map(item => {
                return (
                  <SwiperSlide>
                    <Testimonial {...item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
