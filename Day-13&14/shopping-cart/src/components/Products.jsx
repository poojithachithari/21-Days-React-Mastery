import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Products = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    {
      id: 1,
      name: "Shampoo",
      price: 20,
    },
    {
      id: 2,
      name: "Conditioner",
      price: 24,
    },
    {
      id: 3,
      name: "Hair Mask",
      price: 50,
    },
    {
      id: 4,
      name: "Hair Serum",
      price: 45,
    },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{product.name}</h3>
            <p
              style={{ fontSize: "20px", color: "#667eea", fontWeight: "bold" }}
            >
              {product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Add To Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
