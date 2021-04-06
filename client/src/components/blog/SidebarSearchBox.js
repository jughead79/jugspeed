import React from "react";

const SidebarSearchBox = () => {
  return (
    <div class="widget widget-search">
      <form>
        <input type="text" class="form-control" placeholder="جستجو" />
        <button type="submit">
          <i class="icofont-search-2"></i>
        </button>
      </form>
    </div>
  );
};
export default SidebarSearchBox;
