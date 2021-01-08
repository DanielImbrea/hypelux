import React from "react";
import { navigate } from "gatsby";

import BlogLayout from "@layouts/BlogLayout";

import "./Blog.styles.scss";

const BlogTemplate = ({
  posts = [],
  topPosts = [],
  tags = [],
  numberOfPages,
  pageNumber,
}) => {
  const handlePageChange = page => {
    navigate(page.selected ? `/blog/${page.selected + 1}` : "/blog");
  };

  return (
    <BlogLayout
      header={{ text: "Blog" }}
      posts={posts || []}
      tags={tags}
      topPosts={topPosts}
      pagination={{ handlePageChange, pageNumber, numberOfPages }}
    />
  );
};

export default BlogTemplate;
