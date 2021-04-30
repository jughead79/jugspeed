export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case "ARTICLE_LIST_REQUEST":
      return { loading: true, articles: [] };

    case "ARTICLE_LIST_SUCCESS":
      return {
        loading: false,
        articles: action.payload.results,
        count: action.payload.count,
      };

    case "ARTICLE_LIST_FAIL":
      return { loading: true, error: action.payload };

    default:
      return state;
  }
};
