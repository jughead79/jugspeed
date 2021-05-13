import Jugspeed from "../api/jugspeed";

export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const { data } = await Jugspeed.post("/account/login/", {
      username: email,
      password: password,
    });
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "USER_LOGOUT" });
};

export const userRegisterAction =
  (name, email, password) => async (dispatch) => {
    try {
      dispatch({ type: "USER_REGISTER_REQUEST" });
      const { data } = await Jugspeed.post("/account/register/", {
        "email":email,
        "password":password,
        "name":name,
      });
      console.log(data)
      dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });

      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
