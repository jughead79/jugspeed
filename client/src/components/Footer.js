import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area ptb-100 pb-0 bg-image">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <a href="ry" className="logo">
                <img src="assets/img/logo2.png" alt="logo2" />
              </a>
              <p>
                برنامه روزانه، هفته یا ماه را پیش ببرید و وضعیت پروژه را در یک
                نگاه ببینید. جستجو و فیلتر برای تمرکز بر روی هر چیزی یک پروژه
                واحد فردی.
              </p>

              <ul className="social-list">
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
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>شرکت</h3>

              <ul className="list">
                <li>
                  <a href="#">درباره</a>
                </li>
                <li>
                  <a href="#">شغل ها</a>
                </li>
                <li>
                  <a href="#">جوایز</a>
                </li>
                <li>
                  <a href="#">برنامه کاربر</a>
                </li>
                <li>
                  <a href="#">مکان ها</a>
                </li>
                <li>
                  <a href="#">ورود</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>محصولات</h3>

              <ul className="list">
                <li>
                  <a href="#">یکپارچگی</a>
                </li>
                <li>
                  <a href="#">شناسه</a>
                </li>
                <li>
                  <a href="#">قیمت</a>
                </li>
                <li>
                  <a href="#">مستندات</a>
                </li>
                <li>
                  <a href="#">ثبت نام</a>
                </li>
                <li>
                  <a href="#">یادداشتها</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>پشتیبانی</h3>

              <ul className="list">
                <li>
                  <a href="#">درباره</a>
                </li>
                <li>
                  <a href="#">تماس</a>
                </li>
                <li>
                  <a href="#">گفت و گو</a>
                </li>
                <li>
                  <a href="#">مطبوعات</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>کپی رایت @ 2019 کراک. تمام حقوق محفوظ است.</p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <a href="#">شرایط و ضوابط</a>
                </li>
                <li>
                  <a href="#">سیاست حفظ حریم خصوصی</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};
export default Footer;
