import axios from "axios";
const instance = axios.create({
  baseURL: "http://jugster.ir",
});
instance.interceptors.request.use(
  async (config) => {
    const user = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);
export default instance;
