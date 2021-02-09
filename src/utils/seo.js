import React from "react";

import PropTypes from "prop-types";
import Helmet from "react-helmet";
import defaultImage from "@assets/images/thumbnail.jpeg";

function SEO({ description, lang, meta, title, image, ...rest }) {
  const metaImage = image || defaultImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: rest.tags,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: "devscriptive.com",
        },
        {
          name: `twitter:card`,
          content: "summary_large_image",
        },
        {
          name: `author`,
          content: "devscriptive.com",
        },
        {
          name: `canonicalUrl`,
          content: "https://devscriptive.com",
        },
        {
          name: `url`,
          content: "https://devscriptive.com",
        },
        {
          name: `og-image`,
          content: metaImage,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
