import React from "react";
import { Link } from "gatsby";
import Image from "@components/Image";

import "./Post.styles.scss";

const Post = ({ heroImage, slug, description, title, index }) => {
  return (
    <div className="sidebar-post">
      <div className="sidebar-post__key">{index}</div>
      <div className="sidebar-post__image">
        <Image data={{ image: heroImage }} />
      </div>
      <div className="sidebar-post__details">
        <Link to={`/blog/${slug}`}>
          <div className="sidebar-post__title">{title}</div>
        </Link>
        <div className="sidebar-post__description">
          {description.childMarkdownRemark.excerpt}
        </div>
      </div>
    </div>
  );
};

export default Post;
