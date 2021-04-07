import React from "react";

const ContentPagination = () => {
  return (
    <div className="col-lg-12 col-md-12">
      <div className="pagination-area">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="icofont-double-left"></i>
              </a>
            </li>

            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#">
                <i className="icofont-double-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default ContentPagination;
