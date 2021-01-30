import { graphql } from "gatsby";
import BlogPost from "./BlogPost";

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      tags
      description {
        childMarkdownRemark {
          excerpt(pruneLength: 200)
          rawMarkdownBody
        }
      }
      seoText
      isFeatured
      heroImage {
        fluid(maxWidth: 1180) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMdx {
          body
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
