import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Provide the context to the app
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load the saved theme mode from localStorage
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Apply the theme to the body class
    document.body.className = darkMode ? 'dark' : '';
    // Save the theme mode to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prevMode => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
