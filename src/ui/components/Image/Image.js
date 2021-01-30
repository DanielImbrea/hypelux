import React from "react";
import Img from "gatsby-image";

const Image = ({ data }) => {
  const { alt, title, childImageSharp, image } = data || {};

  if (!!image?.fluid) {
    return <Img fluid={image.fluid} alt={alt} title={title} />;
  }

  if (!!childImageSharp) {
    return (
      <Img fluid={childImageSharp.fluid} alt={alt} title={title} />
    );
  }

  if (!!image && typeof image === "string")
    return <img src={image} alt="Title" />;

  if (!!data && typeof data === "string")
    return <img src={data} alt="Title" />;

  return null;
};

export default Image;
