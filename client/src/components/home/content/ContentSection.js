import React from "react";
import ProductCard from "./product/ProductCard";
import './style.css'
const ContentSection = () => {
  return (
    <div className='content'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
export default ContentSection;
