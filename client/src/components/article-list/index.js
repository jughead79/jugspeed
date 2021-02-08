import React, { useEffect, useState } from "react";
import axios from "axios";

import ArticleCard from "../article-card";
import "./style.css";

const ArticleList = (props) => {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    var url = "http://127.0.0.1:8000/article/";

    if (Object.keys(props).length !== 0) {
      if (Object.keys(props.match.params).length !== 0) {
        var [key, value] = [Object.keys(props.match.params), Object.values(props.match.params)];
        url += `?${key}=${value}`;
      }
    }

    const response = await axios.get(url);
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

export default ArticleList;
