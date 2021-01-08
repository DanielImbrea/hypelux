// import React from "react";
// import { StaticQuery, graphql } from "gatsby";

// const ColorProvider = ({ children, isPreview }) => {
//   if (isPreview) return <div className="theme-blue">{children}</div>;
//   return (
//     <StaticQuery
//       query={graphql`
//         query GeneralColor {
//           allMarkdownRemark(
//             filter: {
//               frontmatter: { templateKey: { eq: "GeneralConfig" } }
//             }
//           ) {
//             edges {
//               node {
//                 id
//                 frontmatter {
//                   color
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={data => {
//         const className =
//           "theme-" +
//           data.allMarkdownRemark.edges[0].node.frontmatter.color;

//         return <div className={className}>{children}</div>;
//       }}
//     />
//   );
// };

// export default ColorProvider;
