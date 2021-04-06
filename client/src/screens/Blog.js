import react from "react";
import PageTitle from "../components/blog/PageTitle";
import ContentArea from "../components/blog/ContentArea";
import Sidebar from "../components/blog/Sidebar";
const Blog = () => {
  return (
    <div>
      <PageTitle />
      <section class="blog-area blog-section ptb-100">
        <div class="container">
          <div class="row">
            <ContentArea />
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
