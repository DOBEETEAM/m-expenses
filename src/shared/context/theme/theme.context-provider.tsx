import React from "react";
// @types
import {Theme } from "@resources/theme";
import { ThemeContextState, ThemeProviderProps } from "./theme.type";
// @contexts
import { ThemeContext } from "./theme.context";
// @constants
import { BASE_DARK_THEME } from "@resources/theme/theme.dark";
import { BASE_LIGHT_THEME } from "@resources/theme/theme.light";

const _ThemeProvider = ({ children, initial }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState(initial);

  const toggleTheme = React.useCallback(
    async (callback: (nextTheme: Theme) => void = () => {}) => {
      setTheme((currentTheme) => {
        let nextTheme = BASE_LIGHT_THEME;
        switch (currentTheme?.id) {
          case "light":
            nextTheme = BASE_DARK_THEME;
            break;
          case "dark":
            break;
        }

        callback(nextTheme);
        return nextTheme;
      });
    },
    []
  );

  const updateTheme = React.useCallback((updatedTheme: Theme) => {
    setTheme(updatedTheme);
  }, []);

  const MemoizedValue = React.useMemo(() => {
    const value: ThemeContextState = {
      theme,
      updateTheme,
      toggleTheme,
    };

    return value;
  }, [theme, updateTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeProvider = React.memo(_ThemeProvider);
