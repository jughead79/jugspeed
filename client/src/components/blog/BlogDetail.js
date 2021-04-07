import React, { useEffect, useState } from "react";
import axios from "axios";
const erfan = {
  "id": 2,
  "author": {
      "id": 2,
      "password": "erfan4321",
      "last_login": null,
      "is_superuser": true,
      "username": "Speedster",
      "first_name": "",
      "last_name": "",
      "email": "",
      "is_staff": true,
      "is_active": true,
      "date_joined": "2021-04-07T07:22:57.828251Z",
      "avatar": "http://127.0.0.1:8000/media/speedster.jpg",
      "phone": "09876543210",
      "balance": 400,
      "address": 1,
      "groups": [],
      "user_permissions": []
  },
  "category": {
      "id": 2,
      "name": "هنر"
  },
  "title": "محبوب ترین برنامه های کسب و کار جدید",
  "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  "create": "2021-04-06T11:03:12.306000Z",
  "modify": "2021-04-06T11:03:52.913000Z",
  "cover": "http://127.0.0.1:8000/media/blog-img1.jpg",
  "tags": []
}
const BlogDetail = ({id}) => {
  const [article, setArticle] = useState([]);
  const [category, setCategory] = useState({})
  const fetchArticle = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/blog/article/${id}`
    );
    setArticle(response.data);
    console.log(response.data)
    setCategory(response.data.category)
  };

  useEffect(() => {
    fetchArticle()
  }, []);
      return(
        <div className="blog-details">
        <div className="article-img">
          <img src={article.cover} alt="blog-details" />
          <div className="date">
            20 <br /> اسفند
          </div>
        </div>

        <div className="article-content">
          <ul className="category">
            <li>
            <a href="#">{article.category.name}</a>
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