import React from "react";
import HomeTemplate from "../templates/Home";
import Layout from "../ui/layouts/Layout";

const HomePage = ({ data }) => {
  const topPosts = data?.topPosts?.nodes;
  const posts = data?.allContentfulBlogPost?.edges?.map(
    post => post?.node,
  );

  console.log("data: ", data);

  return (
    <Layout
      seo={{
        title: "Colors Frame | Web development solutions",
        description:
          "Colors Frame marketing agency that brings high-level support for web development and transforms traditional midsize companies to the digital era.",
      }}
    >
      <HomeTemplate posts={posts} topPosts={topPosts} />
    </Layout>
  );
};

export const query = graphql`
  query HomePosts {
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
            excerpt(pruneLength: 150)
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

export default HomePage;
