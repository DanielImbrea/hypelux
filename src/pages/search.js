import React from "react";
import { graphql } from "gatsby";
import Layout from "../ui/layouts/Layout";
import SearchTemplate from "@templates/Search";

const SearchPage = ({ data, ...rest }) => {
  const posts = data?.allContentfulBlogPost?.edges;
  const topPosts = data?.topPosts?.nodes;
  const tags = data?.tags?.group;

  return (
    <Layout
      header={{ color: "black", isFixed: false }}
      seo={{
        title: "Colors Frame | Web development solutions",
        description:
          "Colors Frame is a digital marketing agency that brings high-level support for web development and transforms traditional midsize companies to the digital era.",
      }}
    >
      <SearchTemplate
        posts={posts}
        topPosts={topPosts}
        tags={tags}
        {...rest}
      />
    </Layout>
  );
};

export const query = graphql`
  query SearchPosts {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
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

export default SearchPage;
