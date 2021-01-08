import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

import "./PostShare.styles.scss";

const PostShare = () => {
  return (
    <div className="post-share">
      <a
        className="post-share__item"
        href="https://www.facebook.com/sharer/sharer.php?u=example.org"
        target="_blank"
      >
        <FaFacebookSquare className="post-share__item__icon" />
      </a>
      <a
        className="post-share__item"
        href="https://twitter.com/intent/tweet?&url=${url}"
        target="_blank"
      >
        <FaInstagram className="post-share__item__icon" />
      </a>
      <a
        className="post-share__item"
        href="https://twitter.com/intent/tweet?&url=${url}"
        target="_blank"
      >
        <FaTwitterSquare className="post-share__item__icon" />
      </a>
    </div>
  );
};

export default PostShare;
