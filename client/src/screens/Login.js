import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../actions/userActions";
import { Link } from "react-router-dom";
const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.userLogin);
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [userInfo, redirect, history]);
  const submitHandler = (event) => {
    event.preventDefault();
    email && password && dispatch(userLoginAction(email, password));
  };
  return (
    <div>
      <PageTitle title="ورود" />
      <section className="login-area ptb-100">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="login-image">
                <img src="assets/img/marketing.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {error ? (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : null}
              <div className="login-form">
                <h3>خوش آمدید!</h3>
                <p>لطفا وارد حساب کاربری خود شوید.</p>
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="ایمیل"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="رمز عبور"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkme"
                        />
                        <label className="form-check-label" htmlFor="checkme">
                          مرا به خاطر بسپار!
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-6 text-right">
                      <p className="forgot-password">
                        <a href="#">فراموشی رمز عبور؟</a>
                      </p>
                    </div>

                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-primary">
                        هم اکنون وارد شوید!
                      </button>
                      <br />
                      <span>
                        کاربر جدید هستید؟{" "}
                        <Link to="/register">ثبت نام کن!</Link>
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
