import React from "react";

const SidebarItem = ({ title, icon, count }) => {
  return (
    <div className="sidebar-item">
      <div className='title-holder'>
        <span className={`${icon} sidebar-item`}></span>
        <span>{title}</span>
      </div>
      <span>{count}</span>
    </div>
  );
};
export default SidebarItem;
