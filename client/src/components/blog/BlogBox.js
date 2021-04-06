import React from "react";

const BlogBox = ({article}) => {
  return (
    <div class="col-lg-6 col-md-6">
      <div class="single-blog-post">
        <a href="#" class="post-image">
          <img src={article.cover} alt="blog-image" />
        </a>

        <div class="blog-post-content">
          <ul>
            <li>
              <i class="icofont-user-male"></i> <a href="#">{article.author.username}</a>
            </li>
            <li>
              <i class="icofont-wall-clock"></i> اسفند 1397
            </li>
          </ul>
          <h3>
            <a href="#">{article.title}</a>
          </h3>
          <p>
            {article.content}
          </p>
          <a href="#" class="read-more-btn">
            ادامه مطلب <i class="icofont-rounded-double-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default BlogBox;
