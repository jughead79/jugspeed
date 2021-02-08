import React, { useEffect, useState } from "react";
import ArticleCard from "../article-card";
import axios from "axios";
import "./style.css";

const ContentSection = (props) => {
  const [data, setData] = useState([]);
  const fetchPost = async () => {
    console.log(props.match)
    const response = await axios.get(
      "http://127.0.0.1:8000/article"
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
export default ContentSection;
