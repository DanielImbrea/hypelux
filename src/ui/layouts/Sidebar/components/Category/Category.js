import React from "react";
import { Link } from "gatsby";
import "./Category.styles.scss";

const Category = ({ name, count }) => {
  return (
    <Link to={`/blog/tags/${name}`} className="category">
      <div className="category__name">{name}</div>
      <div className="category__number">{count}</div>
    </Link>
  );
};

export default Category;
