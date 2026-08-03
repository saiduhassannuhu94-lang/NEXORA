import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans-serif"
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "10px"
        }}
      >
        NEXORA
      </h1>

      <p>The Last Awakening</p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 35px",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        PLAY
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
          }
