import React from "react";

const SearchBox = () => {
  return (
    <div id="header-search" class="header-search">
      <button type="button" class="close">
        ×
      </button>
      <form class="header-search-form">
        <input type="search" value="" placeholder="همینجا تایپ کنید........" />
        <button type="submit" class="btn btn-primary">
          جستجو
        </button>
      </form>
    </div>
  );
};
export default SearchBox;
