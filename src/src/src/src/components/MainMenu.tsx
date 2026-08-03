export default function MainMenu() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom,#030712,#081b29,#0f172a)"
      }}
    >
      <h1
        style={{
          color: "#00ffff",
          fontSize: "70px",
          letterSpacing: "8px"
        }}
      >
        NEXORA
      </h1>

      <p
        style={{
          color: "white",
          marginTop: 15
        }}
      >
        THE LAST AWAKENING
      </p>

      <button
        style={{
          marginTop: 40,
          width: 220,
          height: 60,
          fontSize: 22
        }}
      >
        ▶ PLAY
      </button>

      <button
        style={{
          marginTop: 15,
          width: 220,
          height: 60,
          fontSize: 20
        }}
      >
        ⚙ SETTINGS
      </button>
    </div>
  );
    }
