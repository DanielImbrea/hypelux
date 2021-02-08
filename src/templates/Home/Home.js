import React from "react";

import Advantages from "./components/Advantages";
import ContactFaq from "./components/ContactFaq";
import Posts from "./components/Posts";
import Header from "./components/Header";

import "./Home.module.scss";

const Home = ({ topPosts, posts }) => {
  return (
    <>
      <Header post={topPosts?.[0]} />
      <Posts posts={posts} />
      {/* <Advantages /> */}
      <ContactFaq />
    </>
  );
};

export default Home;
