import React, { useState } from "react";

export default function ThemeButton(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    console.log("new theme applied");
  };

  document.documentElement.classList.toggle("light");

  return (
    <button
      id="light-and-dark"
      toggleTheme={toggleTheme}
      checked={theme === "dark"}
    >
      {theme === "light" ? "lightmode" : "darkmode"}
    </button>
  );
}
