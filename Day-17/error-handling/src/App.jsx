import Demo1 from "./components/Demo1_RenderError/Demo1";
import Demo2 from "./components/Demo2_ModernBoundary/Demo2";
function App() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          🛡️ Complete Error Handling Guide
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#666",
          }}
        >
          Learn all error handling techniques in one place!
        </p>
      </div>

      {/* Demo 1 */}
      <Demo1 />

      {/* Demo 2 */}
      <Demo2 />

      {/* Future demos will go here */}
    </div>
  );
}

export default App;
