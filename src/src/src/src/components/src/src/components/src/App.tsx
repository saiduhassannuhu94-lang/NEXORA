import { useState } from "react";
import "./styles.css";
import MainMenu from "./components/MainMenu";
import Intro from "./components/Intro";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return <MainMenu />;
}
