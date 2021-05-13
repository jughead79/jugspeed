import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/userActions";
const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <header id="header">
      <div className="crake-mobile-nav">
        <div className="logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
      </div>
      <div className="crake-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo.png" alt="logo" />
            </a>

            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarپشتیبانیedContent"
            >
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    خانه
                  </a>
                  <ul className="dropdown_menu">
                    <li>
                      <a href="index.html">صفحه لندینگ SaaS </a>
                    </li>
                    <li>
                      <a href="index-2.html">صفحه لندینگ اپ</a>
                    </li>
                    <li>
                      <a href="index-3.html">بازاریابی دیجیتال</a>
                    </li>
                    <li>
                      <a href="index-4.html">صفحه لندینگ محصول</a>
                    </li>
                    <li>
                      <a href="index-5.html">صفحه لندینگ نرم افزار</a>
                    </li>
                    <li>
                      <a href="index-6.html">صفحه لندینگ کتاب</a>
                    </li>
                    <li>
                      <a href="index-7.html">استارت آپ آژانسی</a>
                    </li>
                    <li>
                      <a href="index-8.html">فرایند پرداخت</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    صفحات
                  </a>
                  <ul className="dropdown_menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link active">
                        درباره
                      </a>
                      <ul className="dropdown_menu">
                        <li>
                          <a href="about-1.html" className="active">
                            درباره ما 1
                          </a>
                        </li>
                        <li>
                          <a href="about-2.html">درباره ما 2</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="features.html">ویژگی ها</a>
                    </li>

                    <li>
                      <a href="services.html">خدمات</a>
                    </li>

                    <li>
                      <a href="gallery.html">گالری</a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        تیم
                      </a>
                      <ul className="dropdown_menu">
                        <li>
                          <a href="team-1.html">تیم 1</a>
                        </li>
                        <li>
                          <a href="team-2.html">تیم 2</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        قیمت
                      </a>
                      <ul className="dropdown_menu">
                        <li>
                          <a href="pricing-1.html">قیمت 1</a>
                        </li>
                        <li>
                          <a href="pricing-2.html">قیمت 2</a>
                        </li>
                        <li>
                          <a href="pricing-3.html">قیمت 3</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        نمونه کار
                      </a>
                      <ul className="dropdown_menu">
                        <li>
                          <a href="project-1.html">نمونه کارها 2 ستون</a>
                        </li>
                        <li>
                          <a href="project-2.html">نمونه کارها 3 ستون</a>
                        </li>
                        <li>
                          <a href="project-3.html">نمونه کارها 4 ستون گسترده</a>
                        </li>
                        <li>
                          <a href="single-project.html">جزئیات نمونه کار</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        فروشگاه
                      </a>
                      <ul className="dropdown_menu">
                        <li>
                          <a href="shop-1.html">فروشگاه 1</a>
                        </li>
                        <li>
                          <a href="shop-2.html">فروشگاه 2</a>
                        </li>
                        <li>
                          <a href="shop-details.html">جزئیات فروشگاه</a>
                        </li>
                        <li>
                          <a href="cart.html">سبد خرید</a>
                        </li>
                        <li>
                          <a href="checkout.html">بررسی</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        بلاگ
                      </a>
                      <ul className="dropdown_menu">
                        <li>
                          <a href="blog-1.html">بلاگ 1</a>
                        </li>
                        <li>
                          <a href="blog-2.html">بلاگ 2</a>
                        </li>
                        <li>
                          <a href="single-blog.html">جزئیات بلاگ</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="login.html">ورود</a>
                    </li>
                    <li>
                      <a href="signup.html">ثبت نام</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">به زودی</a>
                    </li>
                    <li>
                      <a href="error.html">404 خطای</a>
                    </li>
                    <li>
                      <a href="faq.html">گفت و گو</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    نمونه کار
                  </a>
                  <ul className="dropdown_menu">
                    <li>
                      <a href="project-1.html">نمونه کارها 2 ستون</a>
                    </li>
                    <li>
                      <a href="project-2.html">نمونه کارها 3 ستون</a>
                    </li>
                    <li>
                      <a href="project-3.html">نمونه کارها 4 ستون گسترده</a>
                    </li>
                    <li>
                      <a href="single-project.html">جزئیات نمونه کار</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    بلاگ
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    فروشگاه
                  </a>
                  <ul className="dropdown_menu">
                    <li>
                      <a href="shop-1.html">فروشگاه 1</a>
                    </li>
                    <li>
                      <a href="shop-2.html">فروشگاه 2</a>
                    </li>
                    <li>
                      <a href="shop-details.html">جزئیات فروشگاه</a>
                    </li>
                    <li>
                      <a href="cart.html">سبد خرید</a>
                    </li>
                    <li>
                      <a href="checkout.html">بررسی</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="contact-us.html" className="nav-link">
                    تماس
                  </a>
                </li>
              </ul>
            </div>
            <div className="mr-auto others-option">
              <ul className="navbar-nav">
                <li className="nav-item cart-wrapper">
                  <a href="#">
                    <i className="icofont-shopping-cart cart-icon"></i>

                    <span>0</span>
                  </a>
                </li>
                <li className="header-search-box">
                  <a href="#header-search" title="Search">
                    <i className="icofont-search-2"></i>
                  </a>
                </li>

                {userInfo ? (
                  <li data-toggle="modal" data-target="#myModal2">
                    <div className="side-menu">
                      <span className="bar-1"></span>
                      <span className="bar-2"></span>
                      <span className="bar-3"></span>
                    </div>
                    <ul className="dropdown_menu">
                      <li>
                        <p onClick={() => dispatch(userLogout())}>خروج</p>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      ورود
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
