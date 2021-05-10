import React from "react";

const Pricing = () => {
  return (
    <section className="pricing-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>طرح های قیمت گذاری آسان</h2>
          <div className="bar"></div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-table-box">
              <div className="pricingTable-header">
                <h3 className="title">پایه ای</h3>
                <div className="price-value">
                  <sup>تومان </sup>59.99 <span>/برای یه سال</span>
                </div>
              </div>

              <ul className="pricing-content">
                <li>مدیریت و بازاریابی</li>
                <li>بهینه سازی جستجوگرها</li>
                <li>25 کمپین تجزیه و تحلیل</li>
                <li>1،300 تغییر کلمات کلیدی</li>
                <li>25 بررسی رسانه های اجتماعی</li>
                <li>1 بهینه سازی رایگان</li>
                <li>24/7 پشتیبانی</li>
              </ul>

              <a href="#" className="btn btn-primary">
                هم اکنون بخرید
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="pricing-table-box">
              <div className="pricingTable-header">
                <h3 className="title">فوق العاده</h3>
                <div className="price-value">
                  <sup>تومان</sup>79.99 <span>/برای یه سال</span>
                </div>
              </div>

              <ul className="pricing-content">
                <li>مدیریت و بازاریابی</li>
                <li>بهینه سازی جستجوگرها</li>
                <li>25 کمپین تجزیه و تحلیل</li>
                <li>1،300 تغییر کلمات کلیدی</li>
                <li>25 بررسی رسانه های اجتماعی</li>
                <li>1 بهینه سازی رایگان</li>
                <li>24/7 پشتیبانی</li>
              </ul>

              <a href="#" className="btn btn-primary">
                هم اکنون بخرید
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="pricing-table-box">
              <div className="pricingTable-header">
                <h3 className="title">حرفه ای</h3>
                <div className="price-value">
                  <sup>تومان</sup>99.99 <span>/برای یه سال</span>
                </div>
              </div>

              <ul className="pricing-content">
                <li>مدیریت و بازاریابی</li>
                <li>بهینه سازی جستجوگرها</li>
                <li>25 کمپین تجزیه و تحلیل</li>
                <li>1،300 تغییر کلمات کلیدی</li>
                <li>25 بررسی رسانه های اجتماعی</li>
                <li>1 بهینه سازی رایگان</li>
                <li>24/7 پشتیبانی</li>
              </ul>

              <a href="#" className="btn btn-primary">
                هم اکنون بخرید
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
