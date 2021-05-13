import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { articleListReducer } from "./reducers/articleReducers";
import { userLoginReducer } from "./reducers/userReducers";
const reducer = combineReducers({
  articlelist: articleListReducer,
  userLogin: userLoginReducer,
});

const userLoginInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userLoginInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
