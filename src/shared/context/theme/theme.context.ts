import React from 'react';
import {BASE_LIGHT_THEME} from '@resources/theme';
import {ThemeContextState} from './theme.type';

const INITIAL_VALUE: ThemeContextState = {
  theme: BASE_LIGHT_THEME,
  toggleTheme: async () => {
    console.log('toggleTheme');
  },
  updateTheme: (updatedTheme) => {
    console.log('updateTheme', updatedTheme);
  },
};

export const ThemeContext =
  React.createContext<ThemeContextState>(INITIAL_VALUE);
