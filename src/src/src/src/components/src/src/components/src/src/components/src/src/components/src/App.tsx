import { useState } from "react";
import "./styles.css";

import Intro from "./components/Intro";
import LanguageSelect from "./components/LanguageSelect";
import MainMenu from "./components/MainMenu";
import CharacterCreation from "./components/CharacterCreation";

export default function App() {
  const [step, setStep] = useState<
    "intro" | "language" | "menu" | "character"
  >("intro");

  const [language, setLanguage] = useState<"en" | "ha">("en");

  if (step === "intro") {
    return (
      <Intro
        onFinish={() => setStep("language")}
      />
    );
  }

  if (step === "language") {
    return (
      <LanguageSelect
        onSelect={(lang) => {
          setLanguage(lang);
          setStep("menu");
        }}
      />
    );
  }

  if (step === "menu") {
    return (
      <div
        onClick={() => setStep("character")}
      >
        <MainMenu />
      </div>
    );
  }

  return (
    <CharacterCreation
      onStart={() => {
        alert("Level 1 will be added next.");
      }}
    />
  );
        }
