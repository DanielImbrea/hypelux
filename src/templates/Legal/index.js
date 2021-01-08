import LegalPage from "./Legal";
import { graphql } from "gatsby";

export const query = graphql`
  query LegalPages($slug: String!) {
    contentfulLegalPage(slug: { eq: $slug }) {
      title
      slug
      body {
        childMdx {
          body
        }
      }
    }
    allContentfulLegalPage {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export default LegalPage;
