import React from "react";

import Advantages from "./components/Advantages";
import ContactFaq from "./components/ContactFaq";
import Examples from "./components/Examples";
import Header from "./components/Header";
import Pricing from "./components/Pricing/Pricing";
import Projects from "./components/Projects";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Posts from "./components/Posts";

import "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Advantages />
      <Solutions />
      <Examples />
      <Projects />
      <Pricing />
      <Testimonials />
      <Posts />
      <ContactFaq />
    </>
  );
};

export default Home;
