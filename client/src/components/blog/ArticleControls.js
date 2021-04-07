import React from "react";

const ArticleControls = () => {
  return (
    <div className="post-controls-buttons">
      <div className="controls-left">
        <a href="#">
          <i className="icofont-double-left"></i> پست قبلی
        </a>
      </div>

      <div className="controls-right">
        <a href="#">
          پست بعدی <i className="icofont-double-right"></i>
        </a>
      </div>
    </div>
  );
};
export default ArticleControls;
