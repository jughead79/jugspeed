import React from "react";

const SearchBox = () => {
  return (
    <div id="header-search" className="header-search">
      <button type="button" className="close">
        ×
      </button>
      <form className="header-search-form">
        <input type="search" value="" placeholder="همینجا تایپ کنید........" />
        <button type="submit" className="btn btn-primary">
          جستجو
        </button>
      </form>
    </div>
  );
};
export default SearchBox;
