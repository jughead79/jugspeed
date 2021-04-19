import react, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import ContentArea from "../components/blog/ContentArea";
import Sidebar from "../components/blog/Sidebar";
const Blog = (props) => {
  const [cat, setCat] = useState("");
  useEffect(() => {
    setCat(props.match.params.id);
  }, [props.match.params.id]);
  return (
    <div>
      <PageTitle title="آخرین مطالب وبلاگ" />
      <section className="blog-area blog-section ptb-100">
        <div className="container">
          <div className="row">
            <ContentArea categoryId={cat} />
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
