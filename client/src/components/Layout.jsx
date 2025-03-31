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

{
  /* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFoLTJ2MmgyVjF6TTE0IDFoLTJ2MmgyVjF6TTkgMUg3djJoMlYxek00IDFIMnYyaDJWMXpNNTQgMWgtMnYyaDJWMXpNNDkgMWgtMnYyaDJWMXpNNDQgMWgtMnYyaDJWMXpNMzkgMWgtMnYyaDJWMXpNMzQgMWgtMnYyaDJWMXpNMjkgMWgtMnYyaDJWMXpNMjQgMWgtMnYyaDJWMXpNMTkgMWgtMnYyaDJWMXpNNTkgNmgtMnYyaDJWNnpNMTQgNmgtMnYyaDJWNnpNOSA2SDd2MmgyVjZ6TTQgNkgydmJoMlY2ek01NCA2aC0ydjJoMlY2ek00OSA2aC0ydjJoMlY2ek00NCA2aC0ydjJoMlY2ek0zOSA2aC0ydjJoMlY2ek0zNCA2aC0ydjJoMlY2ek0yOSA2aC0ydjJoMlY2ek0yNCA2aC0ydjJoMlY2ek0xOSA2aC0ydjJoMlY2ek01OSAxMWgtMnYyaDJWMTF6TTE0IDExaC0ydjJoMlYxMXpNOSAxMUg3djJoMlYxMXpNNCAxMUgydjJoMlYxMXpNNTQgMTFoLTJ2MmgyVjExek00OSAxMWgtMnYyaDJWMTF6TTQ0IDExaC0ydjJoMlYxMXpNMzkgMTFoLTJ2MmgyVjExek0zNCAxMWgtMnYyaDJWMTF6TTI5IDExaC0ydjJoMlYxMXpNMjQgMTFoLTJ2MmgyVjExek0xOSAxMWgtMnYyaDJWMTF6TTU5IDE2aC0ydjJoMlYxNnpNMTQgMTZoLTJ2MmgyVjE2ek05IDE2SDd2MmgyVjE2ek00IDE2SDJ2MmgyVjE2ek01NCAxNmgtMnYyaDJWMTZ6TTQ5IDE2aC0ydjJoMlYxNnpNNDQgMTZoLTJ2MmgyVjE2ek0zOSAxNmgtMnYyaDJWMTZ6DTM0IDE2aC0ydjJoMlYxNnpNMjkgMTZoLTJ2MmgyVjE2ek0yNCAxNmgtMnYyaDJWMTZ6TTE5IDE2aC0ydjJoMlYxNnpNNTkgMjFoLTJ2MmgyVjIxek0xNCAyMWgtMnYyaDJWMjF6TTkgMjFIN3YyaDJWMjF6TTQgMjFIMnYyaDJWMjF6MTU0IDIxaC0ydjJoMlYyMXpNNDkgMjFoLTJ2MmgyVjIxek00NCAyMWgtMnYyaDJWMjF6DTM5IDIxaC0ydjJoMlYyMXpNMzQgMjFoLTJ2MmgyVjIxek0yOSAyMWgtMnYyaDJWMjF6MTI0IDIxaC0ydjJoMlYyMXpNMTkgMjFoLTJ2MmgyVjIxek01OSAyNmgtMnYyaDJWMjZ6TTE0IDI2aC0ydjJoMlYyNnpNOSAyNkg3djJoMlYyNnpNNCAyNkgydjJoMlYyNnpNNTQgMjZoLTJ2MmgyVjI2ek00OSAyNmgtMnYyaDJWMjZ6DTQ0IDI2aC0ydjJoMlYyNnpNMzkgMjZoLTJ2MmgyVjI2ek0zNCAyNmgtMnYyaDJWMjZ6MTI5IDI2aC0ydjJoMlYyNnpNMjQgMjZoLTJ2MmgyVjI2ek0xOSAyNmgtMnYyaDJWMjZ6TTU5IDMxaC0ydjJoMlYzMXpNMTQgMzFoLTJ2MmgyVjMxek05IDMxSDd2MmgyVjMxek00IDMxSDJ2MmgyVjMxek01NCAzMWgtMnYyaDJWMzF6DTQ5IDMxaC0ydjJoMlYzMXpNNDQgMzFoLTJ2MmgyVjMxek0zOSAzMWgtMnYyaDJWMzF6MTM0IDMxaC0ydjJoMlYzMXpNMjkgMzFoLTJ2MmgyVjMxek0yNCAzMWgtMnYyaDJWMzF6TDE5IDMxaC0ydjJoMlYzMXpNNTkgMzZoLTJ2MmgyVjM2ek0xNCAzNmgtMnYyaDJWMzZ6TTkgMzZIN3YyaDJWMzZ6DTQgMzZIMnYyaDJWMzZ6TTU0IDM2aC0ydjJoMlYzNnpNNDkgMzZoLTJ2MmgyVjM2ek00NCAzNmgtMnYyaDJWMzZ6TTM5IDM2aC0ydjJoMlYzNnpNMzQgMzZoLTJ2MmgyVjM2ek0yOSAzNmgtMnYyaDJWMzZ6DTI0IDM2aC0ydjJoMlYzNnpNMTkgMzZoLTJ2MmgyVjM2ek01OSA0MWgtMnYyaDJWNDF6TTE0IDQxaC0ydjJoMlY0MXpNOSA0MUg3djJoMlY0MXpNNCA0MUgydjJoMlY0MXpNNTQgNDFoLTJ2MmgyVjQxek00OSA0MWgtMnYyaDJWNDF6DTQ0IDQxaC0ydjJoMlY0MXpNMzkgNDFoLTJ2MmgyVjQxek0zNCA0MWgtMnYyaDJWNDF6MTI5IDQxaC0ydjJoMlY0MXpNMjQgNDFoLTJ2MmgyVjQxek0xOSA0MWgtMnYyaDJWNDF6DTU5IDQ2aC0ydjJoMlY0NnpNMTQgNDZoLTJ2MmgyVjQ2ek05IDQ2SDd2MmgyVjQ2ek00IDQ2SDJ2MmgyVjQ2ek01NCA0NmgtMnYyaDJWNDZ6DTQ5IDQ2aC0ydjJoMlY0NnpNNDQgNDZoLTJ2MmgyVjQ2ek0zOSA0NmgtMnYyaDJWNDZ6MTM0IDQ2aC0ydjJoMlY0NnpNMjkgNDZoLTJ2MmgyVjQ2ek0yNCA0NmgtMnYyaDJWNDZ6TDE5IDQ2aC0ydjJoMlY0NnpNNTkgNTFoLTJ2MmgyVjUxek0xNCA1MWgtMnYyaDJWNTF6DTkgNTFIN3YyaDJWNTF6TTQgNTFIMnYyaDJWNTF6DTU0IDUxaC0ydjJoMlY1MXpNNDkgNTFoLTJ2MmgyVjUxek00NCA1MWgtMnYyaDJWNTF6TTM5IDUxaC0ydjJoMlY1MXpNMzQgNTFoLTJ2MmgyVjUxek0yOSA1MWgtMnYyaDJWNTF6TDI0IDUxaC0ydjJoMlY1MXpNMTkgNTFoLTJ2MmgyVjUxek01OSA1NmgtMnYyaDJWNTZ6TTE0IDU2aC0ydjJoMlY1NnpNOSA1Nkg3djJoMlY1NnpNNCA1NkgydjJoMlY1NnpNNTQgNTZoLTJ2MmgyVjU2ek00OSA1NmgtMnYyaDJWNTZ6DTQ0IDU2aC0ydjJoMlY1NnpNMzkgNTZoLTJ2MmgyVjU2ek0zNCA1NmgtMnYyaDJWNTZ6TTI5IDU2aC0ydjJoMlY1NnpNMjQgNTZoLTJ2MmgyVjU2ek0xOSA1NmgtMnYyaDJWNTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div> */
}
