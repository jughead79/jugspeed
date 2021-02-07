import React, { useEffect, useState } from "react";
import ArticleCard from "../home/content/article/ArticleCard";
import axios from "axios";
import "./style.css";

const ArticleByCategory = (props) => {
  const [data, setData] = useState([]);
  const fetchPost = async () => {
    const id = props.match.params.categoryId;
    const response = await axios.get(
      `http://127.0.0.1:8000/article?category=${id}`
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const renderResult = () => {
    return data.map((article) => {
      return <ArticleCard key={article.id} article={article} />;
    });
  };
  return <div className="content">{renderResult()}</div>;
};
export default ArticleByCategory;
