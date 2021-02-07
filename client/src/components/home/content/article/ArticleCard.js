import React from "react";
import { Link} from 'react-router-dom'
const ProductCard = ({ article }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={article.cover} className="card-img-top" alt="avatar" />
      <div className="card-body">
        <h5 className="card-title"> {article.title}</h5>
        <p className="card-text">{article.content}</p>
        <Link to={`article/${article.id}`} className="btn btn-primary">
          read more ...
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
