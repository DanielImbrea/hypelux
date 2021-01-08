import React, { useState, useEffect } from "react";
import BlogLayout from "@layouts/BlogLayout";
import { FiSearch } from "react-icons/fi";
import queryString from "query-string";

import "./Search.styles.scss";

const Search = ({ tags, posts: initialPosts, topPosts, ...rest }) => {
  const [search, setSearch] = useState(
    queryString.parse(rest?.location?.search).q,
  );
  const [posts, setPosts] = useState([...initialPosts]);

  useEffect(() => {
    if (queryString.parse(rest?.location?.search).q) {
      handleChange({
        target: {
          value: queryString.parse(rest?.location?.search).q,
        },
      });
    }
  }, []);

  const handleChange = e => {
    const {
      target: { value },
    } = e;

    const newPosts = value
      ? [...posts].filter(
          item =>
            item?.node?.title
              ?.toLowerCase()
              .includes(value.toLowerCase()) ||
            item?.node?.description?.childMarkdownRemark?.html?.includes(
              value,
            ),
        )
      : [...initialPosts];

    setPosts(newPosts);

    setSearch(value);
  };
  return (
    <BlogLayout
      className="search"
      header={{ text: "Search" }}
      posts={posts || []}
      tags={tags}
      topPosts={topPosts}
      hasPagination={false}
    >
      <div className="search-input">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="search here"
        />
        <FiSearch className="search-input__icon" />
      </div>
    </BlogLayout>
  );
};

export default Search;
