const Promise = require("bluebird");
const _ = require("lodash");
const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(
      "./src/templates/BlogPost/index.js",
    );
    const legalPageComponent = path.resolve(
      "./src/templates/Legal/index.js",
    );

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  id
                  title
                  slug
                  description {
                    childMarkdownRemark {
                      excerpt(pruneLength: 25)
                    }
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
            legalPages: allContentfulLegalPage {
              nodes {
                title
                slug
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const tags = result.data.tags.group;
        const posts = result.data.allContentfulBlogPost.edges;
        const legalPages = result.data.legalPages.nodes;

        console.log("result: ", result);
        console.log("legalPages: ", legalPages);

        tags.forEach((tag, index) => {
          createPage({
            id: tag.slug,
            path: `/blog/tags/${_.kebabCase(
              tag.fieldValue.toLowerCase(),
            )}`,
            component: path.resolve(
              "./src/templates/TagView/index.js",
            ),
            context: {
              tag: tag.fieldValue,
            },
          });
        });

        posts.forEach((post, index) => {
          createPage({
            id: post.node.id,
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
              prev: index === 0 ? null : posts[index - 1],
              next:
                index === posts.length - 1 ? null : posts[index + 1],
            },
          });
        });

        (legalPages || []).forEach((page, index) => {
          createPage({
            id: page.id,
            path: `/legal/${page.slug}/`,
            component: legalPageComponent,
            context: {
              slug: page.slug,
            },
          });
        });

        paginate({
          createPage, // The Gatsby `createPage` function
          items: posts, // An array of objects
          itemsPerPage: 7, // How many items you want per page
          pathPrefix: "/blog", // Creates pages like `/blog`, `/blog/2`, etc
          component: path.resolve("src/templates/Blog/index.js"), // Just like `createPage()`
        });
      }),
    );
  });
};
