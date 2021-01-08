import React from "react";
import HomeTemplate from "../templates/Home";
import Layout from "../ui/layouts/Layout";

const HomePage = () => {
  return (
    <Layout
      seo={{
        title: "Devsplan | Web development solutions",
        description:
          "Devsplan is a digital marketing agency that brings high-level support for web development and transforms traditional midsize companies to the digital era.",
      }}
    >
      <HomeTemplate />
    </Layout>
  );
};

export default HomePage;
