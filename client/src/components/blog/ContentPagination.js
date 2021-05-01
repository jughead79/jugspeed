import React from "react";
import ReactPaginate from "react-paginate";

const ContentPagination = ({ handlePageClick, pageCount }) => {
  return (
    <div className="col-lg-12 col-md-12">
      <div className="pagination-area">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <ReactPaginate
              containerClassName={"page-item"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              previousLabel={"قبلی"}
              nextLabel={"بعدی"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default ContentPagination;
