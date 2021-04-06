import React from "react";
import ContentPagination from "./ContentPagination";
import BlogBox from "./BlogBox";
const ContentArea = () => {
  return (
    <div class="col-lg-8 col-md-12">
      <div class="row">
        <BlogBox />
        <ContentPagination />
      </div>
    </div>
  );
};
export default ContentArea;
