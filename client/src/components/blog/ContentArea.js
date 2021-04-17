import React, { useEffect, useState } from "react";
import ContentPagination from "./ContentPagination";
import BlogBox from "./BlogBox";
import axios from "axios";
const ContentArea = ({ categoryId }) => {
  const [articles, setArticles] = useState({});

  const fetchPost = async () => {
    const Url = categoryId
      ? `http://127.0.0.1:8000/blog/article?category=${categoryId}`
      : "http://127.0.0.1:8000/blog/article";
    const response = await axios.get(Url);
    setArticles(response.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
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
