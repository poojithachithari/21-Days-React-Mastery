import React, { useEffect, useState } from "react";
const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(()=>{
    const handleEscape = (e)=>{
        if(e.key ==='Escape'){
            setShowModal(false)
        }
    }

    if (showModal){
        window.addEventListener('keydown',handleEscape)
        document.body.style.overflow='hidden'
    }
    return ()=>{
        window.removeEventListener('keydown',handleEscape)
        document.body.style.overflow = 'unset'
    }
  },[showModal])
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal ? (
        <div onClick={() => setShowModal(false)}
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
          <div onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              maxWidth: "500px",
              width: "90%",
            }}
          >
            {children}
            <button onClick={() => setShowModal(false)}>Close Modal</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
