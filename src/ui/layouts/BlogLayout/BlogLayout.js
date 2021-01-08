import React from "react";
import classNames from "classnames";
import ReactPaginate from "react-paginate";
import Post from "@components/Post";
import Sidebar from "@layouts/Sidebar";
import BlogHeaderIllustration from "@components/svg/BlogHeaderIllustration";

import "./BlogLayout.styles.scss";

const BlogLayout = ({
  className,
  header,
  posts = [],
  hasPagination = true,
  pagination,
  topPosts,
  tags,
  children,
}) => {
  return (
    <div className={classNames("blog-layout", className)}>
      <div className="blog-layout__inner">
        <div className="blog-layout__header">
          <BlogHeaderIllustration />
          <div className="blog-layout__header__text">
            {header.text}
          </div>
        </div>
        <div className="blog-layout__content">
          <div className="blog-layout__posts">
            {children}
            <div className="blog-layout__posts__main">
              {posts.map(item => (
                <Post
                  frontmatter={{
                    ...item.node,
                    date: item.node.publishDate,
                    description:
                      item.node.description.childMarkdownRemark.html,
                    featuredimage: item.node.heroImage,
                  }}
                  fields={{ slug: item.node.slug }}
                />
              ))}
            </div>
            {hasPagination && (
              <div className="blog-layout__posts__pagination">
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pagination.numberOfPages}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  initialPage={pagination.pageNumber}
                  onPageChange={pagination.handlePageChange}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                  disabledClassName="blog-layout__posts__pagination--disabled"
                />
              </div>
            )}
          </div>
          <div className="blog-layout__sidebar">
            <Sidebar topPosts={topPosts || []} tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
