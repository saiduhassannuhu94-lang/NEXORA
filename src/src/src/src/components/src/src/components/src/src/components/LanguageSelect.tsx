type LanguageSelectProps = {
  onSelect: (language: "en" | "ha") => void;
};

export default function LanguageSelect({
  onSelect,
}: LanguageSelectProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#050816",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: 40 }}>
        🌍 Choose Your Language
      </h1>

      <button
        style={{
          width: 250,
          height: 60,
          marginBottom: 20,
          fontSize: 22,
        }}
        onClick={() => onSelect("en")}
      >
        🇬🇧 English
      </button>

      <button
        style={{
          width: 250,
          height: 60,
          fontSize: 22,
        }}
        onClick={() => onSelect("ha")}
      >
        🇳🇬 Hausa
      </button>
    </div>
  );
        }
