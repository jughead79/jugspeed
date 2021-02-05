import React from "react";

const ProductCard = () => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" className="card-img-top" alt="avatar" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          read more ...
        </a>
      </div>
    </div>
  );
};
export default ProductCard;
