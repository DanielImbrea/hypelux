import React from "react";

import Advantages from "./components/Advantages";
import ContactFaq from "./components/ContactFaq";
import Header from "./components/Header";

import "./Home.module.scss";

const Home = ({ topPosts }) => {
  return (
    <>
      <Header post={topPosts[0]} />
      <Advantages />
      <ContactFaq />
    </>
  );
};

export default Home;
