import React from "react";
import classNames from "classnames";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "gatsby";

import "./PostNavigationLink.styles.scss";

const PostNavigationLink = ({ direction = "prev", link }) => {
  if (!link) return <div />;
  return (
    <div
      className={classNames(
        "post-navigation-link",
        direction === "next"
          ? "post-navigation-link--next"
          : "post-navigation-link--prev",
      )}
    >
      <div className="post-navigation-link__type">
        {direction === "prev" ? "Previous post" : "Next Post"}
      </div>
      <h4 className="post-navigation-link__post-title">
        <Link to={`/blog/${link?.node?.slug}`}>
          {direction === "prev" ? <FiArrowLeft /> : <FiArrowRight />}{" "}
          &nbsp; {link?.node?.title}
        </Link>
      </h4>
    </div>
  );
};

export default PostNavigationLink;
