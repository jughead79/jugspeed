import React, { useEffect, useState } from "react";
import Jugspeed from "../../api/jugspeed";
import moment from "jalali-moment";

const BlogDetail = ({ id }) => {
  const [article, setArticle] = useState([]);
  const [category, setCategory] = useState({})
  const fetchArticle = async () => {
    const response = await Jugspeed.get(
      `/blog/article/${id}`
    );
    setArticle(response.data);
    console.log(response.data)
    setCategory(response.data.category)
  };

  useEffect(() => {
    fetchArticle()
  }, []);
  return (
    <div className="blog-details">
      <div className="article-img">
        <img src={article.cover} alt="blog-details" />
        <div className="date">
          {moment(article.created).locale("fa").format("DD")} <br /> {moment(article.created).locale("fa").format("MMMM")}
        </div>
      </div>

      <div className="article-content">
        <ul className="category">
          <li>
            <a href="#">{category.name}</a>
          </li>
        </ul>

        <h3>{article.title}</h3>

        <p>
          {article.content}
        </p>
        <div className="share-post">
          <ul>
            <li>
              <a href="#">
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-vimeo"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}
export default BlogDetail