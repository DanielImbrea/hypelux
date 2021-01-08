import React from "react";
import StaticImage from "@components/StaticImage";
import "./Project.styles.scss";

const Project = ({ image }) => {
  return (
    <div className="project">
      <div className="project__image">
        <StaticImage filename={image} />
      </div>
      <div className="project__bg" />
    </div>
  );
};

export default Project;
