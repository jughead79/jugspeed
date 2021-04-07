import react from "react";
import PageTitle from "../components/PageTitle";
import ContentArea from "../components/blog/ContentArea";
import Sidebar from "../components/blog/Sidebar";
const Blog = () => {
  return (
    <div>
      <PageTitle title='آخرین مطالب وبلاگ'/>
      <section className="blog-area blog-section ptb-100">
        <div className="container">
          <div className="row">
            <ContentArea />
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
