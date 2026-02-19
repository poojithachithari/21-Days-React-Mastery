import React, { useState } from "react";
import InfoModal from "./InfoModal";

const ProductCard = ({ children, header, footer, variant, info }) => {
  const variantStyles = {
    default: {
      backgroundColor: "#525252",
      color: "#ffffff",
    },
    primary: {
      backgroundColor: "#3a5bae",
      color: "#ffffff",
    },
    secondary: {
      backgroundColor: "#4bc255",
      color: "#ffffff",
    },
  };
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "20px",
      }}
    >
      {header && (
        <div style={{ ...variantStyles[variant] }}>Category: {header}</div>
      )}

      {children}

      {footer && (
        <div>
          <InfoModal
            style={{
              
              padding: "15px 20px",
              marginBottom: "15px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            footer={footer}
            info={info}
            variant={variant}
          ></InfoModal>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
