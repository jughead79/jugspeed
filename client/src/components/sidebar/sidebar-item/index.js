import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, icon, count, id }) => {
  return (
    <Link to={`/article/category/${id}`} className="sidebar-item">
      <div className="title-holder">
        <span className={`${icon} sidebar-inner-item`}></span>
        <span>{title}</span>
      </div>
      <span>{count}</span>
    </Link>
  );
};

export default SidebarItem;
