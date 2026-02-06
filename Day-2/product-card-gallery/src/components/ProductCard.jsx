import React from "react";

const ProductCard = ({children,productName,productPrice}) => {
  return (
    <div className="product-card">
      {children}
      <p>
        <b>Product Name: </b>{productName}
      </p>
      <p>
        <b>Price: </b>
        <i>{productPrice}</i>
      </p>
    </div>
  );
}
export default ProductCard;
