import React from "react";

const Card = ({ children, header ,footer,variant='default' }) => {
    const variantStyles={
        default:{
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '1px solid #ddd'
        },
        outlined:{
            boxShadow: 'none',
            border: '2px solid #667eea'
        },
        elevated:{
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            border: 'none'
        }
    }
  return (
    <div className="card">
      <div
        className="card-content"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          margin: "20px",
          overflow:"hidden",
          ...variantStyles[variant]
        }}
      >
        {header && (
          <div
            style={{
              padding: "15px 20px",
              backgroundColor: "#f8f8fa",
              borderBottom: "1px solid #ddd",
              fontWeight: "bold",
            }}
          >
            {header}
          </div>
        )}
        {children}

        {footer && (
            <div style={{
                padding:'15px 20px',
                backgroundColor:'#f8f8fa',
                borderBottom: '1px solid #ddd',
                fontWeight: 'bold'
            }}>
                {footer}
            </div>
        )}
      </div>
    </div>
  );
};

export default Card;
