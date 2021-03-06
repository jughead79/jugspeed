import React from "react";
import { Link } from "react-router-dom";
import moment from "jalali-moment";
const BlogBox = ({ article }) => {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="single-blog-post">
        <a href="#" className="post-image">
          <img src={article.cover} alt="blog-image" />
        </a>

        <div className="blog-post-content">
          <ul>
            <li>
              <i className="icofont-user-male"></i>{" "}
              <a href="#">{article.author.username}</a>
            </li>
            <li>
              <i style={{float:"right"}} className="icofont-wall-clock"></i>
              <span>
              {moment(article.created).locale("fa").format("DD ")}
              {moment(article.created).locale("fa").format("MMMM ")}
              </span>
            </li>
          </ul>
          <h3>
            <a href="#">{article.title}</a>
          </h3>
          <p>{article.content}</p>
          <Link to={`/blog/show/${article.id}`} className="read-more-btn">
            ادامه مطلب <i className="icofont-rounded-double-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogBox;
