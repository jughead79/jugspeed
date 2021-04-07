import React from "react";

const SidebarSearchBox = () => {
  return (
    <div className="widget widget-search">
      <form>
        <input type="text" className="form-control" placeholder="جستجو" />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>
    </div>
  );
};
export default SidebarSearchBox;
