const emoji = require(`remark-emoji`);
const abbr = require(`remark-abbr`);
const subSuperScript = require(`remark-sub-super`);
const definitions = require(`remark-defsplit`);
const footnotes = require(`remark-footnotes`);
const containers = require(`remark-containers`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided.",
  );
}

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful starter",
    siteUrl: `https://colorsframe.com`,
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: ["gatsby-remark-smartypants"],
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        root: __dirname,
        remarkPlugins: [
          emoji,
          abbr,
          subSuperScript,
          definitions,
          footnotes,
          containers,
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-vscode",
            options: {
              theme: "Abyss",
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
          "gatsby-remark-emoji",
          {
            resolve: "gatsby-remark-emojis",
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: "emoji-icon",
              // In order to avoid pattern mismatch you can specify
              // an escape character which will be prepended to the
              // actual pattern (e.g. `#:poop:`).
              // escapeCharacter: "#", // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "25px",
              },
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `devscriptive`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/ui/components",
          "@assets": "src/assets",
          "@images": "src/assets/images",
          "@containers": "src/ui/containers",
          "@layouts": "src/ui/layouts",
          "@styles": "src/styles",
          "@templates": "src/templates",
          "@pages": "src/pages",
          "@utils": "src/utils",
        },
        extensions: [],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Template`,
        short_name: `Template`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#1a7ece`,
        display: `standalone`,
        icon: `src/assets/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "8226664",
        respectDNT: true,
        productionOnly: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets\/svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://ovidiumihaibelciug.us19.list-manage.com/subscribe/post?u=eb386f1915c9711d862b922af&amp;id=03b84737dd",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-189329480-1",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
    },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /.svg$/,
    //     },
    //   },
    // },
    // "gatsby-plugin-react-svg",
  ],
};
