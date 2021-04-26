import React, { useEffect, useState, useContext } from "react";
import ContentPagination from "./ContentPagination";
import BlogBox from "./BlogBox";
import axios from "axios";
import { Context as ArticleContext } from "../../context/ArticleContext";
import ReactPaginate from "react-paginate";

const ContentArea = ({ categoryId }) => {
  const [articles, setArticles] = useState({});
  const { state, cleanUp } = useContext(ArticleContext);
  const [offset, setOffset] = useState(0);
  const [postCount, setPostCount] = useState(0);

  const getData = async () => {
    const Url = categoryId
      ? `http://127.0.0.1:8000/blog/article/?category=${categoryId}&limit=5`
      : `http://127.0.0.1:8000/blog/article/?limit=5&offset=${offset}&order=id`;
    const response = await axios.get(Url);
    const data = response.data;
    setArticles(data.results);
    setPostCount(data.count / 5);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * 5);
  };

  useEffect(() => {
    state.articles ? setArticles(state.articles) : getData();
  }, [categoryId, state, offset]);
  return (
    <div className="col-lg-8 col-md-12">
      <div className="row">
        {Object.values(articles).map((article) => {
          return <BlogBox article={article} key={article.id} />;
        })}
        <ContentPagination
          handlePageClick={handlePageClick}
          pageCount={postCount}
        />
      </div>
    </div>
  );
};
export default ContentArea;
