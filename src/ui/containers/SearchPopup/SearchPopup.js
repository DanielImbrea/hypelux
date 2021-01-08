import React, { useState, useEffect } from "react";

import classNames from "classnames";
import { enableBodyScroll } from "body-scroll-lock";
import { navigate } from "gatsby";

import "./SearchPopup.styles.scss";

const SearchContainer = ({ showSearch }) => {
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    enableBodyScroll();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    navigate(`/search?q=${searchText}`);
  };

  const handleChange = e => {
    setsearchText(e.target.value);
  };

  return (
    <div
      className={classNames("search-container", {
        "search-container--active": showSearch,
      })}
    >
      <div className="search-container__inner">
        {/* <div className="search-container__label">
          <label htmlFor="search-input">Search here</label>
        </div> */}
        <form
          className="search-container__form"
          action="/search"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="search"
            label="type and hit enter"
            value={searchText}
            onChange={handleChange}
            placeholder="type and hit enter"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchContainer;
