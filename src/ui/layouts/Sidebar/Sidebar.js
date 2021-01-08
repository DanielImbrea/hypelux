import React from "react";

import Affix from "@components/Affix";
import Box from "./components/Box";
import Category from "./components/Category";
import Newsletter from "@containers/Newsletter";
import Post from "./components/Post";

import "./Sidebar.styles.scss";

const Sidebar = ({ topPosts, tags }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <Newsletter />
        <Box title="Popular Posts">
          {topPosts.map((post, key) => (
            <Post {...post} index={key + 1} key={key} />
          ))}
        </Box>
        <Affix>
          <Box title="Tags">
            {tags?.map(tag => (
              <Category
                name={tag.fieldValue}
                count={tag.totalCount}
              />
            ))}
          </Box>
          <Box title="Latest Posts">
            {topPosts.map((post, key) => (
              <Post {...post} index={key + 1} key={key} />
            ))}
          </Box>
        </Affix>
      </div>
    </aside>
  );
};

export default Sidebar;
