import react, { useEffect, useState, useContext } from "react";
import PageTitle from "../components/PageTitle";
import ContentArea from "../components/blog/ContentArea";
import Sidebar from "../components/blog/Sidebar";
import { Context as ArticleContext } from "../context/ArticleContext";
import axios from "axios";

const Blog = (props) => {
  const [cat, setCat] = useState("");
  /////
  const [articles, setArticles] = useState({});
  const { state, cleanUp } = useContext(ArticleContext);
  const [offset, setOffset] = useState(0);
  const [postCount, setPostCount] = useState(0);
  /////
  const getData = async () => {
    const Url = cat
      ? `http://127.0.0.1:8000/blog/article/?category=${cat}&limit=5`
      : `http://127.0.0.1:8000/blog/article/?limit=5&offset=${offset}&order=id`;
    const response = await axios.get(Url);
    const data = response.data;
    setArticles(data.results);
    setPostCount(data.count / 5);
  };

  ///////

  useEffect(() => {
    setCat(props.match.params.id);
    state.articles ? setArticles(state.articles) : getData();
  }, [props.match.params.id, cat, state, offset]);

  return (
    <div>
      <PageTitle title="آخرین مطالب وبلاگ" />
      <section className="blog-area blog-section ptb-100">
        <div className="container">
          <div className="row">
            <ContentArea articles={articles} postCount={postCount} handleOffset={setOffset} />
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
