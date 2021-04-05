import React from "react";

const GetStarted = () => {
  return (
    <section className="get-started ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>شروع به کار رایگان</h2>
          <div className="bar"></div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className="get-started-form">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="نام" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="ایمیل" />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="رمز عبور"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              ثبت نام کردن
            </button>
            <p>
              و یا استفاده شما <a href="#">از حساب فیس بوک</a>
            </p>
          </form>
        </div>
      </div>

      <canvas id="canvas"></canvas>
    </section>
  );
};
export default GetStarted;
