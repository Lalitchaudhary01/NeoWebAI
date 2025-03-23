import React, { useState, useEffect } from "react";

const Layout = ({ children }) => {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Check for saved preference or use system preference
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        return savedMode === "true";
      }
      // If no saved preference, check system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false; // Default to light mode on server
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Update localStorage and apply class when darkMode changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", darkMode.toString());

      // Apply dark mode to document
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Pass darkMode state and toggle function to children */}
      {React.Children.map(children, (child) => {
        // Check if the child is a valid React element before cloning
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { darkMode, toggleDarkMode });
        }
        return child;
      })}
    </div>
  );
};

export default Layout;
