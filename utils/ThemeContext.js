import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  themeMode: "light",
});

export const ThemeContextProvider = ThemeContext.Provider;
