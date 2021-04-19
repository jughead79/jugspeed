import React, { useState, useEffect } from "react";
import Jugspeed from "../../api/jugspeed";
import { Link } from "react-router-dom";
import moment from 'jalali-moment'
const SidebarRecentPost = () => {
  const [recentArticle, setRecentArticle] = useState({});
  const fetchPost = async () => {
    const response = await Jugspeed.get("/blog/article?limit=4");
    setRecentArticle(response.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="widget widget_recent_posts">
      <h3 className="widget-title">پست های اخیر</h3>
      <div className="bar"></div>
      <ul>
        {Object.values(recentArticle).map((article) => {
          return (
            <li>
              <div className="recent-post-thumb">
                <Link to={`/blog/show/${article.id}`}>
                  <img src={article.cover} alt="blog-image" />
                </Link>
              </div>

              <div className="recent-post-content">
                <h3>
                  <Link to={`/blog/show/${article.id}`}>{article.title}</Link>
                </h3>
                <span className="date">{moment(article.created).format('jYYYY/jMM/jDD')}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SidebarRecentPost;
