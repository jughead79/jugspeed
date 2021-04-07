import React from 'react'

const BlogDetail = ({article}) => {
  console.log(article)
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