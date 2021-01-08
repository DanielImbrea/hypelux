import React from "react";
import _ from "lodash";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "@layouts/Layout";
import LegalNavbar from "./components/LegalNavbar";

import "./Legal.styles.scss";

const Legal = ({ data }) => {
  const { body } = _.get(data, "contentfulLegalPage") || {};
  const links =
    _.get(data, "allContentfulLegalPage.edges").map(
      item => item.node,
    ) || [];

  return (
    <Layout header={{ color: "black", isFixed: false }}>
      <div className="legal">
        <div className="legal__inner">
          <LegalNavbar links={links} />
          <div className="legal__content">
            <MDXRenderer>{body?.childMdx?.body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;
