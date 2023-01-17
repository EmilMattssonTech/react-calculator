import React, { useState } from "react";
import "./Themebutton.css";

export default function ThemeButton({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  document.documentElement.classList.toggle("light");

  return (
    <label>
      <input type="checkbox" id="checkbox" onClick={toggleTheme} />
      <span className="check"></span>
    </label>
  );
}
