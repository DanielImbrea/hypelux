import React from "react";
import PostNavigationLink from "./components/PostNavigationLink";

import "./PostNavigation.styles.scss";

const PostNavigation = ({ next, prev }) => {
  return (
    <div className="post-navigation">
      <PostNavigationLink direction="prev" link={prev} />
      <PostNavigationLink direction="next" link={next} />
    </div>
  );
};

export default PostNavigation;
