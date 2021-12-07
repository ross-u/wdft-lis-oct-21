import React, { createContext, useState } from 'react';

const ThemeContext = createContext();


// ThemeContext - storage of the data
// ThemeContext.Provider - used set up context providing

function ThemeProviderWrapper({ children }) {  // <- special wrapper components
  const [theme, setTheme] = useState('dark');


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={ { theme, toggleTheme } }>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWrapper }

