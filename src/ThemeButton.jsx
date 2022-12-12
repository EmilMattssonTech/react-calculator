import React, { useState } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    console.log("new theme applied");
  };

  document.documentElement.classList.toggle("light");

  return (
    <button
      id="light-and-dark"
      onClick={toggleTheme}
      checked={theme === "dark"}
    >
      Lightmode
    </button>
  );
}
