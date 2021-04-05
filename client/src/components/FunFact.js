import React from "react";

const FunFact = () => {
  return (
    <section className="fun-facts-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-funfact">
              <div className="icon">
                <i className="icofont-users"></i>
              </div>
              <h3>
                <span className="count">806</span>
              </h3>
              <p>مشتریان رضایت مند</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-funfact">
              <div className="icon">
                <i className="icofont-thumbs-up"></i>
              </div>
              <h3>
                <span className="count">202</span>
              </h3>
              <p>قدردانی</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-funfact">
              <div className="icon">
                <i className="icofont-diamond"></i>
              </div>
              <h3>
                <span className="count">5241</span>
              </h3>
              <p>زمان پاسخ گویی</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-funfact">
              <div className="icon">
                <i className="icofont-wrench"></i>
              </div>
              <h3>
                <span className="count">512</span>
              </h3>
              <p>ورود اطلاعات</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts-inner-area">
        <div className="container-fluid">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="fun-facts-image">
                <img src="assets/img/features-img2.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="fun-facts-inner-content">
                <h3>ساخت رابط زیبا در برنامه شما</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <p>
                  طراحی وب پاسخگو طرح توسعه نوآورانه توسعه نوآورانه مشتری است
                  رابط کاربری تحقیق و توسعه پروژه.
                </p>
                <ul>
                  <li>تماس ویدیویی نامحدود</li>
                  <li>اضافه کردن مخاطب مورد علاقه</li>
                  <li>فیلتر دوربین</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  ادامه مطلب
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FunFact;
