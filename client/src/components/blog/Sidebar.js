import React from "react";
import SidebarSearchBox from "./SidebarSearchBox";
import SidebarCategory from "./SidebarCategory";
import SidebarRecentPost from "./SidebarRecentPost";
import SidebarTagCloud from "./SidebarTagCloud";
const Sidebar = () => {
  return (
    <div class="col-lg-4 col-md-12">
      <div class="sidebar-area">
        <SidebarSearchBox />
        <SidebarCategory />
        <SidebarRecentPost />
        <SidebarTagCloud />
      </div>
    </div>
  );
};
export default Sidebar;
