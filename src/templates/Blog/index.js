import React from "react";
import Layout from "@layouts/Layout";
import BlogTemplate from "./Blog";

const BlogView = ({ data, pathContext }) => {
  const posts = data?.allContentfulBlogPost?.edges;
  const topPosts = data?.topPosts?.nodes;
  const tags = data?.tags?.group;

  const { numberOfPages, pageNumber } = pathContext;

  return (
    <Layout
      header={{ color: "black", isFixed: false }}
      seo={{
        title: "Painting tips, tricks and tools - Colors Frame",
        description: `Best tips and tricks about spray-paint, so you can transform anything in art. Get the best paint sprayers for all your paiting jobs.`,
      }}
    >
      <BlogTemplate
        posts={posts}
        topPosts={topPosts}
        tags={tags}
        numberOfPages={numberOfPages}
        pageNumber={pageNumber}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogIndexQuery($skip: Int, $limit: Int) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      skip: $skip
      limit: $limit
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

export default BlogView;
