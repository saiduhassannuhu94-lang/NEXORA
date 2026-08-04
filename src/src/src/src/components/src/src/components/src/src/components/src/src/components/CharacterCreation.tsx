type Props = {
  onStart: () => void;
};

export default function CharacterCreation({ onStart }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#0b1020",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Create Your Explorer</h1>

      <input
        type="text"
        placeholder="Enter your Explorer name"
        style={{
          padding: "15px",
          width: "300px",
          fontSize: "18px",
          borderRadius: "10px",
        }}
      />

      <button
        style={{
          width: "220px",
          height: "60px",
          fontSize: "20px",
        }}
        onClick={onStart}
      >
        Start Journey
      </button>
    </div>
  );
        }
