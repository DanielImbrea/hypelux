import React from "react";
import { Link } from "gatsby";

import "./LegalNavbar.styles.scss";

const LegalNavbar = ({ links }) => {
  return (
    <div className="legal-navbar">
      <div className="legal-navbar__inner cotainer cotainer--content">
        {links.map(({ title, slug }) => {
          return (
            <div className="legal-navbar__item">
              <Link to={`/legal/${slug}`}>{title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LegalNavbar;
