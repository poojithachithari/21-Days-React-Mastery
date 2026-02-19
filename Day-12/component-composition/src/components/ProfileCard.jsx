import React from "react";

const ProfileCard = ({ children, header, footer, buttonVariant }) => {
  const buttonVariantStyles = {
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
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f2f2fa",
          }}
        >
          {header}
        </div>
      )}
      {children}
      {footer && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f2f2fa",
            
          }}
        >
         <button style={{...buttonVariantStyles[buttonVariant]}}>{footer}</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
