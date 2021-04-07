import React from "react";
import Sidebar from "../components/blog/Sidebar";
import PageTitle from "../components/PageTitle";
const ArticleDetail = props => {
  console.log(props.match.params.id)
  return (
    <div>
      <PageTitle title="جزییات بلاگ" />
      {props.match.params.id}
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="article-img">
                  <img src="assets/img/blog-details.jpg" alt="blog-details" />
                  <div className="date">
                    20 <br /> اسفند
                  </div>
                </div>

                <div className="article-content">
                  <ul className="category">
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

                  <blockquote className="blockquote">
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

              <div className="post-controls-buttons">
                <div className="controls-left">
                  <a href="#">
                    <i className="icofont-double-left"></i> پست قبلی
                  </a>
                </div>

                <div className="controls-right">
                  <a href="#">
                    پست بعدی <i className="icofont-double-right"></i>
                  </a>
                </div>
              </div>

              <div className="post-comments">
                <h3>نظرات</h3>
                <div className="single-comment">
                  <div className="comment-img">
                    <img src="assets/img/client1.jpg" alt="client" />
                  </div>
                  <div className="comment-content">
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

                <div className="single-comment left-m">
                  <div className="comment-img">
                    <img src="assets/img/client2.jpg" alt="client" />
                  </div>
                  <div className="comment-content">
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

                <div className="single-comment">
                  <div className="comment-img">
                    <img src="assets/img/client3.jpg" alt="client" />
                  </div>
                  <div className="comment-content">
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

                <div className="single-comment">
                  <div className="comment-img">
                    <img src="assets/img/client4.jpg" alt="client" />
                  </div>
                  <div className="comment-content">
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

              <div className="leave-a-reply">
                <h3>پاسخ دهید</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="نام کامل"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="ایمیل"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="comment"
                        cols="30"
                        rows="5"
                        className="form-control"
                        placeholder="نظر شما"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
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
