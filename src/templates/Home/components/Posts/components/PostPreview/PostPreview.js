import React from "react";
import { Link } from "gatsby";
import Image from "@components/Image";

import "./PostPreview.styles.scss";

const PostPreview = ({ image, author, title, date, slug }) => {
  console.log("image: ", image);
  return (
    <div className="post-preview">
      <div className="post-preview__image">
        <Image data={{ image }} />
      </div>
      <div className="post-preview__details">
        <div className="post-preview__header">
          <Link href={`/blog/${slug}`}>
            <p className="post-preview__title">{title}</p>
          </Link>
          <span className="post-preview__description">
            By {author} - {date}
          </span>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="post-preview__read-more"
        >
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
