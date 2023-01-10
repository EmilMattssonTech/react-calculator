import React, { useState } from "react";

export default function ThemeButton({ theme, setTheme }) {
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  //   console.log("new theme applied");
  //   console.log(setTheme((curr) => (curr === "dark" ? "light" : "dark")));
  // };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  document.documentElement.classList.toggle("light");

  return (
    <button id="theme-button" onClick={toggleTheme}>
      {theme === "light" ? "Light theme" : "Dark theme"}
    </button>
  );
}
