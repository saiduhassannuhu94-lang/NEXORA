import { useEffect, useState } from "react";

type IntroProps = {
  onFinish: () => void;
};

export default function Intro({ onFinish }: IntroProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    const lines = [
      "The world once lived in peace...",
      "Then The Core was shattered...",
      "Twenty Gates were sealed...",
      "One Explorer will awaken...",
      "Your journey begins now..."
    ];

    let index = 0;

    const timer = setInterval(() => {
      if (index < lines.length) {
        setText(lines[index]);
        index++;
      } else {
        clearInterval(timer);
        setTimeout(onFinish, 2000);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "32px",
        textAlign: "center",
        padding: 20
      }}
    >
      {text}
    </div>
  );
      }
