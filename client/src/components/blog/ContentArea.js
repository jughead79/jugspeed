import React, { useEffect, useState, useContext } from "react";
import ContentPagination from "./ContentPagination";
import BlogBox from "./BlogBox";
import axios from "axios";
import { Context as ArticleContext } from "../../context/ArticleContext";

const ContentArea = ({ categoryId }) => {
  const [articles, setArticles] = useState({});
  const { state, cleanUp } = useContext(ArticleContext);

  const fetchPost = async () => {
    const Url = categoryId
      ? `http://127.0.0.1:8000/blog/article?category=${categoryId}`
      : "http://127.0.0.1:8000/blog/article";
    const response = await axios.get(Url);
    setArticles(response.data);
  };

 
  useEffect(() => {
    console.log(state.articles)
    state.articles ? setArticles(state.articles) : fetchPost();
  }, [categoryId,state]);
  return (
    <div className="col-lg-8 col-md-12">
      <div className="row">
        {Object.values(articles).map((article) => {
          return <BlogBox article={article} key={article.id} />;
        })}
        <ContentPagination />
      </div>
    </div>
  );
};
export default ContentArea;
