import React from "react";
import PageTitle from "../components/PageTitle";

const Login = () => {
  return (
    <div>
      <PageTitle title="ورود" />
      <section class="login-area ptb-100">
        <div class="container">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="login-image">
                <img src="assets/img/marketing.png" alt="image" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="login-form">
                <h3>خوش آمدید!</h3>
                <p>لطفا وارد حساب کاربری خود شوید.</p>
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="ایمیل"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="رمز عبور"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="checkme"
                        />
                        <label class="form-check-label" for="checkme">
                          مرا به خاطر بسپار!
                        </label>
                      </div>
                    </div>

                    <div class="col-lg-6 text-right">
                      <p class="forgot-password">
                        <a href="#">فراموشی رمز عبور؟</a>
                      </p>
                    </div>

                    <div class="col-lg-12">
                      <button type="submit" class="btn btn-primary">
                        هم اکنون وارد شوید!
                      </button>
                      <br />
                      <span>
                        کاربر جدید هستید؟ <a href="signup.html">ثبت نام کن!</a>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
