import React from "react";
import { graphql } from "gatsby";
import Layout from "@layouts/Layout";
import TagView from "./TagView";
import { capitalize } from "lodash";

const TagRoute = ({ data, pathContext: { tag } }) => {
  const posts = data?.allContentfulBlogPost?.nodes;
  const topPosts = data?.topPosts?.nodes;
  const tags = data?.tags?.group;

  const formattedTag = tag.split("-").join(" ");

  return (
    <Layout
      header={{ color: "black", isFixed: false }}
      seo={{
        title: `${capitalize(formattedTag)} posts - Colors Frame`,
        description: `Best tips and tricks about ${formattedTag}, so you can paint like a real pro. Get the best paint sprayers for all your painting jobs.`,
        keywords: ["spray-paint", tag],
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
