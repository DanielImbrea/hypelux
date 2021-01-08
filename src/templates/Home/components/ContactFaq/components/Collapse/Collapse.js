import React, { useState } from "react";
import classNames from "classnames";
import "./Collapse.styles.scss";
import PlusSvg from "./Plus";

const CollapseItem = ({
  title,
  description,
  handleItemClick,
  activeItemId,
  id,
}) => {
  return (
    <div
      className={classNames("collapse-item", {
        "collapse-item--active": activeItemId === id,
      })}
    >
      <div
        className="collapse-item__header"
        onClick={() => {
          handleItemClick(id);
        }}
      >
        <div className="collapse-item__title">{title}</div>
        <div className="collapse-item__arrow">
          <PlusSvg />
        </div>
      </div>
      <div className="collapse-item__body">{description}</div>
    </div>
  );
};

const Collapse = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = itemId => {
    if (itemId === activeItemId) {
      setActiveItemId(null);
    } else {
      setActiveItemId(itemId);
    }
  };

  return (
    <div className="collapse">
      {items.map(item => (
        <CollapseItem
          {...item}
          key={item.id}
          activeItemId={activeItemId}
          handleItemClick={itemId => handleItemClick(itemId)}
        />
      ))}
    </div>
  );
};

export default Collapse;
