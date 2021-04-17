import react from "react";
import PageTitle from "../components/PageTitle";
import ContentArea from "../components/blog/ContentArea";
import Sidebar from "../components/blog/Sidebar";
const BlogByCategory = (props) => {
    
  return (
    <div>
      <PageTitle title='آخرین مطالب وبلاگ'/>
      <section className="blog-area blog-section ptb-100">
        <div className="container">
          <div className="row">
            <ContentArea categoryId={props.match.params.id} />
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogByCategory;
