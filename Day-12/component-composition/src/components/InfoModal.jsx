import React, { useEffect, useState } from "react";

const InfoModal = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const variantStyles = {
    default: { backgroundColor: "#525252", color: "#ffffff" },
    primary: { backgroundColor: "#3a5bae", color: "#ffffff" },
    secondary: { backgroundColor: "#4bc255", color: "#ffffff" },
  };
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowInfo(false);
      }
    };
    if (showInfo) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showInfo]);
  return (
    <div>
      <button
        onClick={() => setShowInfo(true)}
        style={{
          ...variantStyles[props.variant],
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {props.footer}
      </button>
      {showInfo ? (
        <div
          onClick={() => setShowInfo(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              maxWidth: "500px",
              width: "90%",
            }}
          >
            Info: {props.info}
            <br />
            <br />
            <button onClick={() => setShowInfo(false)}>Close</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InfoModal;
