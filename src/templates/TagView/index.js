import React from "react";
import { graphql } from "gatsby";
import Layout from "@layouts/Layout";
import TagView from "./TagView";

const TagRoute = ({ data, pathContext: { tag } }) => {
  const posts = data?.allContentfulBlogPost?.nodes;
  const topPosts = data?.topPosts?.nodes;
  const tags = data?.tags?.group;

  return (
    <Layout
      header={{ color: "black", isFixed: false }}
      seo={{
        title: `Colors Frame | ${tag} - Web development solutions`,
        description:
          "Colors Frame is a digital marketing agency that brings high-level support for web development and transforms traditional midsize companies to the digital era.",
      }}
    >
      <TagView
        tag={tag}
        posts={posts.map(item => ({ node: item }))}
        tags={tags}
        topPosts={topPosts}
      />
    </Layout>
  );
};

export const query = graphql`
  query TagPage($tag: String) {
    allContentfulBlogPost(filter: { tags: { in: [$tag] } }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    topPosts: allContentfulBlogPost(
      filter: {}
      limit: 3
      sort: { fields: [publishDate], order: DESC }
    ) {
      nodes {
        title
        slug
        heroImage {
          fluid(maxWidth: 1180) {
            ...GatsbyContentfulFluid
          }
        }
        description {
          childMarkdownRemark {
            excerpt(pruneLength: 40)
          }
        }
      }
    }
    tags: allContentfulBlogPost {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagRoute;
