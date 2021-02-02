import React from "react";

const SidebarItem = ({ title, icon, count }) => {
  return (
    <div className="sidebar-item">
      <span className={icon}>ww</span>
      <p>{title}</p>
      <span>{count}</span>
    </div>
  );
};
export default SidebarItem;
