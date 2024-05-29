import React from 'react';
import { CiBookmark } from "react-icons/ci";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <CiBookmark className='save-product'/>
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          
          <h2 className="product-name">{product.title}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ProductList;