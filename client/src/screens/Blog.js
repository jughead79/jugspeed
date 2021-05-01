import react, { useEffect, useState, useContext } from "react";
import PageTitle from "../components/PageTitle";
import ContentArea from "../components/blog/ContentArea";
import Sidebar from "../components/blog/Sidebar";
import { Context as ArticleContext } from "../context/ArticleContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { articlesList } from "../actions/articleActions";
const Blog = (props) => {
  const [articless, setArticles] = useState({});
  const { state, cleanUp } = useContext(ArticleContext);
  const [offset, setOffset] = useState(0);
  const [postCount, setPostCount] = useState(0);
  /////
  // const getData = async () => {
  //   const Url = cat
  //     ? `http://127.0.0.1:8000/blog/article/?category=${cat}&limit=5`
  //     : `http://127.0.0.1:8000/blog/article/?limit=5&offset=${offset}&order=id`;
  //   const response = await axios.get(Url);
  //   const data = response.data;
  //   setArticles(data.results);
  //   setPostCount(data.count / 5);
  // };

  ///////
console.log(props.history.location.search)
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articlelist);
  const { error, articles, loading, count } = articleList;
  useEffect(() => {
    dispatch(articlesList(props.match.params.id, offset,props.history.location.search));
  }, [dispatch,offset,props.match.params.id,props.history.location.search]);
  return (
    <div>
      <PageTitle title="آخرین مطالب وبلاگ" />
      <section className="blog-area blog-section ptb-100">
        <div className="container">
          <div className="row">
            {loading ? (
              <h2>loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              <ContentArea
                articles={articles}
                pageCount={count /5}
                handleOffset={setOffset}
              />
            )}
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
