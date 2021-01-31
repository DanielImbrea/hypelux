import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiClock,
} from "react-icons/fi";

import Affix from "@components/Affix";
import Image from "@components/Image";
import Layout from "@layouts/Layout";
import PostNavigation from "@components/PostNavigation";
import Sidebar from "@layouts/Sidebar";
import Tag from "@components/Tag";

import { Disqus } from "gatsby-plugin-disqus";
import get from "lodash/get";

import "./BlogPost.styles.scss";

const BlogPost = ({ data, pageContext }) => {
  const post = get(data, "contentfulBlogPost");
  const topPosts = get(data, "topPosts.nodes");
  const tags = get(data, "tags.group");
  const { prev, next } = pageContext;

  let disqusConfig = {
    identifier: post.title,
    title: post.title,
  };

  return (
    <Layout
      header={{ color: "black", isFixed: false }}
      seo={{
        title: `${post.title} | ColorsFrame`,
        description: `${
          post?.seoText ||
          post.description?.childMarkdownRemark?.excerpt
        } - ColorsFrame`,
        image: post?.heroImage?.fluid?.src,
      }}
    >
      <div className="blog-post">
        <div className="blog-post__inner container">
          <div className="blog-post__left-side">
            <Image data={{ image: post.heroImage }} />
            <div className="blog-post__main">
              <div className="blog-post__social">
                <Affix>
                  <div className="blog-post__social__inner">
                    <div className="blog-post__social__title">
                      Share
                    </div>
                    <div className="blog-post__social__line" />
                    <div className="blog-post__social__icons">
                      <div className="blog-post__social__icon">
                        <FiFacebook />
                      </div>
                      <div className="blog-post__social__icon">
                        <FiInstagram />
                      </div>
                      <div className="blog-post__social__icon">
                        <FiLinkedin />
                      </div>
                      <div className="blog-post__social__icon">
                        <FiTwitter />
                      </div>
                    </div>
                  </div>
                </Affix>
              </div>
              <div className="blog-post__content">
                <div className="blog-post__tags">
                  {post?.tags?.map(tag => {
                    return <Tag item={tag} />;
                  })}
                </div>
                <h1 className="blog-post__title section-headline">
                  {post.title}
                </h1>
                <div className="blog-post__details">
                  <div className="blog-post__date">
                    <FiClock /> <div>{post.publishDate}</div>
                  </div>
                </div>
                <div className="blog-post__description">
                  {
                    post.description?.childMarkdownRemark
                      ?.rawMarkdownBody
                  }
                </div>
                <MDXRenderer>{post.body.childMdx.body}</MDXRenderer>

                <PostNavigation prev={prev} next={next} />
                <div className="blog-post__comments">
                  <Disqus config={disqusConfig} />
                </div>
              </div>
            </div>
          </div>
          <div className="blog-post__sidebar">
            <Sidebar topPosts={topPosts} tags={tags} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
