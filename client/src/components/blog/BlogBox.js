import React from "react";

const BlogBox = () => {
  return (
    <div class="col-lg-6 col-md-6">
      <div class="single-blog-post">
        <a href="#" class="post-image">
          <img src="assets/img/blog-img1.jpg" alt="blog-image" />
        </a>

        <div class="blog-post-content">
          <ul>
            <li>
              <i class="icofont-user-male"></i> <a href="#">ادمین</a>
            </li>
            <li>
              <i class="icofont-wall-clock"></i> اسفند 1397
            </li>
          </ul>
          <h3>
            <a href="#">محبوب ترین برنامه های کسب و کار جدید</a>
          </h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.{" "}
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
