import React from "react";

const SidebarRecentPost = () => {
  return (
    <div className="widget widget_recent_posts">
      <h3 className="widget-title">پست های اخیر</h3>
      <div className="bar"></div>

      <ul>
        <li>
          <div className="recent-post-thumb">
            <a href="#">
              <img src="assets/img/blog-img1.jpg" alt="blog-image" />
            </a>
          </div>

          <div className="recent-post-content">
            <h3>
              <a href="#">10 روند بازاریابی داغ شما نیاز به پیاده سازی است</a>
            </h3>
            <span className="date">اسفند 1397</span>
          </div>
        </li>

        <li>
          <div className="recent-post-thumb">
            <a href="#">
              <img src="assets/img/blog-img3.jpg" alt="blog-image" />
            </a>
          </div>

          <div className="recent-post-content">
            <h3>
              <a href="#">10 روند بازاریابی داغ شما نیاز به پیاده سازی است</a>
            </h3>
            <span className="date">اسفند 1397</span>
          </div>
        </li>

        <li>
          <div className="recent-post-thumb">
            <a href="#">
              <img src="assets/img/blog-img2.jpg" alt="blog-image" />
            </a>
          </div>

          <div className="recent-post-content">
            <h3>
              <a href="#">10 روند بازاریابی داغ شما نیاز به پیاده سازی است</a>
            </h3>
            <span className="date">اسفند 1397</span>
          </div>
        </li>

        <li>
          <div className="recent-post-thumb">
            <a href="#">
              <img src="assets/img/blog-img4.jpg" alt="blog-image" />
            </a>
          </div>

          <div className="recent-post-content">
            <h3>
              <a href="#">10 روند بازاریابی داغ شما نیاز به پیاده سازی است</a>
            </h3>
            <span className="date">اسفند 1397</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default SidebarRecentPost;
