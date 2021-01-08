import React from "react";
import { Link } from "gatsby";
import StaticImage from "@components/StaticImage";
import "./PostPreview.styles.scss";

const PostPreview = ({ image, author, title, date, slug }) => {
  return (
    <div className="post-preview">
      <div className="post-preview__image">
        <StaticImage filename="blogimg.png" />
      </div>
      <div className="post-preview__details">
        <div className="post-preview__header">
          <p className="post-preview__title">{title}</p>
          <span className="post-preview__description">
            By {author} - {date}
          </span>
        </div>
        <Link href="/posts/test" className="post-preview__read-more">
          <span className="post-preview__circle" />
          <div className="post-preview__read-more__text">
            Read More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
