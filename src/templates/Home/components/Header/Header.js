import React from "react";
import Button from "@components/Button";
import HeaderIllustration from "@components/svg/HeaderIllustration";
import HeaderIcons from "./components/HeaderIcons";
import HeaderBackgroundIllustration from "@components/svg/HeaderBackgroundIllustration";
import ScrollDownElement from "@containers/ScrollElement";
import ParticleX from "@components/svg/ParticleX";
import ParticleCircle from "@components/svg/ParticleCircle";
import { Link } from "gatsby";

import "./Header.styles.scss";

const icons = [
  {
    type: "facebook",
    link: "https://reactemplates.com",
  },
  {
    type: "instagram",
    link: "",
  },
  {
    type: "twitter",

    link: "",
  },
];

const Header = ({ post }) => {
  return (
    <div className="header">
      <ScrollDownElement element=".advantages" />
      <ParticleX className="header__particle-1 anim-xParticlePathVertical" />
      <ParticleX className="header__particle-2 anim-xParticlePathHorizontal" />
      <ParticleX className="header__particle-3 anim-xParticlePathHorizontal" />
      <ParticleCircle className="header__particle-4 anim-xParticlePathHorizontal" />
      <div className="header__left-side">
        <div className="header__details">
          <h1 className="title">
            <Link to={`/blog/${post?.slug}`}>{post?.title}</Link>
          </h1>
          <p className="description">
            {post.description.childMarkdownRemark.excerpt}
          </p>
          <div className="header__buttons">
            <Link className="to__blog" to={`/blog/${post?.slug}`}>
              <Button>See more</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__right-side">
        <HeaderBackgroundIllustration
          className="header__background-illustration"
          image={post.heroImage.fluid.src}
        />
      </div>
    </div>
  );
};

export default Header;
