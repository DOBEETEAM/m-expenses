import React, {useEffect} from 'react';
// @packages
import i18next from 'i18next';
// @types
import {Theme} from '@resources/theme';
import {ThemeContextState, ThemeProviderProps} from './theme.type';
// @stores
import {setTheme as setStoreTheme} from '@features/theme';
// @contexts
import {ThemeContext} from './theme.context';
// @constants
import {BASE_DARK_THEME, BASE_LIGHT_THEME} from '@resources/theme';
// @hooks
import {useAppDispatch} from '@app';

// Creating our stateful context provider
// We are using React.memo for optimization
const _ThemeProvider = ({children, initial}: ThemeProviderProps) => {
  const dispatch = useAppDispatch();

  const [theme, setTheme] = React.useState(initial);

  const toggleTheme = React.useCallback(
    async (callback: (nextTheme: Theme) => void = () => {}) => {
      setTheme((currentTheme) => {
        let nextTheme = BASE_LIGHT_THEME;
        switch (currentTheme?.id) {
          case 'light':
            nextTheme = BASE_DARK_THEME;
            break;
          case 'dark':
            break;
        }

        nextTheme.name = i18next.getFixedT(null, 'theme')?.(nextTheme.id);

        callback(nextTheme);
        return nextTheme;
      });
    },
    [],
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

  // emit an event whenever the theme is changed.
  useEffect(() => {
    dispatch(setStoreTheme(theme));
  }, [dispatch, theme]);
  // Render our context provider by passing it the value to provide
  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeProvider = React.memo(_ThemeProvider);
