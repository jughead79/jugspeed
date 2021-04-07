import React from "react";

const Reply = () => {
  return (
    <div className="leave-a-reply">
      <h3>پاسخ دهید</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="نام کامل"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input type="email" className="form-control" placeholder="ایمیل" />
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="form-group">
            <textarea
              name="comment"
              cols="30"
              rows="5"
              className="form-control"
              placeholder="نظر شما"
            ></textarea>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <button type="submit" className="btn btn-primary">
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reply;
