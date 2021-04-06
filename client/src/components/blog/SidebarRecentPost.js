import React from "react";

const SidebarRecentPost = () => {
  return (
    <div class="widget widget_recent_posts">
      <h3 class="widget-title">پست های اخیر</h3>
      <div class="bar"></div>

      <ul>
        <li>
          <div class="recent-post-thumb">
            <a href="#">
              <img src="assets/img/blog-img1.jpg" alt="blog-image" />
            </a>
          </div>

          <div class="recent-post-content">
            <h3>
              <a href="#">10 روند بازاریابی داغ شما نیاز به پیاده سازی است</a>
            </h3>
            <span class="date">اسفند 1397</span>
          </div>
        </li>

        <li>
          <div class="recent-post-thumb">
            <a href="#">
              <img src="assets/img/blog-img3.jpg" alt="blog-image" />
            </a>
          </div>

          <div class="recent-post-content">
            <h3>
              <a href="#">10 روند بازاریابی داغ شما نیاز به پیاده سازی است</a>
            </h3>
            <span class="date">اسفند 1397</span>
          </div>
        </li>

        <li>
          <div class="recent-post-thumb">
            <a href="#">
              <img src="assets/img/blog-img2.jpg" alt="blog-image" />
            </a>
          </div>

          <div class="recent-post-content">
            <h3>
              <a href="#">10 روند بازاریابی داغ شما نیاز به پیاده سازی است</a>
            </h3>
            <span class="date">اسفند 1397</span>
          </div>
        </li>

        <li>
          <div class="recent-post-thumb">
            <a href="#">
              <img src="assets/img/blog-img4.jpg" alt="blog-image" />
            </a>
          </div>

          <div class="recent-post-content">
            <h3>
              <a href="#">10 روند بازاریابی داغ شما نیاز به پیاده سازی است</a>
            </h3>
            <span class="date">اسفند 1397</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default SidebarRecentPost;
