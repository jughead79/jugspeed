import React from "react";
import ContentPagination from "./ContentPagination";
import BlogBox from "./BlogBox";


const ContentArea = ({ articles, postCount, handleOffset }) => {
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    handleOffset(selectedPage * 5);
  };

  return (
    <div className="col-lg-8 col-md-12">
      <div className="row">
        {Object.values(articles).map((article) => {
          return <BlogBox article={article} key={article.id} />;
        })}
        <ContentPagination
          handlePageClick={handlePageClick}
          pageCount={postCount}
        />
      </div>
    </div>
  );
};
export default ContentArea;
