import React from "react";
import BlogLayout from "@layouts/BlogLayout";

import "./TagView.styles.scss";

const TagView = ({ tag, tags, posts, topPosts }) => {
  return (
    <BlogLayout
      header={{ text: tag }}
      posts={posts || []}
      tags={tags}
      topPosts={topPosts}
      hasPagination={false}
    />
  );
};

export default TagView;
