import React, { useState, useEffect } from "react";
import Jugspeed from "../../api/jugspeed";

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
                <a href="#">
                  <img src={article.cover} alt="blog-image" />
                </a>
              </div>

              <div className="recent-post-content">
                <h3>
                  <a href="#">{article.title}</a>
                </h3>
                <span className="date">اسفند 1397</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SidebarRecentPost;
