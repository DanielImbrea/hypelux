import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

import "./Tag.styles.scss";

const Tag = ({ item }) => {
  return (
    <span key={item + `tag`} className="tag">
      <Link to={`/blog/tags/${_.kebabCase(item.toLowerCase())}`}>
        {item}
      </Link>
    </span>
  );
};

export default Tag;
