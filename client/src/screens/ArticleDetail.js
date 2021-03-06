import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/blog/Sidebar";
import PageTitle from "../components/PageTitle";
import BlogDetail from "../components/blog/BlogDetail";
import ArticleControls from "../components/blog/ArticleControls";
import ArticleComments from "../components/blog/ArticleComments";
import Reply from "../components/blog/Reply";
const ArticleDetail = (props) => {
  return (
    <div>
      <PageTitle title="جزییات بلاگ" />
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogDetail id={props.match.params.id} />
              <ArticleControls id={props.match.params.id} />
              <ArticleComments id={props.match.params.id} />
              <Reply />
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};
export default ArticleDetail;
