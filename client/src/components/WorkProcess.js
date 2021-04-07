import React from "react";

const WorkProcess = () => {
  return (
    <section className="saas-work-process ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>فرآیند کار</h2>
          <div className="bar"></div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-work-process">
              <div className="icon">
                <i className="icofont-calendar"></i>
              </div>
              <h3>پلن</h3>
              <p>بهترین قیمت ها را از ما بخواهید</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-work-process">
              <div className="icon">
                <i className="icofont-code-alt"></i>
              </div>
              <h3>توسعه</h3>
              <p>بهترین قیمت ها را از ما بخواهید</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-work-process">
              <div className="icon">
                <i className="icofont-server"></i>
              </div>
              <h3>اجرا</h3>
              <p>بهترین قیمت ها را از ما بخواهید</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-work-process">
              <div className="icon">
                <i className="icofont-check"></i>
              </div>
              <h3>گزارش</h3>
              <p>بهترین قیمت ها را از ما بخواهید</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkProcess;
