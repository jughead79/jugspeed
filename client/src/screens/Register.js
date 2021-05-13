import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../actions/userActions";
import { Link } from "react-router-dom";
const Register = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.userLogin);
  const redirect = location.search ? location.search.split("=")[1] : "/";
console.log(userInfo)
  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [userInfo, redirect, history]);
  const submitHandler = (event) => {
    event.preventDefault();
    if ((password != confirmPassword)) {
      setMessage("رمز عبور و تکرار آن یکی نمی باشد");
    } else {
      dispatch(userRegisterAction(name,email,password));
    }
  };
  return (
    <div>
      <PageTitle title="ثبت نام" />
      <section className="signup-area ptb-100">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="signup-image">
                <img src="assets/img/marketing.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {JSON.stringify(email)}
            <p>{message ? message : null}</p>
              <div className="signup-form">
                <h3>حساب کاربری برای خود بسازید</h3>
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام و نام خانوادگی"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </div>
                    </div>

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

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="تکرار رمز عبور"
                          value={confirmPassword}
                          onChange={(event) =>
                            setConfirmPassword(event.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkme"
                        />
                        <label className="form-check-label" htmlFor="checkme">
                          مرا به خاطر بسپار
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-primary">
                        ثبت نام کنید!
                      </button>
                      <br />
                      <span>
                        در حال حاضر یک کاربر ثبت شده است؟{" "}
                        <Link to="/login">ورود!</Link>
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
export default Register;
