import React from "react";
import Sidebar from "../components/blog/Sidebar";
import PageTitle from "../components/PageTitle";
const ArticleDetail = props => {
    
  return (
    <div>
      <PageTitle title="جزییات بلاگ" />
      {props.match.params.id}
      <section class="blog-details-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog-details">
                <div class="article-img">
                  <img src="assets/img/blog-details.jpg" alt="blog-details" />
                  <div class="date">
                    20 <br /> اسفند
                  </div>
                </div>

                <div class="article-content">
                  <ul class="category">
                    <li>
                      <a href="#">اطلاعات</a>
                    </li>
                    <li>
                      <a href="#">موبایل</a>
                    </li>
                    <li>
                      <a href="#">بازاریابی</a>
                    </li>
                    <li>
                      <a href="#">طراحی</a>
                    </li>
                    <li>
                      <a href="#">توسعه دهنده</a>
                    </li>
                  </ul>

                  <h3>سریع ترین برنامه های در حال رشد در سال 2019</h3>

                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است.
                  </p>

                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن
                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی
                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </p>

                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </p>

                  <blockquote class="blockquote">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                      با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک است.
                    </p>
                  </blockquote>

                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن
                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است.
                  </p>

                  <div class="share-post">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icofont-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icofont-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icofont-vimeo"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="post-controls-buttons">
                <div class="controls-left">
                  <a href="#">
                    <i class="icofont-double-left"></i> پست قبلی
                  </a>
                </div>

                <div class="controls-right">
                  <a href="#">
                    پست بعدی <i class="icofont-double-right"></i>
                  </a>
                </div>
              </div>

              <div class="post-comments">
                <h3>نظرات</h3>
                <div class="single-comment">
                  <div class="comment-img">
                    <img src="assets/img/client1.jpg" alt="client" />
                  </div>
                  <div class="comment-content">
                    <h4>جان اسمیت</h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                      با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                      از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم ا
                    </p>
                    <span>اسفند 1397</span>
                    <a href="#">پاسخ</a>
                  </div>
                </div>

                <div class="single-comment left-m">
                  <div class="comment-img">
                    <img src="assets/img/client2.jpg" alt="client" />
                  </div>
                  <div class="comment-content">
                    <h4>جان اسمیت</h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                      با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                      از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم ا
                    </p>
                    <span>اسفند 1397</span>
                    <a href="#">پاسخ</a>
                  </div>
                </div>

                <div class="single-comment">
                  <div class="comment-img">
                    <img src="assets/img/client3.jpg" alt="client" />
                  </div>
                  <div class="comment-content">
                    <h4>جان اسمیت</h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                      با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                      از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم ا
                    </p>
                    <span>اسفند 1397</span>
                    <a href="#">پاسخ</a>
                  </div>
                </div>

                <div class="single-comment">
                  <div class="comment-img">
                    <img src="assets/img/client4.jpg" alt="client" />
                  </div>
                  <div class="comment-content">
                    <h4>جان اسمیت</h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی
                      با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                      از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم ا
                    </p>
                    <span>اسفند 1397</span>
                    <a href="#">پاسخ</a>
                  </div>
                </div>
              </div>

              <div class="leave-a-reply">
                <h3>پاسخ دهید</h3>
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="نام کامل"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="ایمیل"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <textarea
                        name="comment"
                        cols="30"
                        rows="5"
                        class="form-control"
                        placeholder="نظر شما"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-primary">
                      ارسال
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Sidebar/>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ArticleDetail;
