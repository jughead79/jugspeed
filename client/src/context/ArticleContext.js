import createDataContext from "./createDataContext";
import Jugspeed from "../api/jugspeed";

const articleReducer = (state, action) => {
  switch (action.type) {
    case "fetch_posts":
      return {
        ...state,
        PostCount: action.payload.length,
        Posts: action.payload,
      };
    case "fetch_articles_by_search":
      return {
        ...state,
        articles: action.payload,
      };
    case "clean_up":
      return {...state,articles:''}
    default:
      return state;
  }
};

const fetchArticleBySearch = (dispatch) => async (searchText) => {
  const queryParam = searchText ? `?title__contains=${searchText}` : ``;
  const response = await Jugspeed.get(`/blog/article${queryParam}`);
  dispatch({ type: "fetch_articles_by_search", payload: response.data });
};

const cleanUp = (dispatch) => async () => {
  dispatch({ type: "clean_up"});
};


const fetchPosts = (dispatch) => async () => {
  const response = await Jugspeed.get("/post/");
  dispatch({ type: "fetch_posts", payload: response.data });
};

export const { Provider, Context } = createDataContext(
  articleReducer,
  { fetchPosts, fetchArticleBySearch, cleanUp},
  []
);
