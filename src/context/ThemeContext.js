import React from 'react';

export const ThemeContext = React.createContext({
  isLightTheme: false,
  setIsLightTheme: () => {},
});
