import React from "react";
import { Link } from "gatsby";

import Image from "@components/Image";
import PostShare from "./components/PostShare";
import Tag from "@components/Tag";

import "./Post.styles.scss";

const Post = ({ frontmatter, fields }) => {
  const {
    title,
    description,
    date,
    tags,
    featuredimage,
  } = frontmatter;

  return (
    <article className="post">
      <Link
        to={`/blog/${fields.slug}`}
        className="post__image__container"
      >
        <div className="post__image--bg-design" />
        <div className="post__image">
          <div className="post__image--design" />
          <Image data={{ image: featuredimage }} />
        </div>
      </Link>
      <div className="post__details">
        <Link to={`/blog/${fields.slug}`}>
          <h3 className="post__title">{title}</h3>
        </Link>
        <div className="post__info">
          <div className="post__date">{date}</div>
        </div>
        <p
          className="post__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className="post__footer">
          <div className="post__tags">
            {tags.map(item => {
              return <Tag item={item} />;
            })}
          </div>
          <PostShare />
        </div>
      </div>
    </article>
  );
};

export default Post;
