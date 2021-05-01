import Jugspeed from "../api/jugspeed";

export const articlesList = (categoryId, offset, searchText) => async (
  dispatch
) => {
  try {
    const Url = searchText
      ? `/blog/article/${searchText}&limit=5&offset=${offset}&order=id`
      : categoryId
      ? `/blog/article/?category=${categoryId}&limit=5`
      : `/blog/article/?limit=5&offset=${offset}&order=id`;

    // if(searchText){
    //   Url = categoryId
    //   ? `/blog/article/${searchText}&limit=5`
    //   : `/blog/article/${searchText}&limit=5&offset=${offset}&order=id`;
    // }else{
    //   Url = categoryId
    //   ? `/blog/article/?category=${categoryId}&limit=5`
    //   : `/blog/article/?limit=5&offset=${offset}&order=id`;
    // }
    dispatch({ type: "ARTICLE_LIST_REQUEST" });
    const { data } = await Jugspeed.get(Url);
    dispatch({ type: "ARTICLE_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ARTICLE_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
