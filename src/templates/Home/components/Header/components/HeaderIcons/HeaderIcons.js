import React from "react";
import getIconByType from "@utils/enums/icons";
import "./HeaderIcons.styles.scss";

const HeaderIcons = ({ icons }) => {
  return (
    <div className="header-icons">
      {icons.map(icon => {
        const IconComponent = getIconByType(icon.type);
        return (
          <a
            href={icon.link}
            alt="Icon"
            target="_blank"
            rel="noreferrer"
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default HeaderIcons;
