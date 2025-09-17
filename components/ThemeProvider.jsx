"use client";
import { useState, useEffect } from "react";

export default function ThemeProvider({ initialTheme, children }) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const newTheme = storedTheme || initialTheme || systemTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme === "dark" ? "dark" : "";
  }, [initialTheme]);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {children}
    </div>
  );
}
