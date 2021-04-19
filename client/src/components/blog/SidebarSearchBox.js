import React, { useContext, useState } from "react";
import { Context as ArticleContext } from "../../context/ArticleContext";
const SidebarSearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const { fetchArticleBySearch } = useContext(ArticleContext);

  const handleSearch = event => {
    event.preventDefault()
    fetchArticleBySearch(searchText)
    setSearchText('')
  }
  return (
    <div className="widget widget-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="جستجو"
          onChange={(event) => setSearchText(event.target.value)}
          value={searchText}
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>
    </div>
  );
};
export default SidebarSearchBox;
