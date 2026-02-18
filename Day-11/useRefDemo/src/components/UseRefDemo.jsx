import { useRef, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const UseRefDemo = () => {
  const searchRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Auto-focus search on mount
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFocusClick = () => {
    searchRef.current.focus();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎯 useRef Demo App</h1>

      <h2>🔍 Part 1: Auto-Focus Search</h2>

      <input
        type="text"
        placeholder="Search here..."
        ref={searchRef}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={handleFocusClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Focus Search
      </button>

      <hr style={{ margin: "30px 0" }} />

      <h2>📜 Part 2: Scroll to Top Button</h2>
      <p>Scroll down more than 300px to see the magic button appear!</p>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "15px 20px",
            fontSize: "18px",
            backgroundColor: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            zIndex: 1000,
          }}
        >
          ⬆️ Top
        </button>
      )}

      <hr style={{ margin: "30px 0" }} />
      <div style={{ height: "600px", padding: "20px" }}>
        <h3>📄 Scroll through this content...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Scroll down... keep scrolling...</p>
        <p>More content here...</p>
        <p>Keep scrolling...</p>
        <p>The scroll-to-top button should appear soon...</p>
        <p>Keep going...</p>
        <p>You're doing great!</p>
        <p>More content...</p>
        <p>Still scrolling?</p>
        <p>Almost at the bottom...</p>
        <p>Bottom of the page!</p>
      </div>
    </div>
  );
};

export default UseRefDemo;
